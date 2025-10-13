import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import BaseUrl from "../../Api/BaseUrl";

const ResetPassword = () => {
  const navigate = useNavigate();

  // Extract token from URL manually
  const token = window.location.pathname.split("/").pop();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      return Swal.fire("⚠️ Error", "All fields are required", "warning");
    }

    if (formData.password !== formData.confirmPassword) {
      return Swal.fire("⚠️ Error", "Passwords do not match", "warning");
    }

    try {
      setLoading(true);
      await axios.post(`${BaseUrl}/auth/reset-password`, {
        token,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      Swal.fire("✅ Success", "Password reset successfully!", "success").then(() => {
        navigate("/sign-in");
      });
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error",
        err.response?.data?.message || "Failed to reset password",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="auth-box shadow-lg rounded-4 bg-white p-4">
        <h2 className="text-center mb-3 text-warning">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-warning w-100" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
