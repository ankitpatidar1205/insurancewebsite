import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  const stats = [
    { number: '5K+', label: 'Local Shops Listed' },
    { number: '50K+', label: 'Active Offers' },
    { number: '100+', label: 'Cities Covered' },
    { number: '95%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: 'bi-shop',
      title: 'Local First',
      description: 'We prioritize local businesses and help them thrive in the digital age.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Trust & Authenticity',
      description: 'All shops and offers on Offeriyo are verified to ensure genuine experiences.'
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Instant Discovery',
      description: 'We make discovering local offers as quick and easy as a single tap.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Community Growth',
      description: 'We believe in growing together - supporting local economies and communities.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="about-title">Empowering Local Businesses, Digitally</h1>
              <p className="about-subtitle">
                Building India's first "Digital Local Marketplace" — where Har Local Offer Chutki Mai!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                  Offeriyo was built with one mission — to digitally empower small and medium-sized businesses across India.
                  In today's world, local stores often lose visibility because everything has shifted online.
                </p>
                <p>
                  Offeriyo bridges that gap — helping shop owners go digital and connect directly with their nearby customers.
                  We believe every shop — big or small — deserves to be seen.
                </p>
                <p>
                  Every customer deserves to discover nearby offers quickly and confidently.
                  With Offeriyo, we're building India's first "Digital Local Marketplace" — where Har Local Offer Chutki Mai!
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Our Story" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <Container>
          <Row>
            <Col md={6}>
              <Card className="mission-card">
                <Card.Body>
                  <h3>Our Mission</h3>
                  <p>
                    To connect every shop owner with every nearby customer through real-time digital offers and trusted local discovery.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="vision-card">
                <Card.Body>
                  <h3>Our Vision</h3>
                  <p>
                    To make every local business visible, reachable, and digitally successful.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <Container>
          <h2 className="section-title">Our Impact</h2>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} key={index}>
                <div className="stat-item">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <Container>
          <h2 className="section-title">Our Core Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="value-card">
                  <div className="value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <Container>
          <h2 className="section-title">How Offeriyo Works</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="works-content">
                <h3>For Shop Owners</h3>
                <ul className="works-list">
                  <li>Create your digital shop profile in minutes</li>
                  <li>Post offers, deals, and schemes instantly</li>
                  <li>Reach thousands of nearby customers</li>
                  <li>Drive real footfall to your store</li>
                  <li>Build digital trust with verified listings</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-content">
                <h3>For Customers</h3>
                <ul className="works-list">
                  <li>Discover nearby deals from trusted local shops</li>
                  <li>Stay updated on sales and special offers</li>
                  <li>Check products in person before buying</li>
                  <li>Enjoy instant shopping without delivery delays</li>
                  <li>Support local businesses in your community</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>Ready to Transform Your Local Shopping Experience?</h2>
              <p>Join thousands of shop owners and customers who are already benefiting from Offeriyo's hyperlocal marketplace</p>
              <div className="cta-buttons">
                <a href="#shop-owners" className="btn-primary-custom me-3">
                  🏪 List Your Shop
                </a>
                <a href="#customers" className="btn-secondary-custom">
                  📱 Find Offers
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;