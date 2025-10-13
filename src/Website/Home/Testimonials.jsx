import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      title: "Outstanding Trip",
      text: "Driver was on time, excellent service. The car was clean and comfortable. Highly recommend for anyone looking for reliable transportation.",
      name: "Rajesh Kumar",
      role: "Business Executive",
    },
    {
      title: "Neat Little Trip",
      text: "Driver punctual & cordial, sightseeing very nice. The booking process was smooth and the pricing was transparent. Will definitely use again.",
      name: "Priya Sharma",
      role: "Travel Enthusiast",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f9fafc", padding: "60px 0" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h3 style={{ fontWeight: "600" }}>What Customers Say</h3>
          <p className="text-muted">
            Millions of happy customers sharing experiences
          </p>
        </div>

        {/* Testimonials */}
        <Row className="justify-content-center">
          {reviews.map((review, index) => (
            <Col key={index} md={5} sm={12} className="mb-4">
              <Card className="shadow-sm border-0 rounded-3 p-3 h-100">
                <Card.Body>
                  {/* Stars */}
                  <div className="d-flex align-items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#ffcc00" />
                    ))}
                    <span className="ms-2 text-muted">(5/5 Stars)</span>
                  </div>

                  {/* Review Title */}
                  <h6 style={{ fontWeight: "600" }}>{review.title}</h6>

                  {/* Review Text */}
                  <p className="text-muted">{review.text}</p>

                  {/* User Info */}
                  <div className="d-flex align-items-center mt-3">
                    <FaUserCircle size={40} className="me-2 text-muted" />
                    <div>
                      <h6 className="mb-0" style={{ fontWeight: "600" }}>
                        {review.name}
                      </h6>
                      <small className="text-muted">{review.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
