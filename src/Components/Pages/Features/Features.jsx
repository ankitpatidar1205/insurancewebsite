import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Features.css';

const Features = () => {
  return (
    <section className="healthcare-crisis" id="crisis">
      <Container>
        <h2 className="crisis-title">The healthcare system is on the verge of collapse.</h2>
        <p className="crisis-subtitle">
          Healthcare issues make it difficult for employees to take care of themselves, increasing costs for companies.
        </p>
        <Row className="crisis-cards">
          <Col md={4}>
            <div className="crisis-card">
              <div className="crisis-image">
                <img src="https://picsum.photos/seed/empty-doctor-office/400/300.jpg" alt="Empty doctor's office" />
              </div>
              <div className="crisis-content">
                <h3 className="crisis-card-title">Finding a doctor has become an ordeal</h3>
                <p className="crisis-stat">65% General practitioners are no longer accepting patients as primary care physicians.</p>
                <p className="crisis-source">DRESS, 2023</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="crisis-card">
              <div className="crisis-image">
                <img src="https://picsum.photos/seed/pink-piggy-bank/400/300.jpg" alt="Pink piggy bank" />
              </div>
              <div className="crisis-content">
                <h3 className="crisis-card-title">Inflation also affects health</h3>
                <p className="crisis-stat">45% French people have forgone at least one treatment in 2024 due to excessively high fees.</p>
                <p className="crisis-source">UFC Que Choisir, 2024</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="crisis-card">
              <div className="crisis-image">
                <img src="https://picsum.photos/seed/office-productivity-loss/400/300.jpg" alt="Office productivity loss" />
              </div>
              <div className="crisis-content">
                <h3 className="crisis-card-title">Inaction is costly for businesses</h3>
                <p className="crisis-stat">€27,000 per employee / year lost to absenteeism and decreased productivity</p>
                <p className="crisis-source">Alan x Pollfish study, May 2025</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;