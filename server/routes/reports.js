const express = require("express");
const router = express.Router();

const { Item } = require("../models/Item");
const { auth } = require("../middleware/auth");
const { Report } = require("../models/report");
const { Request } = require("../models/request");
router.put("/:condition/:itemId/:requestId", auth, async function (req, res) {
  const item = await Item.findById(req.params.itemId);
  item.previous_test_date = new Date();
  const request = await Request.findById(req.params.requestId);
  if (req.body.next_test_date) {
    item.next_test_date = req.body.next_test_date;
  }

  request.is_finished = true;
  await request.save();
  await item.save();
  const report = new Report({
    condition: req.params.condition,
    reason: req.body.reason,
    item_id: req.params.itemId,
    date: new Date(),
    authorised_id: req.user.id,
  });
  await report.save();
  res.send(report);
});

module.exports = router;
