const locations = require("../routes/locations");
const users = require("../routes/users");
const items = require("../routes/items");
const express = require("express");
const error = require("../middleware/error");
const reports = require("../routes/reports");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/locations", locations);

  app.use("/reports", reports);

  app.use("/api/users", users);
  app.use("/api/items", items);
  app.use(error);
};
