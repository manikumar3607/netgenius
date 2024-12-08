const Occurrence = require("../models/Occurrence");
const Abundance = require("../models/Abundance");
const parseExcel = require("../utils/excelParser");

// Upload Excel Data
exports.uploadData = async (req, res) => {
  try {
    const { datasetType } = req.body; // 'occurrence' or 'abundance'
    const data = parseExcel(req.file.path);

    if (datasetType === "occurrence") {
      await Occurrence.insertMany(data);
    } else if (datasetType === "abundance") {
      await Abundance.insertMany(data);
    }

    res.status(200).json({ message: "Data uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch Data
exports.fetchData = async (req, res) => {
  try {
    const { datasetType } = req.query;
    const data =
      datasetType === "occurrence"
        ? await Occurrence.find({})
        : await Abundance.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Record
exports.deleteRecord = async (req, res) => {
  try {
    const { id } = req.query;
    const {datasetType} = req.query;
    if (datasetType === "occurrence") {
      await Occurrence.findByIdAndDelete(id);
    } else if (datasetType === "abundance") {
      await Abundance.findByIdAndDelete(id);
    }
    res.status(200).json({ message: "Record deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};































// const Occurrence = require("../models/Occurrence");
// const Abundance = require("../models/Abundance");
// const parseExcel = require("../utils/excelParser");

// //Upload Excel Data
// exports.uploadData = async (req, res) => {
//   try {
//     const { datasetType } = req.body; // 'occurrence', 'abundance', or empty
//     const data = parseExcel(req.file.path);

//     const occurrenceData = [];
//     const abundanceData = [];

//     // Process data for both tables
//     data.forEach((row) => {
//       const speciesList = row.MAJOR_SPECIES?.split(",").map((s) => s.trim()) || [];

//       // Occurrence data (presence/absence)
//       occurrenceData.push({
//         Date: row["FISHING Date"],
//         Latitude: row["SHOOT_LAT"],
//         Longitude: row["SHOOT_LONG"],
//         Depth: row["DEPTH"],
//         MajorSpecies: speciesList.join(", "), // List of species names
//       });

//       // Abundance data (species with weights)
//       speciesList.forEach((speciesEntry) => {
//         const match = speciesEntry.match(/(.+?)\((\d+)\)/); // Extract species and weight
//         if (match) {
//           abundanceData.push({
//             Date: row["FISHING Date"],
//             Latitude: row["SHOOT_LAT"],
//             Longitude: row["SHOOT_LONG"],
//             Depth: row["DEPTH"],
//             Species: match[1].trim(),
//             Weight: parseInt(match[2], 10),
//           });
//         }
//       });
//     });

//     // Save to DB based on datasetType
//     if (!datasetType || datasetType === "occurrence") {
//       await Occurrence.insertMany(occurrenceData);
//     }
//     if (!datasetType || datasetType === "abundance") {
//       await Abundance.insertMany(abundanceData);
//     }

//     res.status(200).json({ message: "Data uploaded successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

















// exports.uploadData = async (req, res) => {
//   try {
//     const { datasetType } = req.body;
//     const data = parseExcel(req.file.path);

//     const occurrenceData = [];
//     const abundanceData = [];

//     data.forEach((row) => {
//       // Extract and clean the Depth value
//       const depth = row["DEPTH"] ? parseFloat(row["DEPTH"].replace(/[^0-9.]/g, "")) : null;

//       // Check if Species exists; skip invalid rows
//       if (datasetType === "occurrence" && !row["MAJOR_SPECIES"]) {
//         throw new Error("Missing required Species field in Occurrence dataset.");
//       }

//       occurrenceData.push({
//         Date: row["FISHING Date"] || null,
//         Latitude: row["SHOOT_LAT"] || null,
//         Longitude: row["SHOOT_LONG"] || null,
//         Depth: depth,
//         Species: row["MAJOR_SPECIES"] || "", // Ensure Species exists
//       });
//     });

//     // Save Occurrence Data
//     if (datasetType === "occurrence") {
//       await Occurrence.insertMany(occurrenceData);
//     }

//     res.status(200).json({ message: "Data uploaded successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Fetch Data
// exports.fetchData = async (req, res) => {
//   try {
//     const { datasetType } = req.query;
//     const data =
//       datasetType === "occurrence"
//         ? await Occurrence.find({})
//         : await Abundance.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete Record
// exports.deleteRecord = async (req, res) => {
//   try {
//     const { id, datasetType } = req.query;

//     if (datasetType === "occurrence") {
//       await Occurrence.findByIdAndDelete(id);
//     } else if (datasetType === "abundance") {
//       await Abundance.findByIdAndDelete(id);
//     }

//     res.status(200).json({ message: "Record deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };




// const Occurrence = require("../models/Occurrence");
// const Abundance = require("../models/Abundance");
// const parseExcel = require("../utils/excelParser");

// // Upload Excel Data
// exports.uploadData = async (req, res) => {
//   try {
//     const { datasetType } = req.body; // 'occurrence' or 'abundance'
    
//     // Parse the Excel file
//     const { occurrenceData, abundanceData } = parseExcel(req.file.path);
    
//     // Log the parsed data for debugging
//     console.log("Occurrence Data: ", occurrenceData);
//     console.log("Abundance Data: ", abundanceData);

//     // Insert data into the appropriate collection
//     if (datasetType === "occurrence") {
//       await Occurrence.insertMany(occurrenceData); // Insert the occurrence data
//     } else if (datasetType === "abundance") {
//       await Abundance.insertMany(abundanceData); // Insert the abundance data
//     }

//     res.status(200).json({ message: "Data uploaded successfully!" });
//   } catch (error) {
//     console.error("Error uploading data: ", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Fetch Data
// exports.fetchData = async (req, res) => {
//   try {
//     const { datasetType } = req.query;
//     const data =
//       datasetType === "occurrence"
//         ? await Occurrence.find({})
//         : await Abundance.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete Record
// exports.deleteRecord = async (req, res) => {
//   try {
//     const { id } = req.query;
//     const { datasetType } = req.query;
//     if (datasetType === "occurrence") {
//       await Occurrence.findByIdAndDelete(id);
//     } else if (datasetType === "abundance") {
//       await Abundance.findByIdAndDelete(id);
//     }
//     res.status(200).json({ message: "Record deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
