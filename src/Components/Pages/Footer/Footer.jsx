import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          {/* Column 1: About */}
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">About</h5>
              <ul className="footer-links">
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog <span className="external-icon">↗</span></Link></li>
                <li><Link to="/press">Press and Media Kit <span className="external-icon">↗</span></Link></li>
                <li><Link to="/jobs">Jobs <span className="external-icon">↗</span></Link></li>
                <li><Link to="/hiring-privacy">Hiring Privacy <span className="external-icon">↗</span></Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-sale">General terms and conditions of sale</Link></li>
                <li><Link to="/terms-sale-eyeglasses">General terms and conditions of sale (eyeglasses)</Link></li>
                <li><Link to="/optical-network">Optical network</Link></li>
                <li><Link to="/accessibility">Accessibility: partially compliant</Link></li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="social-icons mt-4">
              <a href="#" aria-label="Twitter/X"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          {/* Column 2: Our offers and services */}
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Our offers and services</h5>
              <ul className="footer-links">
                <li><Link to="/self-employed">Self-employed workers</Link></li>
                <li><Link to="/retirees">Retirees</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/chartered-accountants">Health insurance for chartered accountants</Link></li>
                <li><Link to="/referral-program">Referral program (conditions)</Link></li>
              </ul>
            </div>
          </Col>

          {/* Column 3: Our health guides */}
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Our health guides</h5>
              <ul className="footer-links">
                <li><Link to="/company-health-insurance">Company health insurance</Link></li>
                <li><Link to="/company-benefits">Company benefits</Link></li>
                <li><Link to="/guide-self-employed">Complete guide to self-employed health insurance</Link></li>
                <li><Link to="/guide-retirees">A complete guide to health insurance for retirees</Link></li>
                <li><Link to="/guide-company-health">Complete guide to company health insurance</Link></li>
                <li><Link to="/guide-company-benefits">A complete guide to company benefits</Link></li>
                <li><Link to="/health-insurance-guide">Health insurance guide</Link></li>
                <li><Link to="/reimbursements-guide">Guide to health reimbursements</Link></li>
                <li><Link to="/articles-health-insurance">All our articles on health insurance</Link></li>
                <li><Link to="/well-being-guide">Guide to well-being in the workplace</Link></li>
              </ul>
            </div>
          </Col>

          {/* Column 4: Useful resources + App + Country */}
          <Col lg={3} md={6} className="footer-column">
            <div className="footer-section">
              <h5 className="footer-heading">Useful resources</h5>
              <ul className="footer-links">
                <li><Link to="/hr-testimonials">HR Testimonials</Link></li>
                <li><Link to="/member-stories">Member stories</Link></li>
                <li><Link to="/hr-management-guide">The HR and Management Guide</Link></li>
                <li><Link to="/workplace-wellbeing">Workplace well-being</Link></li>
                <li><Link to="/all-resources">See all our resources</Link></li>
              </ul>
            </div>

            <div className="footer-section mt-4">
              <h5 className="footer-heading">Country</h5>
              <div className="select-wrapper">
                <select className="country-select">
                  <option value="fr" selected>FR France</option>
                  <option value="es">ES Spain</option>
                  <option value="de">DE Germany</option>
                  <option value="it">IT Italy</option>
                  <option value="pt">PT Portugal</option>
                </select>
              </div>
            </div>

            <div className="footer-section mt-4">
              <h5 className="footer-heading">Download our app</h5>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:b7017ca19f9f16d229fc70ee738339bbd45f1ccc/appstore-black-fr-c546e5d819618556.png" alt="App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:b7017ca19f9f16d229fc70ee738339bbd45f1ccc/playstore-black-fr-bb386b8bc9a858b8.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Company Section */}
        <Row className="mt-5">
          <Col md={6}>
            <div className="footer-section">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-links">
                <li><Link to="/about-company">About the company <span className="external-icon">↗</span></Link></li>
                <li><Link to="/blog">Blog <span className="external-icon">↗</span></Link></li>
                <li><Link to="/press">Press and Media Kit <span className="external-icon">↗</span></Link></li>
                <li><Link to="/jobs">Jobs <span className="external-icon">↗</span></Link></li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Legal Footer */}
        <Row className="footer-bottom mt-5 pt-4">
          <Col md={12}>
            <div className="legal-text">
              <p>
                Alan Insurance is a public limited company with fully paid-up share capital of €203,000,000 (Siren: 908 311 103 RCS Paris) governed by the French Insurance Code. Its registered office is located at 117 Quai de Valmy - 75010 Paris, France. Alan Insurance is subject to the supervision of the French Prudential Control and Resolution Authority (ACPR), 4, place de Budapest, CS 92459, 75436 Paris Cedex 09, France. Alan makes available to the public the <Link to="/solvency-report">Solvency and Financial Condition Report of the Alan Group</Link> and that of the Alan Insurance company (2024 financial year).
              </p>
              <p className="small-text mt-3">
                Publishing Director: Charles Gorintin • <strong>Publisher</strong>: This site is produced by Alan SA. For any questions regarding the use of the alan.com website, you can contact us directly online. • <strong>Hosting</strong>: The alan.com website is hosted by Amazon Web Services (AWS) Europe. In accordance with French law no. 78-17, you have the right to access, rectify, and object to the processing of your personal data. This right can be exercised by sending an email to <a href="mailto:privacy@alan.com">privacy@alan.com</a>. <strong>Important</strong>: This email address is solely for exercising your rights regarding personal data. No other requests will be processed. Do not send any health-related documents.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;