const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  building: { type: String, required: true },
  floor: { type: Number, required: true },
  room: { type: Number, required: true },
});

const Location = mongoose.model("ItemLocation", locationSchema);

exports.ItemLocation = Location;
