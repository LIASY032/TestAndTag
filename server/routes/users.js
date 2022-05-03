const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
router.get("/", async function (req, res) {
  const users = await User.find();
  res.send(users);
});

router.post("/", async function (req, res) {
  let newUser = new User(_.pick(req.body, ["password", "email", "name"]));
  await newUser.save();
  res.send("Success");
});

router.put("/:email", async function (req, res) {
  let user = await User.findOne({ email: req.params.email });

  if (!user) return res.status(404).send("User Not Found");
  if (user.password !== req.body.password) {
    return res.status(404).send("User Password Invalid");
  }
  const token = jwt.sign({ id: user._id }, config.get("key"));
  res.cookie("x-auth-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });
  res.send({ email: user.email, name: user.name });
});
module.exports = router;
