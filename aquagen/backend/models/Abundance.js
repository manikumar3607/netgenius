const mongoose = require("mongoose");

const abundanceSchema = new mongoose.Schema({
  Date: { type: Date, required: true },
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
  Depth: { type: Number, required: true },
  Species: { type: String, required: true },
  CatchWeight: { type: Number, required: true }
});

module.exports = mongoose.model("Abundance", abundanceSchema);
