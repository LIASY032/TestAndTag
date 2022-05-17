const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User } = require("../models/user");
const { NotAvailable } = require("../models/notAvailable");
const { Request } = require("../models/request");
const { Item } = require("../models/Item");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const { auth } = require("../middleware/auth");

router.get("/", auth, async function (req, res) {
  const user = await User.findById(req.user._id);

  const users = await User.find();
  res.send(users);
});

router.get("/todo", auth, async function (req, res) {
  const userID = req.user.id;
  // TODO:
  // const requests = await Request.find({ authorised_id: userID , is_finished: false});

  const requests = await Request.find({ authorised_id: userID });
  const items = await Item.find();
  const todoList = [];

  for (const item of items) {
    for (const request of requests) {
      if (request.item_id.equals(item._id) && !request.is_finished) {
        let value = {
          _id: item._id,
          name: item.name,
          email: item.email,
          ownership: item.ownership,
          purchased_date: item.purchased_date,
          description: item.description,
          building: item.building,
          floor: item.floor,
          room: item.room,
          request: request._id,
        };
        todoList.push(value);
      }
    }
  }
  res.send(todoList);
});

router.put("/not-available", auth, async function (req, res) {
  const id = req.user.id;
  const date = req.body.notAvailable;
  let notAvailable = await NotAvailable.findOne({
    date,
  });

  if (!notAvailable) {
    notAvailable = new NotAvailable({
      date,
      staffs: [{ tester: id }],
    });
  } else {
    const staffs = notAvailable.staffs;
    let exist = false;
    staffs.forEach(function (staff) {
      if (staff.tester == id) {
        exist = true;
      }
    });
    if (!exist) {
      notAvailable.staffs.push({ tester: id });
    }
  }
  await notAvailable.save();
  res.send("success");
});

router.post("/", async function (req, res) {
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered.");
  user = new User(_.pick(req.body, ["password", "email", "name"]));

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = jwt.sign(
    { id: user._id, email: user.email },
    config.get("key")
  );
  res.cookie("x-auth-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });
  res.send({ email: user.email, name: user.name });
});

router.put("/:email", async function (req, res) {
  let user = await User.findOne({ email: req.params.email });

  if (!user) return res.status(404).send("User Not Found");

  bcrypt.compare(
    req.body.password,
    user.password,
    async function (error, result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, config.get("key"));
        res.cookie("x-auth-token", token, {
          secure: process.env.NODE_ENV !== "development",
          httpOnly: true,
        });
        res.send({ email: user.email, name: user.name });
      } else {
        return res.status(404).send("User Password Invalid");
      }
    }
  );
});

module.exports = router;
