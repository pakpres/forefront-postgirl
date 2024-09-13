const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

exports.APP_PORT = process.env.PORT || 8001;
exports.APP_STATE = process.env.APP_STATE || "DEV";
exports.APP_WITH_PREFIX =
  process.env.APP_WITH_PREFIX === "true" ||
  process.env.APP_WITH_PREFIX === "1";

exports.APP_ORIGIN =
  process.env.APP_ORIGIN || "http://localhost:3000";
exports.APP_EMAIL_USER = process.env.APP_EMAIL_USER;
exports.APP_EMAIL_PASS = process.env.APP_EMAIL_PASS;

exports.APP_CERT_PATH = process.env.APP_CERT_PATH || "";
exports.APP_KEY_PATH = process.env.APP_KEY_PATH || "";
exports.APP_ENABLE_LOCAL_HTTPS =
  process.env.APP_ENABLE_LOCAL_HTTPS === "true" ||
  process.env.APP_ENABLE_LOCAL_HTTPS === "1";

exports.APP_OLYMPUS_SERVICE_BASE_URL =
  process.env.OLYMPUS_SERVICE_BASE_URL ||
  "http://localhost:8001";
exports.APP_RECOVERY_PASSWORD_REDIRECT_URL =
  process.env.APP_RECOVERY_PASSWORD_REDIRECT_URL ||
  "http://localhost:3000";
