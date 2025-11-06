import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './KeyBenefits.css';

const KeyBenefits = () => {
  const benefits = [
    {
      icon: 'bi-globe',
      title: 'Go Digital Instantly',
      description: 'Shop owners can easily create their digital presence in just a few minutes — without any technical skills.'
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Real-Time Offers',
      description: 'Customers can see exciting offers, discounts, festival deals, and limited-time schemes from nearby shops instantly.'
    },
    {
      icon: 'bi-shield-check',
      title: '100% Local, 100% Genuine',
      description: 'All offers and shops are verified — ensuring that customers get the best deals from trusted stores around them.'
    },
    {
      icon: 'bi-bag-fill',
      title: 'Smart Local Shopping',
      description: 'Skip online delivery delays and fake products — visit your local shop, check the product, and buy instantly at the lowest price.'
    }
  ];

  return (
    <section className="key-benefits" id="benefits">
      <Container>
        <h2 className="section-title">Core Highlights</h2>
        <Row>
          {benefits.map((benefit, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="benefit-card card-hover">
                <div className="benefit-icon">
                  <i className={`bi ${benefit.icon}`}></i>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#features" className="btn-primary-custom">
            🎉 Explore Live Deals
          </a>
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefits;