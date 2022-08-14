import React from "react";
import LoginStatus from "./status-components/login-status/LoginStatus";
import "./statusBar.css";

export default function StatusBar() {
  return (
    <div className="statusBar">
      StatusBar
      <LoginStatus />
    </div>
  );
}
