import { useState } from "react";
import axios from "axios";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/properties/add",
        {
          title,
          location,
          price,
          type,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(res.data.message);

      setTitle("");
      setLocation("");
      setPrice("");
      setType("");
      setDescription("");

    } catch (error) {
      alert(error.response?.data?.message || "Error adding property");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Property Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Property Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Property</button>

      </form>
    </div>
  );
}

export default AddProperty;