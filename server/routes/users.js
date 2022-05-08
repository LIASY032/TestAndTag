const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");

router.get("/", async function (req, res) {
  const users = await User.find();
  res.send(users);
});

router.post("/", async function (req, res) {
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered.");
  user = new User(_.pick(req.body, ["password", "email", "name"]));

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = jwt.sign({ id: user._id }, config.get("key"));
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
