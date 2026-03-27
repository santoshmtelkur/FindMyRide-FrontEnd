import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Header from "./Header";
function App() {
  return (
 <Router>
          <Header/>

   
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
           <Route path="/Forgotpassword" element={<Forgotpassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;