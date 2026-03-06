const Booking = require("../models/Booking");

// Book Property
const bookProperty = async (req, res) => {
  try {

    const { propertyId } = req.body;

    const booking = await Booking.create({
      user: req.user.id,
      property: propertyId
    });

    res.status(201).json({
      message: "Property booked successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get My Bookings
const getMyBookings = async (req, res) => {
  try {

    const bookings = await Booking.find({ user: req.user.id })
      .populate("property");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { bookProperty, getMyBookings };