import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import IsAlive from "./pages/is-alive/IsAlive";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/isalive" element={<IsAlive />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}
