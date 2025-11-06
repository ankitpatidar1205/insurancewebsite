import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <div className="footer-logo">Offeriyo</div>
              <div className="footer-tagline">Har Local Offer Chutki Mai!</div>
              <p className="footer-description">
                Bringing Every Local Offer to Every Local Hand. Discover. Visit. Save. Instantly.
              </p>
              <div className="app-download">
                <h5>Download Our App</h5>
                <div className="download-buttons">
                  <a href="#" className="download-btn">
                    <i className="bi bi-google-play"></i>
                    <div className="btn-text">
                      <small>Get it on</small>
                      <span>Google Play</span>
                    </div>
                  </a>
                  <a href="#" className="download-btn">
                    <i className="bi bi-apple"></i>
                    <div className="btn-text">
                      <small>Download on the</small>
                      <span>App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-links">
              <h5>Legal</h5>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className="social-icons mt-4">
              <h5>Connect With Us</h5>
              <div className="social-links">
                <a href="https://www.facebook.com/offeriyo" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/offeriyo" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/offeriyo" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/offeriyo" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <div className="contact-info">
              <h5>Contact Information</h5>
              <div className="contact-item">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:OfficialOfferiyo@gmail.com">OfficialOfferiyo@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="bi bi-globe me-2"></i>
                <a href="https://www.offeriyo.com" target="_blank" rel="noopener noreferrer">www.offeriyo.com</a>
              </div>
              <div className="contact-item">
                <i className="bi bi-geo-alt me-2"></i>
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="newsletter">
              <h5>Stay Updated</h5>
              <p>Subscribe to our newsletter for the latest offers and updates</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" className="form-control" />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Offeriyo. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;