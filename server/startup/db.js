const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");
module.exports = function () {
  // get the database name from config file then use the winston to record the database setting up information
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info("Connected to MongoDB..."));
};
