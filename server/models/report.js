const mongoose = require("mongoose");

const reportSchema = mongoose.schema({
  condition: { type: String, required: true },
  reason: { type: String, required: false },
  date: { type: Date, required: true },
});

const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
