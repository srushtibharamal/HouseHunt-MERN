const express = require("express");
const router = express.Router();

const {
  addProperty,
  getProperties,
  searchProperties
} = require("../controllers/propertyController");

const protect = require("../middleware/authMiddleware");

router.post("/add", protect, addProperty);
router.get("/", getProperties);
router.get("/search", searchProperties);

module.exports = router;