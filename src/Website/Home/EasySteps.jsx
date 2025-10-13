import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FaSearch, FaCar, FaCreditCard } from "react-icons/fa";

const EasySteps = () => {
  const steps = [
    {
      icon: <FaSearch size={28} />,
      step: "1",
      title: "Search",
      desc: "Local, Outstation, Transfer, or Oneway Drop",
    },
    {
      icon: <FaCar size={28} />,
      step: "2",
      title: "Select Car",
      desc: "Choose from a wide range of vehicles",
    },
    {
      icon: <FaCreditCard size={28} />,
      step: "3",
      title: "Pay & Book",
      desc: "Secure booking with flexible payment options",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff", padding: "50px 0" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h3 style={{ fontWeight: "600" }}>Book a taxi in 3 easy steps</h3>
        </div>

        {/* Steps */}
        <Row className="text-center">
          {steps.map((item, index) => (
            <Col key={index} md={4} sm={12} className="mb-4">
              {/* Circle Icon */}
              <div
                style={{
                  backgroundColor: "#ffcc00",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                {item.icon}
              </div>

              {/* Step Number */}
              <div
                style={{
                  backgroundColor: "#ffcc00",
                  display: "inline-block",
                  padding: "3px 12px",
                  borderRadius: "50px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {item.step}
              </div>

              {/* Title */}
              <h6 style={{ fontWeight: "600" }}>{item.title}</h6>

              {/* Description */}
              <p className="text-muted mb-0">{item.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EasySteps;
