require("dotenv").config();
const express = require("express");
const { defaultRoute } = require("./src/routes/default");
const {
  AppConfig,
  InitNodeMailer,
} = require("./src/config");
const expressApp = express();

// Init App configurations
const { server, app } = AppConfig(expressApp, express);

// Init mailer
const mailer = InitNodeMailer();

// Init Routes
defaultRoute(app, mailer);

// Server listen
const port = process.env.PORT || 6969;
server.listen(port, () => {
  console.log(`Server is up and running on ${port} ...`);
});
