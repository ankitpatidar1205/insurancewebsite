import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaUserTie, FaSmile, FaShieldAlt } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { icon: <FaBuilding size={28} />, value: "150+", label: "Indian Cities" },
    { icon: <FaUserTie size={28} />, value: "11,000+", label: "Vendors" },
    { icon: <FaSmile size={28} />, value: "62,500+", label: "Happy Customers" },
    { icon: <FaShieldAlt size={28} />, value: "100%", label: "Safe & Sanitized" },
  ];

  return (
    <div style={{ background: "#1f2225", padding: "40px 0" }}>
      <div>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <div
                style={{
                  backgroundColor: "#ffcc00",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                {stat.icon}
              </div>
              <h4 style={{ color: "#ffcc00", fontWeight: "bold" }}>{stat.value}</h4>
              <p style={{ color: "#fff", margin: 0 }}>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default StatsSection;
