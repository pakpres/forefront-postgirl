const cors = require("cors");
const { CORSConfiguration } = require("./connection");
const {
  APP_ENABLE_LOCAL_HTTPS,
  APP_KEY_PATH,
  APP_CERT_PATH,
  APP_EMAIL_USER,
  APP_EMAIL_PASS,
} = require("../../config/environment");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const http = require("http");
const https = require("httpolyglot");
var nodemailer = require("nodemailer");

const AppConfig = (app, express) => {
  // Express app config
  app.locals.pluralize = require("pluralize");
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // CORS establishment
  app.use(
    cors({
      origin: CORSConfiguration(),
      credentials: true,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );

  // Tool to parse cookie
  app.use(cookieParser());

  // Initialize HTTP/HTTPS server
  // SSL cert for HTTPS access
  // (this is for test purposes and will not be used on production app)
  let server = http.createServer(app);
  if (APP_ENABLE_LOCAL_HTTPS) {
    const options = {
      key: fs.readFileSync(APP_KEY_PATH, "utf-8"),
      cert: fs.readFileSync(APP_CERT_PATH, "utf-8"),
    };
    server = https.createServer(options, app);
  }
  return { server, app };
};

const InitNodeMailer = () => {
  const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    debug: true,
    auth: {
      user: APP_EMAIL_USER,
      pass: APP_EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return mailer;
};

module.exports = {
  AppConfig,
  InitNodeMailer,
};
