const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Item } = require("../models/Item");

router.get("/", async function (req, res) {
  const item = await Item.find();
  res.send(item);
});

router.post("/", async function (req, res) {
  console.log(req.body);
  let newItem = await Item(
    _.pick(req.body, [
      "name",
      "ownership",
      "purchased_date",
      "description",
      "building",
      "floor",
      "room",
    ])
  );

  await newItem.save();
  res.send(newItem);
});

module.exports = router;
