const xlsx = require("xlsx");

const parseExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet);
};

module.exports = parseExcel;









// const xlsx = require("xlsx");

// const parseExcel = (filePath) => {
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(sheet);

//   // Clean and return parsed data
//   return jsonData.map((row) => ({
//     "FISHING Date": row["FISHING Date"] || "",
//     SHOOT_LAT: row["SHOOT_LAT"] || null,
//     SHOOT_LONG: row["SHOOT_LONG"] || null,
//     DEPTH: row["DEPTH"] || "", // Will be cleaned during processing
//     MAJOR_SPECIES: row["MAJOR_SPECIES"] || "",
//     TOTAL_CATCH: row["TOTAL_CATCH"] || 0,
//   }));
// };

// module.exports = parseExcel;
// const xlsx = require("xlsx");

// const parseExcel = (filePath) => {
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(sheet);

//   // Clean and validate data
//   return jsonData.map((row) => ({
//     "FISHING Date": row["FISHING Date"] || "",
//     SHOOT_LAT: row["SHOOT_LAT"] || null,
//     SHOOT_LONG: row["SHOOT_LONG"] || null,
//     DEPTH: row["DEPTH"] || "", // Cleaned later
//     MAJOR_SPECIES: row["MAJOR_SPECIES"] || null, // Ensure this is not null
//     TOTAL_CATCH: row["TOTAL_CATCH"] || 0,
//   }));
// };

// module.exports = parseExcel;
// const xlsx = require("xlsx");

// const parseExcel = (filePath) => {
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(sheet);

//   // Data transformation to match schema
//   const occurrenceData = [];
//   const abundanceData = [];

//   jsonData.forEach((row) => {
//     const speciesString = row["MAJOR_SPECIES"] || "";
    
//     // Parse species and their weights from the "Major_species" field
//     if (speciesString) {
//       const speciesList = speciesString.split(",").map((item) => {
//         const match = item.match(/([a-zA-Z\s]+)\((\d+)\)/); // Match species name and weight in parentheses
//         if (match) {
//           return {
//             species: match[1].trim(),  // Species name
//             weight: parseInt(match[2]), // Catch weight
//           };
//         }
//         return null;
//       }).filter(Boolean); // Remove invalid matches
     
//       // Insert data for Abundance schema
//       speciesList.forEach((speciesObj) => {
//         abundanceData.push({
//           Date: row["FISHING Date"] || "",
//           Latitude: row["SHOOT_LAT"] || null,
//           Longitude: row["SHOOT_LONG"] || null,
//           Depth: row["DEPTH"] ? parseFloat(row["DEPTH"].replace(/[^0-9.]/g, "")) : null,
//           Species: speciesObj.species,
//           Weight: speciesObj.weight,
//         });
//       });

//       // Insert data for Occurrence schema (Species names combined into a string)
//       occurrenceData.push({
//         Date: row["FISHING Date"] || "",
//         Latitude: row["SHOOT_LAT"] || null,
//         Longitude: row["SHOOT_LONG"] || null,
//         Depth: row["DEPTH"] ? parseFloat(row["DEPTH"].replace(/[^0-9.]/g, "")) : null,
//         Species: speciesList.map((speciesObj) => speciesObj.species).join(", "),  // Combine species names as a string
//       });
//     }
//   });

//   return { occurrenceData, abundanceData };
// };




// // module.exports = parseExcel;
// const xlsx = require("xlsx");

// const parseExcel = (filePath) => {
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const sheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(sheet);

//   // Data transformation to match schema
//   const occurrenceData = [];
//   const abundanceData = [];

//   jsonData.forEach((row) => {
//     const speciesString = row["MAJOR_SPECIES"] || "";
    
//     // Parse species and their weights from the "Major_species" field
//     if (speciesString) {
//       const speciesList = speciesString.split(",").map((item) => {
//         const match = item.match(/([a-zA-Z\s]+)\((\d+)\)/); // Match species name and weight in parentheses
//         if (match) {
//           return {
//             species: match[1].trim(),  // Species name
//             weight: parseInt(match[2]), // Catch weight
//           };
//         }
//         return null;
//       }).filter(Boolean); // Remove invalid matches
     
//       // Insert data for Abundance schema
//       speciesList.forEach((speciesObj) => {
//         abundanceData.push({
//           Date: row["FISHING Date"] || "",
//           Latitude: row["SHOOT_LAT"] || null,
//           Longitude: row["SHOOT_LONG"] || null,
//           Depth: row["DEPTH"] ? parseFloat(row["DEPTH"].replace(/[^0-9.]/g, "")) : null,
//           Species: speciesObj.species,
//           Weight: speciesObj.weight,
//         });
//       });

//       // Insert data for Occurrence schema (Species names combined into a string)
//       occurrenceData.push({
//         Date: row["FISHING Date"] || "",
//         Latitude: row["SHOOT_LAT"] || null,
//         Longitude: row["SHOOT_LONG"] || null,
//         Depth: row["DEPTH"] ? parseFloat(row["DEPTH"].replace(/[^0-9.]/g, "")) : null,
//         Species: speciesList.map((speciesObj) => speciesObj.species).join(", "),  // Combine species names as a string
//       });
//     }
//   });

//   // Return as an object containing both arrays
//   return { occurrenceData, abundanceData };
// };

// module.exports = parseExcel;
