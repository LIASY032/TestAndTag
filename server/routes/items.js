const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { Item } = require("../models/Item");
const { Request } = require("../models/request");
const { User } = require("../models/user");
const { NotAvailable } = require("../models/notAvailable");
const { Location } = require("../models/location");
router.get("/", async function (req, res) {
  const item = await Item.find();
  res.send(item);
});

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
  const location = await Location.findOne({ building: req.body.building });
  location.items.push({ name: newItem.name, item_id: newItem._id });
  await location.save();

  await newItem.save();

  // assign tasks
  let users = await User.find();

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  todayDate.setDate(todayDate.getDate() + 1);
  let notAvailable = await NotAvailable.findOne({ date: todayDate });

  if (notAvailable) {
    const staffs = notAvailable.staffs;
    users = users.filter((user) => {
      let exist = false;
      // check wether the user exist in staffs list
      staffs.forEach((staff) => {
        if (user._id == staff.tester) {
          exist = true;
        }
      });
      if (!exist) {
        return user;
      }
    });
  }

  // TODO: need to improve this random select function
  const selected = Math.floor(Math.random() * users.length);

  if (selected >= users.length) {
    selected = selected - 1;
  }
  const newRequest = new Request({
    authorised_id: users[selected]._id,
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
