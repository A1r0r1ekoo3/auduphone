import React from "react";
import "./Signup.css";
import { NavLink, Link } from "react-router-dom";
// import { SignUp } from "../../components/Signup";
function Signup() {
  return (
    <div className="login">
      <div className="login-box">
        <h1 className="log-title">Login</h1>
        {/* <SignUp /> */}
        <input
          className="log-input "
          type="text"
          placeholder="UserName"
          required
        />
        <input
          className="log-input"
          type="text"
          placeholder="Posword"
          required
        />
        <NavLink to="/" className="log-btn">
          Log in
        </NavLink>
        <span className="log-span ">
          Not a member yet?{" "}
          <NavLink to="/logout" className="log-link">
            Register
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default Signup;
