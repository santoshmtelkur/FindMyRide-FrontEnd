import API_URL from "./api";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

  const [firstname, setfirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");

  const [isMobileValid, setIsMobileValid] = useState(false);
  const [isemailValid, setIsemailValid] = useState(false);

  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [countryCode, setCountryCode] = useState("");
  const [gender, setGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formMessage, setFormMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [emailOtp, setEmailOtp] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const response = await fetch(`${API_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.text();
      if (result === "success") {
        setIsOtpSent(true);
      }
    } catch (error) {
      console.log("OTP error");
    }
  };

  const sendOtpemail = async () => {
    try {
      const response = await fetch(`${API_URL}/otpemail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.text();
      if (result === "success") {
        setEmailOtp(true);
      }
    } catch (error) {
      console.log("OTP error");
    }
  };

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
      setIsMobileValid(false);
      return true;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMobileError("Enter valid 10 digit mobile number");
      setIsMobileValid(false);
      return false;
    }
    setMobileError("");
    setIsMobileValid(true);
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

  const validateConfirmPassword = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("");
      return true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError("");
      setIsemailValid(false);
      return true;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Enter valid email address");
      setIsemailValid(false);
      return false;
    }
    setEmailError("");
    setIsemailValid(true);
    return true;
  };

  const validateCountry = () => {
    if (!countryCode) return false;
    return true;
  };

  const validateGender = () => {
    if (!gender) return false;
    return true;
  };

  const isFormFilled =
    firstname.trim() !== "" &&
    mobile.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    countryCode !== "" &&
    gender !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");

    const isValid =
      validatefirstname() &&
      validateLastname() &&
      validateMobile() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateEmail() &&
      validateCountry() &&
      validateGender();

    if (!isValid) {
      setFormMessage("Please check all details entered correctly.");
      return;
    }

    const formData = {
      firstname,
      lastname,
      countryCode,
      mobile,
      password,
      email,
      gender
    };

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.text();
      setFormMessage(result);
    } catch (error) {
      setFormMessage("Error saving data.");
    }
  };

  return (
    <div className="container">
      <h2 className="form1">FindMyRide</h2>

      <form className="form" onSubmit={handleSubmit} noValidate>

        <label>First Name *</label>
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

        <div className="a">

          <label>Country Code *</label>
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="" disabled>Select CountryCode</option>
            <option value="+91">+91</option>
          </select>

          <label>Mobile Number *</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            className={mobileError ? "MinputError" : ""}
          />
          {mobileError && <span className="MerrorRight">{mobileError}</span>}

          <button
            type="button"
            onClick={sendOtp}
            disabled={!isMobileValid}
            className="otp"
          >
            Send OTP
          </button>

          <label>OTP *</label>
          <input
            type="tel"
            placeholder="Enter OTP"
            disabled={!isOtpSent}
          />

          <label>Password *</label>
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

          <label>Confirm Password *</label>
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword}
              className={confirmPasswordError ? "PinputError" : ""}
            />
            <span
              className="toggleIcon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </span>
          </div>
          {confirmPasswordError && <span className="PerrorRight">{confirmPasswordError}</span>}

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

          <button
            type="button"
            onClick={sendOtpemail}
            disabled={!isemailValid}
            className="otp"
          >
            Send OTP
          </button>

          <label>OTP *</label>
          <input
            type="tel"
            placeholder="Enter OTP"
            disabled={!emailOtp}
          />

          <label>Gender *</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

        </div>

        {formMessage && <div className="formMessage">{formMessage}</div>}

        <p className="p">By registering you agree to <a href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="termsLink">Terms and Conditions</a></p>

        <button
          className={`button ${isFormFilled ? "activeButton" : "disabledButton"}`}
          type="submit"
          disabled={!isFormFilled}
        >
          <span id="button2">SignUp</span>
        </button>

        <p id="logintext">Already a user</p>

        <button
          type="button"
          id="login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Register;