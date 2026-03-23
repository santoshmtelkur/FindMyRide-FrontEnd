import { useNavigate } from "react-router-dom";




function Forgotpassword() {
  const navigate = useNavigate();
  return (
    <div  className="container">
    <form   className="form">
 <label>Email or Phone*</label>
<input placeholder="Enter Email or Phone"/>


<button
  type="button"


  className="otp"
>
  Send OTP
</button>

          <label>OTP *</label>
          <input
  type="tel"
  placeholder="Enter OTP"
 
/>


<button
  type="button"


  className="otp"
>
  Resend OTP
</button>



<label>Password*</label>
<input placeholder="Enter password"/>



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


/* complete the full frontend 

now continue with the forgot password
do validation for every frontend modulw

*/
















