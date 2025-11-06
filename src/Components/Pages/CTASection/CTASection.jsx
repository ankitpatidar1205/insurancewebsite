import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section" id="cta">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h2 className="cta-title">Ready to Transform Your Local Shopping Experience?</h2>
            <p className="cta-subtitle">
              Join thousands of shop owners and customers who are already benefiting from Offeriyo's hyperlocal marketplace.
            </p>
            <div className="cta-buttons">
              <Button href="#shop-owners" className="btn-primary-custom me-3">
                🏪 List Your Shop on Offeriyo
              </Button>
              <Button href="#customers" className="btn-secondary-custom">
                📱 Find Offers Near You
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;