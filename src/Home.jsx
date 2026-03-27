import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

return(
<div className="home-container">

  <div className="navbar">
    <h1 className="nav-logo">FindMyRide</h1>

    <button className="nav-btn">Contact Us</button>
    <button className="nav-btn">About Us</button>
    <button className="nav-btn">Total Saving</button>
    <button className="nav-btn">User Profile</button>
    <button className="nav-btn"  onClick={() => navigate("/login")}>Login/Register</button>
  </div>

  <div className="main-content">
    <h2 className="welcome-text">Welcome</h2>

    <input className="location-input" placeholder="Enter Pickup"/>
    <input className="location-input" placeholder="Enter destination"/>

    <button className="see-price-btn">See Price</button>
  </div>

  <button className="feedback-btn">Feedback</button>

  <h2 className="follow-label">Follow Us On</h2>

</div>
)
}
export default Home;