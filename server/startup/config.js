const config = require("config");

module.exports = function () {
  // if the database name is not specified in the config
  // uncaughtExceptions.log will record the error message
  if (!config.get("db")) {
    throw new Error("FATAL ERROR: db is not defined.");
  }
};
