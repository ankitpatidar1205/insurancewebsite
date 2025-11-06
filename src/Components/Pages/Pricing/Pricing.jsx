import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <Container>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle text-center mb-5">
          Offeriyo is currently free for both shop owners and customers. Join our growing community today!
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="pricing-card card-hover featured">
              <div className="pricing-header">
                <h3 className="plan-name">Free Plan</h3>
                <div className="plan-price">₹ 0</div>
                <div className="plan-period">Forever</div>
              </div>
              <div className="pricing-features">
                <ul className="list-unstyled">
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Unlimited shop listings
                  </li>
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Unlimited offer postings
                  </li>
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Real-time customer notifications
                  </li>
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Shop verification badge
                  </li>
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Basic analytics dashboard
                  </li>
                  <li className="feature-item">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Customer support
                  </li>
                </ul>
              </div>
              <div className="pricing-cta">
                <a href="#download" className="btn-primary-custom w-100">
                  Get Started for Free
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="pricing-note">
            <i className="bi bi-info-circle me-2"></i>
            Premium features coming soon! Early adopters will get special benefits.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;