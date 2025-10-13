import React, { useState } from "react";
import "./AuthPage.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BaseUrl from "../../Api/BaseUrl";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    ageGroup: "", // added ageGroup
  });

  const ageGroups = ["10-15", "15-20", "20-25", "25-30", "30-35"];
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.password ||
      !formData.ageGroup
    ) {
      return Swal.fire("⚠️ Error", "All fields are required", "warning");
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      return Swal.fire(
        "⚠️ Error",
        "Mobile number must be exactly 10 digits",
        "warning"
      );
    }

    setLoading(true);
    try {
      const payload = { ...formData, userType: "customer" }; // always customer
      await axios.post(`${BaseUrl}/auth/register`, payload);

      Swal.fire("✅ Success", "Account created successfully!", "success").then(() => {
        navigate("/sign-in"); 
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        ageGroup: "",
      });
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error",
        err.response?.data?.message || "Failed to create account",
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
          Create your account and start your journey
        </p>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label className="form-label small">First Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                type="text"
                name="firstName"
                className="form-control rounded-3"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="form-label small">Last Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                type="text"
                name="lastName"
                className="form-control rounded-3"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label small">Email Address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
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

          {/* Mobile Number */}
          <div className="mb-3">
            <label className="form-label small">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-phone"></i></span>
              <input
                type="tel"
                name="mobileNumber"
                className="form-control rounded-3"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Age Group */}
          <div className="mb-3">
            <label className="form-label small">Age Group</label>
            <select
              name="ageGroup"
              className="form-select"
              value={formData.ageGroup}
              onChange={handleChange}
            >
              <option value="">Select Age Group</option>
              {ageGroups.map((ag) => (
                <option key={ag} value={ag}>{ag}</option>
              ))}
            </select>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label small">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-warning w-100 rounded-3 mb-3 py-2"
            style={{ fontSize: "14px" }}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Your Account"}
          </button>

          <p className="text-center small">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-decoration-none text-warning">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
