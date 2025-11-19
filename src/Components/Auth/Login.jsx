import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">

      {/* LEFT SIDE IMAGE */}
      <div className="login-left">
        <img
          src="https://static.alan.com/web-assets/web-fr/dfb2b4dc96c8394b8b4d7c0e65d7722ebbca1096/marmot_waving_neutral_1-273b0bb755c8144b.png"
          alt="Mascot"
          className="mascot-img"
        />
      </div>

      {/* RIGHT SIDE LOGIN CARD */}
      <div className="login-right">

        <a href="/" className="back-btn">← Back</a>

        <div className="login-card">
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

          <hr className="divider" />

          <p className="no-account">Don't have an account yet?</p>
          <h4 className="welcome-text">Welcome to Lifesecure's!</h4>

          {/* OPTION 1 */}
          <div className="option-box">
            <div className="icon green">🤝</div>
            <div>
              <p className="opt-title">My employer chose Lifesecure</p>
              <p className="opt-sub">This is health insurance for my colleagues and me.</p>
            </div>
          </div>

          {/* OPTION 2 */}
          <div className="option-box">
            <div className="icon pink">💖</div>
            <div>
              <p className="opt-title">I want to see your offers</p>
              <p className="opt-sub">For entrepreneurs, retirees, local government employees, etc.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
