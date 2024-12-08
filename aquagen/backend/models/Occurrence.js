const mongoose = require("mongoose");

const occurrenceSchema = new mongoose.Schema({
  Date: { type: Date, required: true },
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
  Depth: { type: Number, required: true },
  Species: { type: String, required: true }
});

module.exports = mongoose.model("Occurrence", occurrenceSchema);
