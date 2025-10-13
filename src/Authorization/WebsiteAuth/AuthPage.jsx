import React, { useState } from "react";
import "./AuthPage.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../../Api/BaseUrl";
import axios from "axios";

const AuthPages = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.email || !formData.password) {
      return Swal.fire("⚠️ Error", "Both fields are required", "warning");
    }

    setLoading(true);
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post(`${BaseUrl}/auth/login`, payload);

      Swal.fire("✅ Success", "Login successful!", "success").then(() => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        navigate("/");
      });
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error",
        err.response?.data?.message || "Login failed",
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
          Your Journey Begins Here
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label small">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control rounded-3"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label small">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control rounded-3"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 rounded-3 mb-3 py-2"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login to Your Account"}
          </button>
        </form>

  <p className="text-center small text-muted mt-3">
  Forgot your password?{" "}
  <Link to="/forgot-password" className="text-decoration-none text-warning">
    Reset Password
  </Link>
</p>

<p className="text-center small text-muted mt-1">
  Don’t have an account?{" "}
  <Link to="/register" className="text-decoration-none text-warning">
    Sign Up
  </Link>
</p>

      </div>
    </div>
  );
};

export default AuthPages;
