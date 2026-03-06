const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import Routes
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/bookings", bookingRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("HouseHunt API Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});