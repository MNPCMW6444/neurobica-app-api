import React from "react";
import "./loginStatus.css";
import useUser from "../../../../../../hooks/useUser";
import Button from "@mui/material/Button";
import loginButtonSx from "./loginButtonSs";

export default function LoginStatus() {
  const [user] = useUser("loggedIn", {}, []);

  return (
    <div className="loginStatus">
      {user._id ? (
        "Welcome back " + user.fullname + "!"
      ) : (
        <>
          {/* <Button sx={loginButtonSx} onClick={()=>{}}>Login</Button> */}
          <a href="/my-account">Login</a>
        </>
      )}
    </div>
  );
}
