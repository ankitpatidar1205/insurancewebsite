import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BaseUrl from "../../Api/BaseUrl";

const MyProfile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser)._id : null;

  // Fetch profile data
  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BaseUrl}/auth/profile/${userId}`);
        setUser(res.data.data); // assuming API returns data inside data.data
      } catch (err) {
        console.error(err);
        Swal.fire("❌ Error", "Failed to fetch profile", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.put(`${BaseUrl}/auth/edituser/${userId}`, user);
      Swal.fire("✅ Success", "Profile updated successfully!", "success");

      // Optionally update localStorage
      localStorage.setItem("user", JSON.stringify(res.data.data));
    } catch (err) {
      console.error(err);
      Swal.fire("❌ Error", err.response?.data?.message || "Update failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3>My Profile</h3>
      <form onSubmit={handleUpdate} className="mt-3">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            className="form-control"
            value={user.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-warning" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
