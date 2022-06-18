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
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Request",
    required: true,
  },
  feedback: {
    type: String,
    required: false,
  },
});

const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
