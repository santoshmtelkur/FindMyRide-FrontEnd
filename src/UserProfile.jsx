import "./UserProfile.css";
import { useNavigate } from "react-router-dom";

function UserProfile() {
      const navigate = useNavigate();
  return (
    <div className="profile-container">

      <p className="main-name">Santosh Kumar</p>
      <p className="sub">Santoshmtelkur@gmail.com</p>

      <div className="divider"></div>

      <p className="info">9108173736</p>
      <p className="info">Male</p>

      <button className="edit-btn"  onClick={() => navigate("/EditProfile")}>Edit Profile</button>

    </div>
  );
}

export default UserProfile;