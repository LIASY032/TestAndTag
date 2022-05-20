const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
  staffs: {
    type: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
          unique: true,
        },
      },
    ],
    default: [],
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Item",
  },
  date: { type: Date, required: true },
  is_finished: { type: Boolean, required: true, default: false },
});

const Request = mongoose.model("Request", requestSchema);

exports.Request = Request;
