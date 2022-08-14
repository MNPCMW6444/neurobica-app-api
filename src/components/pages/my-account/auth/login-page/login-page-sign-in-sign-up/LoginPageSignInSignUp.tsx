import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import "./loginPageSignInSignUp.css";
import LoginPageSignInSignUpStyle from "./LoginPageSignInSignUpStyle";

export default function LoginPageSignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="loginPageSignInSignUp">
      <ToggleButtonGroup
        value={isSignIn}
        /* onChange={(event, newAlignment) => {
          setIsSignIn(newAlignment);
        }}
        exclusive */
      >
        <ToggleButton
          onClick={() => {
            setIsSignIn(true);
          }}
          sx={
            isSignIn
              ? LoginPageSignInSignUpStyle.selected
              : LoginPageSignInSignUpStyle.unselected
          }
          value="signin"
        >
          Sign In
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setIsSignIn(false);
          }}
          sx={
            isSignIn
              ? LoginPageSignInSignUpStyle.unselected
              : LoginPageSignInSignUpStyle.selected
          }
          value="signup"
        >
          Sign Up
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
