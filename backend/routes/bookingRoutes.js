const express = require("express");
const router = express.Router();

const { bookProperty, getMyBookings } = require("../controllers/bookingController");
const protect = require("../middleware/authMiddleware");

router.post("/book", protect, bookProperty);
router.get("/my-bookings", protect, getMyBookings);

module.exports = router;