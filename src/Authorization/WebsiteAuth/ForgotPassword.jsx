import React, { useState } from "react";
import "./AuthPage.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import BaseUrl from "../../Api/BaseUrl";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return Swal.fire("⚠️ Error", "Please enter your email", "warning");
    }

    setLoading(true);
    try {
      const payload = { email };
      const res = await axios.post(`${BaseUrl}/auth/forgot-password`, payload);

      Swal.fire(
        "✅ Success",
        res.data.message || "Reset link sent! Check your email.",
        "success"
      );

      setEmail(""); // clear input after success
    } catch (err) {
      Swal.fire(
        "❌ Error",
        err.response?.data?.message || "Failed to send reset link",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="auth-box shadow-lg rounded-4 bg-white p-4">
        <h2 className="brand-title text-center mb-1">
          <span className="text-warning">Stageway Travel</span>
        </h2>
        <p className="text-center text-muted mb-4">
          Reset your password and continue your journey 🚖
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 rounded-3 mb-3 py-2"
            style={{ fontSize: "14px" }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p className="text-center small">
            Remembered your password?{" "}
            <Link to="/sign-in" className="text-decoration-none text-warning">
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
