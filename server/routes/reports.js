const express = require("express");
const router = express.Router();

const { Item } = require("../models/Item");
const { auth } = require("../middleware/auth");
const { Report } = require("../models/report");
const { Request } = require("../models/request");

const { Location } = require("../models/location");

// finish a task
router.put("/:condition/:itemId/:requestId", auth, async function (req, res) {
  // find the item in the database
  const item = await Item.findById(req.params.itemId);

  // set previous_test_date to today
  item.previous_test_date = new Date();

  // set has_reminded to false helping remind the users
  item.has_reminded = false;

  // if the next_test_date is presented
  if (req.body.next_test_date) {
    item.next_test_date = req.body.next_test_date;
  }

  const request = await Request.findById(req.params.requestId);
  const location = await Location.findOne({ building: item.building });
  let exist = false;

  // check the item exists in locations
  for (const i of location.items) {
    if (i.item_id == item._id) exist = true;
  }

  // if the item does not exist, the location will be recorded
  if (!exist) {
    location.items.push({
      name: item.name,
      item_id: item._id,
      floor: item.floor,
      room: item.room,
    });
  }
  await location.save();

  // this request is done
  request.is_finished = true;
  await request.save();
  await item.save();

  // a new report will be created
  const report = new Report({
    condition: req.params.condition,
    reason: req.body.reason,
    item_id: req.params.itemId,
    date: new Date(),
    request: req.params.requestId,
  });
  await report.save();
  res.send(report);
});

module.exports = router;
