import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './DownloadApp.css';

const DownloadApp = () => {
  return (
    <section className="download-app" id="download">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="download-content">
              <h2 className="download-title">Get the Offeriyo App — Har Local Offer Chutki Mai!</h2>
              <p className="download-subtitle">
                Stay connected to your local market like never before.
                Get real-time updates about every shop's offer, discount, and scheme — all around you.
              </p>
              <div className="download-buttons">
                <Button href="#" className="btn-download me-3 mb-3">
                  <i className="bi bi-google-play me-2"></i>
                  Google Play Store
                </Button>
                <Button href="#" className="btn-download mb-3">
                  <i className="bi bi-apple me-2"></i>
                  Apple App Store
                </Button>
              </div>
              <div className="waitlist-cta">
                <p className="waitlist-text">Coming Soon! Join our waitlist to be notified:</p>
                <div className="waitlist-form">
                  <input type="email" placeholder="Enter your email" className="form-control" />
                  <Button className="btn-waitlist">Notify Me</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="download-image">
              <img src="https://img.freepik.com/free-vector/people-using-smartphones-online-shop_23-2148657200.jpg" alt="Offeriyo App" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadApp;