const { APP_ORIGIN } = require("../../config/environment");

const origin = APP_ORIGIN.split(" ") || [
  "http://localhost:8001",
];

module.exports = {
  ALLOW_LIST: origin,
};
