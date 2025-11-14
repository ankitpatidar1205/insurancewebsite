import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      image: 'https://6vvt7k9n.twic.pics/prismic/aGz12UMqNJQqHqzw_Photo.png?rect=0%2C2%2C384%2C280&w=1952&h=1424&auto=format&twic=v1/cover=290x212',
      title: 'Finding a doctor has become an ordeal.',
      subtitle: 'DRESS, 2023',
      overlayHeading: '65%',
      overlayText: 'General practitioners are no longer accepting patients as primary care physicians.',
      position: 'top-left'
    },
    {
      image: 'https://6vvt7k9n.twic.pics/prismic/aGz19UMqNJQqHqzz_Photo-1-.png?rect=0%2C2%2C384%2C280&w=1952&h=1424&auto=format&twic=v1/cover=290x212',
      title: 'Inflation also affects health',
      subtitle: 'UFC Que Choisir, 2024',
      overlayHeading: '45%',
      overlayText: 'French people have forgone at least one treatment in 2024 due to excessively high fees.',
      position: 'bottom-left'
    },
    {
      image: 'https://6vvt7k9n.twic.pics/prismic/aGz2F0MqNJQqHqz8_Data.png?rect=0%2C2%2C384%2C280&w=1952&h=1424&auto=format&twic=v1/cover=290x212',
      title: 'Inaction is costly for businesses',
      subtitle: 'Alan x Pollfish study, May 2025',
      overlayHeading: '€27,000 per employee / year',
      overlayText: 'lost to absenteeism and decreased productivity.',
      position: 'top-right'
    }
  ];

  return (
    <section className="healthcare-section">
      
        <div className="section-header">
          <h2 className="sectionss-title">The healthcare system is on the verge of collapse.</h2>
          <p className="section-subtitle">
            Medical deserts, exorbitant consultation fees, insufficient prevention…
            Your employees are finding it increasingly difficult to take care of themselves,
            and this is costing your company dearly.
          </p>
        </div>

        <Row className="services-grid">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
     <div className="service-card">
  <div className="service-image-container">
    <img src={service.image} alt={service.title} className="service-image" />
  </div>

  <div className={`overlay-badge ${service.position}`}>
    <h4 className="overlay-heading">{service.overlayHeading}</h4>
    <p className="overlay-text">{service.overlayText}</p>
  </div>

  <div className="service-content">
    <h3 className="service-title">{service.title}</h3>
    <p className="service-subtitle">{service.subtitle}</p>
  </div>
</div>


            </Col>
          ))}
        </Row>
    
    </section>
  );
};

export default ServicesSection;
