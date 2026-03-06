const Property = require("../models/Property");

// Add Property
const addProperty = async (req, res) => {
  try {

    const { title, location, price, type, description } = req.body;

    const property = await Property.create({
      title,
      location,
      price,
      type,
      description
    });

    res.status(201).json({
      message: "Property added successfully",
      property
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Properties
const getProperties = async (req, res) => {
  try {

    const properties = await Property.find();

    res.json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Properties
const searchProperties = async (req, res) => {
  try {

    const { location, maxPrice, type } = req.query;

    let filter = {};

    if (location) {
      filter.location = location;
    }

    if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }

    if (type) {
      filter.type = type;
    }

    const properties = await Property.find(filter);

    res.json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addProperty, getProperties, searchProperties };