const jwt = require("jsonwebtoken");
const config = require("config");

const { Item } = require("../models/Item");
const { User } = require("../models/user");
const { Request } = require("../models/request");
const sendEmail = require("../service/email");
async function notification(req, res, next) {
  const today = new Date();
  const date = today.toISOString().split("T")[0];
  const items = await Item.find();
  for (const item of items) {
    const test_date = item.next_test_date;

    if (test_date && !item.has_reminded) {
      if (test_date.toISOString().split("T")[0] === date) {
        const users = await User.find();
        // notify all users
        for (const user of users) {
          sendEmail(
            user.email,
            `An Item (${item.name}) needs to be tested in building ${item.building} floor ${item.floor} room ${item.room} `
          );
        }
        item.has_reminded = true;
        item.next_test_date = "0000-00-00";
        const request = new Request({ item_id: item._id, date: new Date() });
        await request.save();
        await item.save();
      }
    }
  }

  next();
}

module.exports = notification;
