import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './KeyBenefits.css';

const KeyBenefits = () => {
  const services = [
    {
      image: 'https://i.postimg.cc/hvfNFZrQ/tpe-400aa87c8d132a40.webp',
      title: 'Startups & Very Small Businesses',
      subtitle: '5 people or less',
      description: 'Simplified setup process for small teams just getting started.'
    },
    {
      image: 'https://i.postimg.cc/2S4MfZ4Z/pme-3c6d8854de163d86.webp',
      title: 'Small and medium-sized enterprises',
      subtitle: '6 - 100 people',
      description: 'Cost-effective solutions with comprehensive employee benefits.'
    },
    {
      image: 'https://i.postimg.cc/Y9SsgDTb/large-enterprise-2df75ddc7375c6ea.webp',
      title: 'Key Accounts',
      subtitle: 'Hundreds or thousands of employees',
      description: 'Integrated model with customized team solutions.'
    },
    {
      image: 'https://i.postimg.cc/Kzss5r2G/tns-54f05f7e7f9c2dd9.webp',
      title: 'Self-employed workers',
      subtitle: 'Freelancers, etc.',
      description: 'Targeted services for independent professionals.'
    }
  ];

  return (
    <section className="key-benefits" id="benefits">
     
        <div className="benefits-header">
          <h2 className="sections-title">Find the solution designed for you</h2>
          <p className="sections-subtitle">Lifesecure supports freelancers and businesses of all sizes and sectors so that they are never alone again when it comes to their health.</p>
        </div>
        <Row className="services-grid">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-description">{service.description}</p>
                  <button className="service-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5C59F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
    
    </section>
  );
};

export default KeyBenefits;