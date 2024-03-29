import React, { useState } from "react";
import AuthService from "../services/auth.service";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    AuthService.login(username, password).then(
      () => {
        props.setuser(AuthService.getCurrentUser());
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };
  return props.user ? (
    <div>
      <button
        onClick={async () => {
          localStorage.removeItem("user");
          props.setuser(null);
          setLoading(false);
        }}
        style={{ color: "red", width: "30%" }}
      >
        Logout
      </button>
      <br />
      <br />
    </div>
  ) : (
    <div className="col-md-12">
      <div className="card card-container">
        {/*  <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              style={{ textAlign: "center" }}
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              style={{ textAlign: "center" }}
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <utton style={{ display: "none" }} />
        </form>
      </div>
    </div>
  );
};
export default Login;
