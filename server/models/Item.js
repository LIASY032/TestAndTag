const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  ownership: { type: String, required: true },
  report_id: { type: Number, required: true },
  purchased_date: { type: Date, required: true },
  description: { type: String, required: false },
});

const Item = mongoose.model("Item", itemSchema);

exports.Item = Item;
