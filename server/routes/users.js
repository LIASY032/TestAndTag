const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User } = require("../models/user");

router.get("/", async function (req, res) {
  const users = await User.find();
  res.send(users);
});

router.post("/", async function (req, res) {
  console.log(req.body);
  let newUser = new User(_.pick(req.body, ["password", "email", "name"]));
  await newUser.save();
  res.send("Success");
});

module.exports = router;
