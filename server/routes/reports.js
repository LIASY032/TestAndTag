const express = require("express");
const router = express.Router();

const { Item } = require("../models/Item");
const { auth } = require("../middleware/auth");
const { Report } = require("../models/report");
const { Request } = require("../models/request");

const { Location } = require("../models/location");

// finish a task
router.put("/:condition/:itemId/:requestId", auth, async function (req, res) {
  const item = await Item.findById(req.params.itemId);
  item.previous_test_date = new Date();
  item.has_reminded = false;
  const request = await Request.findById(req.params.requestId);
  if (req.body.next_test_date) {
    item.next_test_date = req.body.next_test_date;
  }

  const location = await Location.findOne({ building: item.building });
  let exist = false;
  for (const i of location.items) {
    if (i.item_id == item._id) exist = true;
  }
  if (!exist) {
    location.items.push({
      name: item.name,
      item_id: item._id,
      floor: item.floor,
      room: item.room,
    });
  }
  await location.save();
  request.is_finished = true;
  await request.save();
  await item.save();
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
