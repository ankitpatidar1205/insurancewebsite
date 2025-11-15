import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper mt-5">
      <div className="login-card">
        <a href="#" className="back-btn">← Back</a>

        <h2 className="login-title">Glad to see you again!</h2>
        <p className="login-sub">All fields are required.</p>

        <label className="login-label">E-mail</label>
        <input
          type="email"
          className="login-input"
          placeholder="Example: marie.curie@nobel.fr"
        />

        <label className="login-label">Password</label>
        <div className="password-box">
          <input type="password" className="login-input" />
          <span className="eye-icon">👁️</span>
        </div>

        <a className="forgot-text" href="#">
          I forgot my password
        </a>

        <button className="login-btn">Log in</button>
      </div>
    </div>
  );
};

export default Login;
