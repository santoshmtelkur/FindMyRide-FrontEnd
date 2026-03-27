import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  

  const validateEmailOrPhone = () => {
    if (!emailOrPhone.trim()) {
      setEmailOrPhoneError("");
      return true;
    }
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailOrPhone);
    const isPhone = /^[0-9]{10}$/.test(emailOrPhone);
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
    emailOrPhone.trim() !== "" &&
    password.trim() !== "";


  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormMessage("");

    const isValid =
      validateEmailOrPhone() &&
      validatePassword();

    if (!isValid) {
      setFormMessage("Please check all details entered correctly.");
      return;
    }

   
  };

  return (
    <div className="container">
      <h2 className="form1">FindMyRide</h2>

      <form className="form" onSubmit={handleSubmit} noValidate>

        <label>Email or Phone *</label>
        <input
          type="text"
          placeholder="Enter Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          onBlur={validateEmailOrPhone}
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