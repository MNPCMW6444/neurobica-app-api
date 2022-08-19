import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User/User";
import IsAlive from "./pages/IsAlive/IsAlive";
import "./Body.css";
import Signin from "./pages/User/Signin/Signin";
import Signup from "./pages/User/Signup/Signup";

export default function Body() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/isalive" element={<IsAlive />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}
