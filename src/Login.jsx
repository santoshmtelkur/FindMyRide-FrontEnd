import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import API_URL from "./api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailOrPhoneError("");
      return true;
    }
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    const isPhone = /^[0-9]{10}$/.test(email);
    if (!isEmail && !isPhone) {
      setEmailOrPhoneError("Enter valid email or 10 digit mobile number");
      return false;
    }
    setEmailOrPhoneError("");
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

  const isFormFilled =
    email.trim() !== "" &&
    password.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage("");

    const isValid =
      validateEmail() &&
      validatePassword();

    if (!isValid) {
      setFormMessage("Please check all details entered correctly.");
      return;
    }

    const formData = {
      identifier: email,
      password
    };

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      setFormMessage(result);

     

    } catch (error) {
      setFormMessage("Error logging in.");
    }
  };


  
          if (formMessage === "Success") {
      navigate("/"); 
    }

  return (
    <div className="container">

      <form className="form" onSubmit={handleSubmit} noValidate>

        <label>Email or Phone *</label>
        <input
          type="text"
          placeholder="Enter Email or Phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          className={emailOrPhoneError ? "NinputError" : ""}
        />
        {emailOrPhoneError && <span className="NerrorRight">{emailOrPhoneError}</span>}

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

        {formMessage && (
          <div className="formMessage">
            {formMessage}
          </div>
        )}


        <button
          className={`button ${isFormFilled ? "activeButton" : "disabledButton"}`}
          type="submit"
          disabled={!isFormFilled}
        >
          <span id="button2">Login</span>
        </button>

        <button
          type="button"
          id="forgotBtn"
          onClick={() => navigate("/Forgotpassword")}
        >
          Forgot Password
        </button>

        <p id="logintext">New user?</p>
        <button
          type="button"
          id="login"
          onClick={() => navigate("/Register")}
        >
          Create New Account
        </button>

      </form>
    </div>
  );
}

export default Login;