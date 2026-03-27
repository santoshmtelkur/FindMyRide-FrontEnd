import { useNavigate } from "react-router-dom";
import "./Home.css";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 className="nav-logo" onClick={() => navigate("/")}>FindMyRide</h1>
   <h1 className="nav-logo">FindMyRide</h1>
      <button className="nav-btn">Contact Us</button>
      <button className="nav-btn">About Us</button>
      <button className="nav-btn">Total Saving</button>
      <button className="nav-btn">History</button>
      <button className="nav-btn">User Profile</button>
      <button className="nav-btn" onClick={() => navigate("/login")}>
        Login/Register
      </button>
    </div>
  );
}

export default Header;