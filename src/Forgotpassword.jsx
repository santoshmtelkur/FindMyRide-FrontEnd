import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

 // const [otpSent, setOtpSent] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formMessage, setFormMessage] = useState("");

  const validateInput = () => {
    if (!input.trim()) {
      setInputError("");
      setIsInputValid(false);
      return true;
    }

    const isMobile = /^[0-9]{10}$/.test(input);
    const isEmail =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input);

    if (!isMobile && !isEmail) {
      setInputError("Enter valid email or 10 digit mobile");
      setIsInputValid(false);
      return false;
    }

    setInputError("");
    setIsInputValid(true);
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

 /* const sendOtp = () => {
    if (validateInput()) {
      setOtpSent(true);
    }
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      validateInput() &&
      validatePassword() &&
      validateConfirmPassword();

    if (!isValid) {
      setFormMessage("Please check all details entered correctly.");
      return;
    }

    setFormMessage("Password reset successful");
  };

  const isFormFilled =
    input.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  return (
    <div className="container">
      <h2 className="form1">FindMyRide</h2>

      <form className="form" onSubmit={handleSubmit} noValidate>

        <label>Email or Phone *</label>
        <input
          placeholder="Enter Email or Phone"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={validateInput}
          className={inputError ? "NinputError" : ""}
        />
        {inputError && <span className="NerrorRight">{inputError}</span>}

       {/* <button
          type="button"
          onClick={sendOtp}
          disabled={!isInputValid}
          className="otp"
        >
          Send OTP
        </button>

        <label>OTP *</label>
        <input
          type="tel"
          placeholder="Enter OTP"
          disabled={!otpSent}
        />
           */}
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
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            {showConfirmPassword ? "🙈" : "👁"}
          </span>
        </div>
        {confirmPasswordError && (
          <span className="PerrorRight">{confirmPasswordError}</span>
        )}

        {formMessage && (
          <div className="formMessage">{formMessage}</div>
        )}

        <button
          className={`button ${
            isFormFilled ? "activeButton" : "disabledButton"
          }`}
          type="submit"
          disabled={!isFormFilled}
        >
          Reset Password
        </button>

        <button
          type="button"
          id="login"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>

      </form>
    </div>
  );
}

export default Forgotpassword;