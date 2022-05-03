const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Item } = require("../models/Item");
const { Request } = require("../models/request");
const { User } = require("../models/user");

router.get("/", async function (req, res) {
  const item = await Item.find();
  res.send(item);
});

router.post("/add_new_item", async function (req, res) {
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
      "email",
    ])
  );
  await newItem.save();

  const users = await User.find();

  const newRequest = new Request({
    authorised_id: users[0]._id,
    item_id: newItem._id,
    date: new Date(),
  });

  await newRequest.save();

  res.send(newRequest);
});

// router.post("/", async function (req, res) {
//   let newItem = await Item(
//     _.pick(req.body, [
//       "name",
//       "ownership",
//       "purchased_date",
//       "description",
//       "building",
//       "floor",
//       "room",
//     ])
//   );

//   await newItem.save();
//   res.send(newItem);
// });

module.exports = router;
