import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Shop Owners Register',
      description: 'Download Offeriyo App or visit our website to create your shop profile.',
      icon: 'bi-person-plus'
    },
    {
      number: '2',
      title: 'Post Offers',
      description: 'Add deals, discounts, or festival schemes — visible to all nearby users instantly.',
      icon: 'bi-tag-fill'
    },
    {
      number: '3',
      title: 'Customers Discover',
      description: 'Customers in the area open Offeriyo and explore live offers from your shop.',
      icon: 'bi-search'
    },
    {
      number: '4',
      title: 'Buy Instantly',
      description: 'They visit your store manually, check the product, and buy directly — real, quick, reliable.',
      icon: 'bi-bag-check'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <Container>
        <h2 className="section-title">Simple Steps to Connect Shops and Shoppers</h2>
        <Row className="align-items-center">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#download" className="btn-primary-custom">
            Start Using Offeriyo Today — It's 100% Free to Join!
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;