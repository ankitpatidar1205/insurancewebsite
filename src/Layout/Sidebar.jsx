import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaThLarge,
  FaCar,
  FaHistory,
  FaGift,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { label: "Dashboard", path: "/dashboard/dashboard", icon: <FaThLarge /> },
    { label: "My Bookings", path: "/dashboard/bookings", icon: <FaCar /> },
    { label: "Profile", path: "/dashboard/my-profile", icon: <FaUser /> },
    { label: "Logout", path: "/", icon: <FaSignOutAlt />, logout: true },
        { label: "Home", path: "/", icon: <FaGift /> },
 // logout flag
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (menu) => {
    if (menu.logout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/"); // redirect to home/login
    } else {
      navigate(menu.path);
    }
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`menu-item ${isActive(menu.path) ? "active" : ""}`}
              onClick={() => handleNavigate(menu)}
            >
              <div className="menu-link">
                {/* Icon first */}
                <span className="menu-icon">{menu.icon}</span>
                {!collapsed && <span className="menu-text">{menu.label}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
