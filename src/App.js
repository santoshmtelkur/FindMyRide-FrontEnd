import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
           <Route path="/Forgotpassword" element={<Forgotpassword />} />
            <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;