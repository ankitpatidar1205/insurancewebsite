import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './KeyBenefits.css';

const KeyBenefits = () => {
  const services = [
    {
      image: 'https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:29dff70d979136781d5f1b47268bc39baf4bb8b8/tpe-400aa87c8d132a40.png?twic=v1/cover=210x118',
      title: 'Startups & Very Small Businesses',
      description: 'Comprehensive health coverage designed for small teams with flexible plans that grow with your business.'
    },
    {
      image: 'https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:29dff70d979136781d5f1b47268bc39baf4bb8b8/tpe-400aa87c8d132a40.png?twic=v1/cover=210x118',
      title: 'Small and medium-sized enterprises',
      description: 'Tailored health solutions for businesses with 6-100 employees, balancing comprehensive coverage with cost-effectiveness.'
    },
    {
      image: 'https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:29dff70d979136781d5f1b47268bc39baf4bb8b8/tpe-400aa87c8d132a40.png?twic=v1/cover=210x118',
      title: 'Key Accounts',
      description: 'Enterprise-level health benefits for large teams with customizable options and dedicated support for your workforce.'
    },
    {
      image: 'https://6vvt7k9n.twic.pics/website-assets/alan-alan-website:29dff70d979136781d5f1b47268bc39baf4bb8b8/tpe-400aa87c8d132a40.png?twic=v1/cover=210x118',
      title: 'Self-employed workers',
      description: 'Flexible health plans designed for freelancers and independent professionals who need reliable coverage on their terms.'
    }
  ];

  return (
    <section className="key-benefits" id="benefits">
      <Container>
        <h2 className="section-title">Find the solution designed for you</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="service-card card-hover">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#" className="service-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#features" className="btn-primary-custom">
            Explore All Features
          </a>
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefits;