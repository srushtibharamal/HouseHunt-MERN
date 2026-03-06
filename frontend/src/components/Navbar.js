import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      background:"#2c3e50",
      padding:"15px",
      display:"flex",
      justifyContent:"space-around"
    }}>

      <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/register">Register</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/add-property">Add Property</Link>

    </div>
  );
}

export default Navbar;