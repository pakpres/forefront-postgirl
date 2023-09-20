require("dotenv").config();
const express = require("express");
const { defaultRoute } = require("./src/routes/default");
const {
  AppConfig,
  InitNodeMailer,
} = require("./src/config");
var app = express();

// Init App configurations
app = AppConfig(app, express);

// Init mailer
const mailer = InitNodeMailer();

// Init Routes
defaultRoute(app, mailer);

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Server is up and running on ${port} ...`);
});
