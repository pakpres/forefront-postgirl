const express = require("express");
const { defaultRoute } = require("./src/routes/default");
const {
  AppConfig,
  InitNodeMailer,
} = require("./src/config");
const {
  APP_WITH_PREFIX,
  APP_STATE,
  APP_PORT,
} = require("./config/environment");
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
const defaultPort = 6000;
const port =
  APP_STATE === PROD ? 0 : APP_PORT || defaultPort;

server.listen(port, () => {
  const actualPort = server.address().port;
  console.log(
    `Signaling Server is up and running on ${actualPort} ...`
  );
});
