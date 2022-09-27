import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User/User";
import IsAlive from "./pages/IsAlive/IsAlive";
import "./Body.css";
import Signin from "./pages/User/Signin/Signin";
import Signupreq from "./pages/User/Signupreq/Signupreq";
import Signupfin from "./pages/User/Signupfin/Signupfin";
import Signedin from "./pages/User/Signedin/Signedin";
import Signout from "./pages/User/Signout/Signout";

export default function Body() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/isalive" element={<IsAlive />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signout" element={<Signout />} />
          <Route path="/user/signupreq" element={<Signupreq />} />
          <Route path="/user/signupfin" element={<Signupfin />} />
          <Route path="/user/signedin" element={<Signedin />} />
        </Routes>
      </Router>
    </div>
  );
}
