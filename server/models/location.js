const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  building: { type: String, required: true },
  floor: { type: [{ type: Number }], required: true, default: [] },
  room: { type: [{ type: Number }], required: true, default: [] },
});

const Location = mongoose.model("Location", locationSchema);

exports.Location = Location;
