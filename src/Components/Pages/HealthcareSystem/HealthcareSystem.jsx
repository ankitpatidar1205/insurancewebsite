import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HealthcareSystem.css';

const HealthcareSystem = () => {
  return (
    <section className="healthcare-section" id="wellbeing">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="left-content">
            <h2 className="main-title">When your health is good, everything is good.</h2>
            
            <div className="stat-highlight">
              <span className="stat-number">86%</span>
              <span className="stat-text">of employees want their company to care about their well-being</span>
            </div>
            
            <p className="stat-source">Alan x Harris Barometer, 2023</p>
            
            <div className="benefits-container">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="benefit-number">3x</span>
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Retention</h3>
                  <p className="benefit-desc">more likely to stay</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="benefit-number">2x</span>
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Productivity</h3>
                  <p className="benefit-desc">more likely to outperform</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="benefit-number">10x</span>
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Absenteeism</h3>
                  <p className="benefit-desc">less likely to be absent</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={6} className="right-content">
            <div className="illustration-container">
              <img 
                src="https://6vvt7k9n.twic.pics/prismic/ZhesCDjCgu4jzvuE_Media.png?twic=v1/cover=390x277" 
                alt="Cartoon character at desk" 
                className="character-image"
              />
            </div>
            
            <div className="quote-container">
              <div className="quote-bubble">
                <p className="quote-text">"Well-being generates a return on investment"</p>
              </div>
              <div className="quote-person">
                <img 
                  src="https://6vvt7k9n.twic.pics/prismic/ZiDilfPdc1huKmN7_video01.png" 
                  alt="Person" 
                  className="person-image"
                />
                <div className="person-info">
                  <p className="person-name">Source</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HealthcareSystem;