const { ALLOW_LIST } = require("../variables/connection");

// CORS
const APP_ORIGIN = process.env.APP_ORIGIN || "http://localhost:3000";

const CORSConfiguration = () => {
    console.log(ALLOW_LIST)
    if (APP_ORIGIN.includes("localhost")) return APP_ORIGIN;
    else return ALLOW_LIST
}

module.exports = {
    CORSConfiguration
}