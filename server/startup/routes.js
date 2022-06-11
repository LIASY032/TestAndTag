const locations = require("../routes/locations");
const users = require("../routes/users");
const items = require("../routes/items");
const express = require("express");
const error = require("../middleware/error");
const reports = require("../routes/reports");
const notification = require("../middleware/notification");

module.exports = function (app) {
  app.use(express.json());

  // use notification middleware to remind the user
  app.use(notification);

  // load all routes
  app.use("/api/locations", locations);

  app.use("/api/reports", reports);

  app.use("/api/users", users);
  app.use("/api/items", items);

  // use error middleware to record errors
  app.use(error);
};
