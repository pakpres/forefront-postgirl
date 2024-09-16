const express = require("express");
const { defaultRoute } = require("./src/routes/default");
const {
  AppConfig,
  InitNodeMailer,
} = require("./src/config");
const { APP_WITH_PREFIX } = require("./config/environment");
const expressApp = express();

// Init App configurations
const { server, app } = AppConfig(expressApp, express);

// Define Router
const routes = express.Router();

// Init mailer
const mailer = InitNodeMailer();

// Init Routes
defaultRoute(routes, mailer);

// Assign all routes
if (APP_WITH_PREFIX) app.use("/pg", routes);
else app.use("/", routes);

// Server listen
const port = process.env.PORT || 6969;
server.listen(port, () => {
  console.log(`Server is up and running on ${port} ...`);
});
