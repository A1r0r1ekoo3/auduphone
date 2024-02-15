  import React from "react";
  import "./Logout.css";

  import { NavLink, Link } from "react-router-dom";
  // import { Login } from "../../components/Login";
  function Logout() {
    return (
      <div className="login">
        <div className="login-box">
          <h1 className="log-title">Sign up</h1>
          {/* <Login/> */}
          <input
            className="log-input "
            type="text"
            placeholder="UserName"
            required
          />
          <input
            className="log-input"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="log-input"
            type="password"
            placeholder="Password"
            required
          />
          <NavLink to="/" className="log-btn">
            Singin
          </NavLink>
          <span className="log-span ">
            Already a member{" "}
            <NavLink to="/signup" className="log-link">
              Log in
            </NavLink>
          </span>
        </div>
      </div>
    );
  }

  export default Logout;
