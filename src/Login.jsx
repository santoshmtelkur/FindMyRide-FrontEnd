import { useNavigate } from "react-router-dom";




function Login() {
  const navigate = useNavigate();
  return (
    <div  className="container">
    <form   className="form">
 <label>Email or Phone*</label>
<input placeholder="Enter Email or Phone"/>

<label>Password*</label>
<input placeholder="Enter password"/>

<button type="submit">Login</button>

<button type="button"  >Forgot Password</button>
<button type="button"     onClick={() => navigate("/")}>Create New Account</button>












    </form>
    </div>
  );
}

export default Login;