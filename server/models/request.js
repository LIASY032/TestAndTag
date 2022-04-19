const mongoose = require("mongoose");

const requestSchema = mongoose.schema({
  authorised_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Item",
  },
  date: { type: Date, required: true },
  location_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
});

const Request = mongoose.model("Request", requestSchema);

exports.Request = Request;
