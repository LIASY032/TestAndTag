const winston = require("winston");
require("express-async-errors");

module.exports = function () {
  // run time errors recorded in uncaughtExceptions.log
  // other errors in logfile.log
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
