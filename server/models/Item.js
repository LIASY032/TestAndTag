const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  ownership: { type: String, required: true },
  purchased_date: { type: Date, required: true },
  description: { type: String, required: false },
  building: { type: String, required: true },
  floor: { type: Number, required: true },
  room: { type: Number, required: true },
  previous_test_date: { type: Date, required: false },
  next_test_date: { type: Date, required: false },
  has_reminded: { type: Boolean, required: true, default: false },
});

const Item = mongoose.model("Item", itemSchema);

exports.Item = Item;
