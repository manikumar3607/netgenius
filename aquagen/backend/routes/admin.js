const express = require("express");
const multer = require("multer");
const { uploadData, fetchData, deleteRecord } = require("../controllers/adminController");

const router = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Admin Routes
router.post("/upload", upload.single("file"), uploadData);
router.get("/fetch", fetchData);
router.delete("/delete", deleteRecord);

module.exports = router;
