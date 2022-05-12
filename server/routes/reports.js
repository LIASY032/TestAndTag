const express = require("express");
const router = express.Router();

const { Item } = require("../models/Item");
const { auth } = require("../middleware/auth");
const { Report } = require("../models/report");
const { Request } = require("../models/request");
router.get("/pass/:itemId/:requestId", auth, async function (req, res) {
  const item = await Item.findById(req.params.itemId);
  item.previous_test_date = new Date();
  const request = await Request.findById(req.params.requestId);
  request.is_finished = true;
  await request.save();
  await item.save();
  const report = new Report({
    condition: req.body.condition,
    reason: req.body.reason,
    itemId: req.params.itemId,
    date: new Date(),
  });
  await report.save();
  res.send(report);
});

module.exports = router;
