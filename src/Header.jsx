import { useNavigate } from "react-router-dom";
import "./Home.css";
import MyLogo from './MyLogo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
  <img className="logoheader" src={MyLogo} alt="logo" />
   <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
      <button className="nav-btn">Contact Us</button>
      <button className="nav-btn">About Us</button>
      <button className="nav-btn">Total Saving</button>
      <button className="nav-btn">History</button>
      <button className="nav-btn"  onClick={() => navigate("/UserProfile")}>User Profile</button>
      <button className="nav-btn" onClick={() => navigate("/login")}>
        Login/Register
      </button>
    </div>
  );
}

export default Header;