import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HealthcareSystem.css";

const HealthcareSystem = () => {
  return (
    <section className="healthcare-wellbeing" id="wellbeing">
     
        <Row className="align-items-center">
          {/* ===== Left Content ===== */}
          <Col lg={6} md={12} className="text-section">
            <h2 className="headline">
              When your health is good, everything is good.
            </h2>
            <p className="subtext">
              86% of employees expect their company to act for their well-being
              (Alan x Harris Barometer, 2023)
            </p>

            <p className="highlight-text">
              Invest in the physical and mental well-being of your employees, and
              they will repay you a hundredfold.
            </p>

            <div className="benefits-grid">
              <div className="benefit-box">
                <div className="benefit-header">
                  <span>Retention</span> <i className="bi bi-heart-fill"></i>
                </div>
                <h3>3x</h3>
                <p>greater chances of retaining their employees</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <span>Productivity</span> <i className="bi bi-cloud-fill"></i>
                </div>
                <h3>2x</h3>
                <p>more chances of exceeding their growth targets</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <span>Absenteeism</span> <i className="bi bi-briefcase-fill"></i>
                </div>
                <h3>10x</h3>
                <p>
                  greater chances of maintaining an absenteeism rate lower than
                  their sector
                </p>
              </div>

             <div className="testimonial-box">
  <div className="testimonial-overlay">
    <p>
      “It needs to be repeated again and again”
    </p>

  </div>
</div>

            </div>

            <p className="source">Source: Josh Bersin Company</p>
          </Col>

          {/* ===== Right Content ===== */}
          <Col lg={6} md={12} className="illustration-side text-center">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/ZhesCDjCgu4jzvuE_Media.png?twic=v1/cover=390x277"
              alt="Character at desk"
              className="illustration-img"
            />
          </Col>
        </Row>
    
    </section>
  );
};

export default HealthcareSystem;
