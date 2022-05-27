const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  building: { type: String, required: true, unique: true },
  floor: { type: [{ type: Number }], required: true, default: [] },
  room: { type: [{ type: Number }], required: true, default: [] },
  items: {
    type: [
      {
        name: { type: String, required: true },
        item_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Item",
          unique: true,
        },
        floor: { type: Number, required: true },
        room: { type: Number, required: true },
      },
    ],
    required: true,
    default: [],
  },
});

const Location = mongoose.model("Location", locationSchema);

exports.Location = Location;
