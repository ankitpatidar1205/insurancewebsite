import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Load user name from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setUserName(`${userObj.firstName} ${userObj.lastName}`);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  return (
    <nav
      className="d-flex justify-content-between align-items-center px-3 py-2 shadow-sm fixed-top"
      style={{ backgroundColor: "#0d1b2a", color: "#fff" }}
    >
      {/* Left Side */}
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-sm text-white"
          onClick={toggleSidebar}
          style={{ background: "transparent", border: "none" }}
        >
          <FaBars size={20} />
        </button>

        <span
          style={{
            fontFamily: "'Brush Script MT', cursive",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#facc15",
          }}
        >
          Stageway Travel
        </span>

        <div className="d-none d-md-block ms-3">
          <div className="fw-bold" style={{ fontSize: "16px" }}>
            My Bookings
          </div>
          <small className="text-secondary" style={{ fontSize: "12px" }}>
            Manage your car rental bookings
          </small>
        </div>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-2 position-relative" ref={dropdownRef}>
        {/* Name first, then icon */}
        <span
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ cursor: "pointer", color: "#fff", fontWeight: 500 }}
        >
          {userName || "Guest"} 👋
        </span>
        <FaUserCircle size={28} onClick={() => setDropdownOpen(!dropdownOpen)} style={{ cursor: "pointer" }} />

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <ul
            className="dropdown-menu show mt-2 shadow-sm"
            style={{
              position: "absolute",
              right: 0,
              top: "100%",
              minWidth: "180px",
              backgroundColor: "#fff",
              zIndex: 1000,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <li>
              <Link className="dropdown-item" to="/profile" style={{ padding: "10px 15px" }}>
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={handleLogout}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: "10px 15px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
