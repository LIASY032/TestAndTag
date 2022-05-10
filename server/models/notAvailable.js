const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  staffs: {
    type: [
      {
        tester: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
    required: false,
  },
});

const NotAvailable = mongoose.model("NotAvailable", itemSchema);

exports.NotAvailable = NotAvailable;
