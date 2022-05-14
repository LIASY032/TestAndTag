const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  condition: { type: String, required: true },
  reason: { type: String, required: false },
  date: { type: Date, required: true },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  authorised_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
