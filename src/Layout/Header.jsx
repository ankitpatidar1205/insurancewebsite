import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  return (
    <header className="header-dark">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <Link to="/website" className="logo-text">
              <img
                src="https://i.ibb.co/PvgbtjYT/Whats-App-Image-2025-09-21-at-12-24-57-PM-removebg-preview.png"
                alt="Logo"
                width="100"
                height="70"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button 
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Navigation Buttons */}
          <div className="header-nav">
            <div className="nav-buttons">
              {!isLoggedIn ? (
                <>
                  <Link to="/sign-in" className="nav-button">Sign In</Link>
                  <Link to="/register" className="nav-button">Register</Link>
                </>
              ) : (
                <Link to="/dashboard/dashboard" className="nav-button">Dashboard</Link>
              )}
              <button className="nav-button">Enquiry</button>
              <button className="nav-button">Attach Taxi</button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="header-contact">
            <div className="contact-info">
              <p className="phone-number">8888 555 220</p>
              <p className="service-hours">09:00 am to 06:00 pm</p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <div className="nav-buttons-mobile">
            {!isLoggedIn ? (
              <>
                <Link to="/sign-in" className="nav-button">Sign In</Link>
                <Link to="/register" className="nav-button">Register</Link>
              </>
            ) : (
              <Link to="/dashboard" className="nav-button">Dashboard</Link>
            )}
            <button className="nav-button-mobile">Enquiry</button>
            <button className="nav-button-mobile">Attach Taxi</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
