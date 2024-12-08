const express = require("express");
const { getData, downloadData } = require("../controllers/userController");

const router = express.Router();

// User Routes
router.get("/fetch", getData);
router.get("/download", downloadData);

module.exports = router;
