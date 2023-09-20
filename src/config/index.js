const cors = require("cors");
const { CORSConfiguration } = require("./connection");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const csrf = require("csurf");
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

  // Global Middleware
  app.use((err, req, res, next) => {
    res.status(500).send("Something went wrong!");
  });

  return app;
};

const InitNodeMailer = () => {
  const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    debug: true,
    auth: {
      user: process.env.APP_EMAIL_USER,
      pass: process.env.APP_EMAIL_PASS,
    },
  });

  return mailer;
};

module.exports = {
  AppConfig,
  InitNodeMailer,
};
