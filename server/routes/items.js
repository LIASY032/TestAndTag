const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Item } = require("../models/Item");
const { Request } = require("../models/request");

const { auth } = require("../middleware/auth");
const sendEmail = require("../service/email");
router.get("/", async function (req, res) {
  const item = await Item.find();
  res.send(item);
});

router.get("/test_old_item/:id", async function (req, res) {
  // TODO: improve this
  const request = new Request({ item_id: req.params.id, date: new Date() });
  await request.save();
  res.send("success");
});

// the user requests a new item to be tested
router.post("/add_new_item", async function (req, res) {
  let newItem = await Item(
    _.pick(req.body, [
      "name",
      "ownership",
      "purchased_date",
      "description",
      "building",
      "floor",
      "room",
      "email",
    ])
  );

  // if the item is personal, an email should be sent to the the users to remind them
  // the item is still in the location
  if (req.body.ownership == "Personal") {
    sendEmail(
      req.body.email,
      `Make sure your item in building ${req.body.building} floor ${req.body.floor} room ${req.body.room}`
    );
  }

  await newItem.save();

  // a new request is created

  const request = new Request({ item_id: newItem.id, date: new Date() });
  await request.save();

  res.send("success");
});

// modify item if the user already logged in
router.put("/:itemId", auth, async function (req, res) {
  const item = await Item.findById(req.params.itemId);
  item.name = req.body.name;
  item.email = req.body.email;
  item.ownership = req.body.ownership;
  item.description = req.body.description;
  item.building = req.body.building;
  item.floor = req.body.floor;
  item.room = req.body.room;
  await item.save();
  res.send("success");
});

module.exports = router;
