import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="slide-in-left">
            <div className="hero-content">
              <h1 className="hero-title">Your Local Market, Now Online</h1>
              <h2 className="hero-tagline">Har Local Offer Chutki Mai!</h2>
              <p className="hero-subtitle">
                Welcome to Offeriyo, India's first hyperlocal marketplace that brings local shop owners 
                and nearby customers together on a single digital platform.
              </p>
              <p className="hero-description">
                Whether you own a small store or love exploring local deals, Offeriyo helps you connect, 
                discover, and save instantly — no fake products, no delivery delays, only real offers 
                from real shops near you!
              </p>
              <div className="hero-buttons">
                <Button href="#shop-owners" className="btn-primary-custom me-3">
                  🏪 List Your Shop
                </Button>
                <Button href="#customers" className="btn-secondary-custom text-white">
                  📱 Find Offers Near You
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6} className="slide-in-right">
            <div className="hero-image">
              <img src="https://www.transparentpng.com/download/special-offer/red-special-offer-png-transparent-image--14.png" alt="Offeriyo App" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;