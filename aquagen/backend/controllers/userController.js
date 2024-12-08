const Occurrence = require("../models/Occurrence");
const Abundance = require("../models/Abundance");
const { Parser } = require("json2csv");

// Fetch Data Based on Filters
exports.getData = async (req, res) => {
  try {
    const { datasetType, species, depth, location, catchWeight } = req.query;

    let filter = {};
    if (species) filter.Species = species;
    if (depth) filter.depth = { $lte: depth }; // Depth less than or equal to input
    if (location) {
      const [latitude, longitude] = location.split(",");
      filter.latitude = parseFloat(latitude);
      filter.longitude = parseFloat(longitude);
    }
    if (catchWeight && datasetType === "abundance")
      filter.weight = { $gte: catchWeight }; // Weight greater than or equal to input

    const data =
      datasetType === "occurrence"
        ? await Occurrence.find(filter)
        : await Abundance.find(filter);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Download Data in Excel/CSV Format
exports.downloadData = async (req, res) => {
  try {
    const { datasetType } = req.query;

    const data =
      datasetType === "occurrence"
        ? await Occurrence.find({})
        : await Abundance.find({});

    const fields =
      datasetType === "occurrence"
        ? ["Date", "Latitude", "Longitude", "Depth", "Species"]
        : ["Date", "Latitude", "Longitude", "Depth", "Species", "CatchWeight"];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment(`${datasetType}_data.csv`);
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
