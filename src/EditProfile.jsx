import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
                                                                     
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [gender, setGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [formMessage, setFormMessage] = useState("");

  const validatefirstname = () => {
    if (!firstname.trim()) {
      setFirstnameError("");
      return true;
    }
    if (!/^[A-Za-z]+$/.test(firstname)) {
      setFirstnameError("Only letters are allowed");
      return false;
    }
    setFirstnameError("");
    return true;
  };

  const validateLastname = () => {
    if (!lastname.trim()) {
      setLastnameError("");
      return true;
    }
    if (!/^[A-Za-z]+$/.test(lastname)) {
      setLastnameError("Only letters are allowed");
      return false;
    }
    setLastnameError("");
    return true;
  };

  const validateMobile = () => {
    if (!mobile.trim()) {
      setMobileError("");
      return true;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMobileError("Enter valid 10 digit mobile number");
      return false;
    }
    setMobileError("");
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("");
      return true;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Enter valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("");
      return true;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateGender = () => {
    return gender !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("");

    const isValid =
      validatefirstname() &&
      validateLastname() &&
      validateMobile() &&
      validateEmail() &&
      validatePassword() &&
      validateGender();

    if (!isValid) {
      setFormMessage("Please check all details correctly.");
      return;
    }

    setFormMessage("Profile updated successfully");
  };

  return (
    <div className="container">
      <h2 className="form1">Edit Profile</h2>

      <form className="form" onSubmit={handleSubmit} noValidate>

        <label>First Name</label> 
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
          onBlur={validatefirstname}
          className={firstnameError ? "NinputError" : ""}
        />
        {firstnameError && <span className="NerrorRight">{firstnameError}</span>}

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          onBlur={validateLastname}
          className={lastnameError ? "NinputError" : ""}
        />
        {lastnameError && <span className="NerrorRight">{lastnameError}</span>}

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          onBlur={validateMobile}
          className={mobileError ? "MinputError" : ""}
        />
        {mobileError && <span className="MerrorRight">{mobileError}</span>}

        <label>Email</label>
        <input
          type="email" 
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          className={emailError ? "NinputError" : ""}
        />
        {emailError && <span className="NerrorRight">{emailError}</span>}

        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            className={passwordError ? "PinputError" : ""}
          />
          <span
            className="toggleIcon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>
        {passwordError && <span className="PerrorRight">{passwordError}</span>}

<button
      className="button activeButton"
          onClick={() => navigate("/Forgotpassword")}
        >
          Forgot Password
        </button>







        <label>Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {formMessage && <div className="formMessage">{formMessage}</div>}

        <button className="button activeButton" type="submit">
          Save Changes
        </button>

      </form>
    </div>
  );
}

export default EditProfile;