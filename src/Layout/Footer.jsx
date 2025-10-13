import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Top Routes */}
          <div className="footer-column">
            <h5 className="footer-title">Top Routes</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Delhi - Chandigarh</a></li>
              <li><a href="#" className="footer-link">Delhi - Agra</a></li>
              <li><a href="#" className="footer-link">Delhi - Jaipur</a></li>
              <li><a href="#" className="footer-link">Delhi - Haridwar</a></li>
              <li><a href="#" className="footer-link">Delhi - Shimla</a></li>
              <li><a href="#" className="footer-link">Delhi - Manali</a></li>
            </ul>
          </div>

          {/* Book Cab In */}
          <div className="footer-column">
            <h5 className="footer-title">Book Cab In</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Book Cab Delhi</a></li>
              <li><a href="#" className="footer-link">Book Cab Mumbai</a></li>
              <li><a href="#" className="footer-link">Book Cab Bangalore</a></li>
              <li><a href="#" className="footer-link">Book Cab Goa</a></li>
              <li><a href="#" className="footer-link">Book Cab Pune</a></li>
              <li><a href="#" className="footer-link">Book Cab Chennai</a></li>
            </ul>
          </div>

          {/* Car On Rent In */}
          <div className="footer-column">
            <h5 className="footer-title">Car On Rent In</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Car On Rent Delhi</a></li>
              <li><a href="#" className="footer-link">Car On Rent Mumbai</a></li>
              <li><a href="#" className="footer-link">Car On Rent Amritsar</a></li>
              <li><a href="#" className="footer-link">Car On Rent Jaipur</a></li>
              <li><a href="#" className="footer-link">Car On Rent Chandigarh</a></li>
              <li><a href="#" className="footer-link">Car On Rent Dehradun</a></li>
            </ul>
          </div>

          {/* Taxi Hire In */}
          <div className="footer-column">
            <h5 className="footer-title">Taxi Hire In</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Taxi Hire Delhi</a></li>
              <li><a href="#" className="footer-link">Taxi Hire Mumbai</a></li>
              <li><a href="#" className="footer-link">Taxi Hire Bangalore</a></li>
              <li><a href="#" className="footer-link">Taxi Hire Goa</a></li>
              <li><a href="#" className="footer-link">Taxi Hire Pune</a></li>
              <li><a href="#" className="footer-link">Taxi Hire Chennai</a></li>
            </ul>
          </div>

          {/* Car Rental Services */}
          <div className="footer-column">
            <h5 className="footer-title">Car Rental Services</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Delhi Car Rental</a></li>
              <li><a href="#" className="footer-link">Mumbai Car Rental</a></li>
              <li><a href="#" className="footer-link">Bangalore Car Rental</a></li>
              <li><a href="#" className="footer-link">Goa Car Rental</a></li>
              <li><a href="#" className="footer-link">Pune Car Rental</a></li>
              <li><a href="#" className="footer-link">Chennai Car Rental</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Logo, Copyright & Payment Icons */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <div className="footer-logo">
                <h3 className="footer-logo-text">Stageway Travel</h3>
              </div>
              <p className="copyright">© 2024 Stageway Travel. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
              <div className="payment-methods">
                <span className="payment-text">We Accept:</span>
                <div className="payment-icons">
                  <span className="payment-icon visa">VISA</span>
                  <span className="payment-icon mastercard">MC</span>
                  <span className="payment-icon amex">AMEX</span>
                  <span className="payment-icon paypal">PP</span>
                  <span className="payment-icon gpay">GP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;