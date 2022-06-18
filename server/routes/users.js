const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User } = require("../models/user");
const { Request } = require("../models/request");
const { Item } = require("../models/Item");
const { Report } = require("../models/report");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const { auth } = require("../middleware/auth");

// get a task list
router.get("/todo", auth, async function (req, res) {
  const requests = await Request.find({ is_finished: false });
  const items = await Item.find();
  const todoList = [];

  for (const item of items) {
    for (const request of requests) {
      if (request.item_id.equals(item._id)) {
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
          previous_test_date: item.previous_test_date,
        };
        todoList.push(value);
      }
    }
  }

  res.send(todoList);
});

// get all the requests are completed
router.get("/finished_task", auth, async (req, res) => {
  const requests = await Report.find();
  const items = await Item.find();
  const finishedTasks = [];

  for (const item of items) {
    for (const request of requests) {
      if (request.item_id.equals(item._id)) {
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
          condition: request.condition,
          previous_test_date: item.previous_test_date,
        };
        finishedTasks.push(value);
      }
    }
  }
  res.send(finishedTasks);
});

// user want to do a task
router.get("/do_task/:requestId", auth, async function (req, res) {
  const request = await Request.findById(req.params.requestId);
  let check = false;

  // check the user exists in request
  for (const i of request.staffs) {
    if ((i.id == req.user, id)) {
      check = true;
    }
  }
  if (!check) {
    request.staffs.push({ id: req.user.id });
    await request.save();
  }
  res.send("success");
});

// user logout
router.get("/logout", auth, async function (req, res) {
  // clean all cookies
  req.cookies["x-auth-token"] = "";
  res.cookie("x-auth-token", "", {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });

  res.send("logout");
});

// check the user exists in the request
router.get("/check_in_task_list/:requestId", auth, async function (req, res) {
  const request = await Request.findById(req.params.requestId);
  let check = false;
  for (const i of request.staffs) {
    if (i.id == req.user.id) {
      check = true;
    }
  }
  if (check) {
    res.send("success");
  } else {
    res.status(401).send("You haven't selected this task");
  }
});

// the user does not want to do this task
router.delete(
  "/delete_staff_in_task_list/:requestId",
  auth,
  async function (req, res) {
    const request = await Request.findById(req.params.requestId);
    let count = 0;
    for (const i of request.staffs) {
      if (i.id == req.user.id) {
        request.staffs.remove(i);
        await request.save();
      }
    }
    res.send("success");
  }
);

// user's registration
router.post("/", async function (req, res) {
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered.");
  user = new User(_.pick(req.body, ["password", "email", "name"]));

  const salt = await bcrypt.genSalt(10);

  // encrypt the password
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  // set the jwt token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    config.get("key")
  );

  // set the cookie to the browser
  res.cookie("x-auth-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });
  res.send({ email: user.email, name: user.name });
});

//user login
router.put("/:email", async function (req, res) {
  let user = await User.findOne({ email: req.params.email });

  // if the user does not exist
  if (!user) return res.status(404).send("User Not Found");

  // decrypt the password
  bcrypt.compare(
    req.body.password,
    user.password,
    async function (error, result) {
      if (result) {
        const token = jwt.sign({ id: user._id }, config.get("key"));
        // set the cookie to the browser
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
