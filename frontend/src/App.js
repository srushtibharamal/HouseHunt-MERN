import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProperty from "./pages/AddProperty";

function Home() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    const fetchProperties = async () => {

      try {

        const res = await axios.get("http://localhost:5000/api/properties");

        setProperties(res.data);

      } catch (error) {

        console.error("Error fetching properties:", error);

      }

    };

    fetchProperties();

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Properties</h1>

      {properties.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        properties.map((property) => (
          <div key={property._id} className="property-card">

            <h3 className="property-title">{property.title}</h3>

            <p>📍 Location: {property.location}</p>

            <p className="property-price">₹{property.price}</p>

            <p>🏠 Type: {property.type}</p>

            <p>{property.description}</p>

          </div>
        ))
      )}

    </div>
  );
}

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/add-property" element={<AddProperty />} />

      </Routes>

    </Router>
  );
}

export default App;