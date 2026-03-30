import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Header from "./Header";
import Result from "./Result";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
function App() {
  return (
 <Router>
          <Header/>

   
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
           <Route path="/Forgotpassword" element={<Forgotpassword />} />
         <Route path="/Result" element={<Result />} />
           <Route path="/UserProfile" element={<UserProfile />} />
           
           <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;