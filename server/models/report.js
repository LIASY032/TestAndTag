const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  condition: { type: String, required: true },
  reason: { type: String, required: false },
  date: { type: Date, required: true },
  item_id: { type: String, required: true },
});

const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
