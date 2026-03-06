const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },

  bookingDate: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);