const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Location } = require("../models/location");

router.get("/", async function (req, res) {
  const locations = await Location.find();
  res.send(locations);
});

router.post("/", async function (req, res) {
  let newLocation = new Location(
    _.pick(req.body, ["building", "floor", "room", "items"])
  );
  await newLocation.save();
  res.send("Success");
});

module.exports = router;
