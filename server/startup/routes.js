const locations = require("../routes/locations");
const express = require("express");
const error = require("../middleware/error");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/locations", locations);

  app.use(error);
};
