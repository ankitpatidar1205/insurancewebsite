import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">About</h5>
              <ul className="footer-links">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Our offers and services</h5>
              <ul className="footer-links">
                <li><Link to="/health-insurance">Health insurance</Link></li>
                <li><Link to="/prevention">Prevention</Link></li>
                <li><Link to="/teleconsultation">Teleconsultation</Link></li>
                <li><Link to="/dental-care">Dental care</Link></li>
                <li><Link to="/optical-care">Optical care</Link></li>
                <li><Link to="/hearing-care">Hearing care</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Our health guides</h5>
              <ul className="footer-links">
                <li><Link to="/health-guides">All guides</Link></li>
                <li><Link to="/wellness">Wellness</Link></li>
                <li><Link to="/prevention-tips">Prevention tips</Link></li>
                <li><Link to="/health-news">Health news</Link></li>
              </ul>
            </div>
            
            <div className="footer-section mt-4">
              <h5 className="footer-heading">Useful resources</h5>
              <ul className="footer-links">
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Download our app</h5>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:b7017ca19f9f16d229fc70ee738339bbd45f1ccc/appstore-black-fr-c546e5d819618556.png" alt="App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:b7017ca19f9f16d229fc70ee738339bbd45f1ccc/playstore-black-fr-bb386b8bc9a858b8.png" alt="Google Play" />
                </a>
              </div>
              
              <div className="country-selector mt-4">
                <h5 className="footer-heading">Country</h5>
                <div className="select-wrapper">
                  <select className="country-select">
                    <option value="fr" selected>France</option>
                    <option value="es">Spain</option>
                    <option value="de">Germany</option>
                    <option value="it">Italy</option>
                    <option value="pt">Portugal</option>
                  </select>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col md={6}>
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Alan. All rights reserved.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer-legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;