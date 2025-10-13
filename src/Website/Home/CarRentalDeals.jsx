import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CarRentalDeals = () => {
  const cars = [
    {
      name: "Premium Sedan",
      price: "₹2,500",
      img: "https://i.postimg.cc/zf8d1jxC/beb62293c6db79ce961422dbccf4ed7afe9c58a5.jpg",
    },
    {
      name: "Luxury SUV",
      price: "₹4,200",
      img: "https://i.postimg.cc/rwk6K5hm/88f91f0e99c3dba966b1dabee6f6baecb4843710.jpg",
    },
    {
      name: "Economy Hatchback",
      price: "₹1,800",
      img: "https://i.postimg.cc/3w8PZYQQ/5b72e39af43630c2a7450c3a63233daf00137690.jpg",
    },
    {
      name: "Family MPV",
      price: "₹3,500",
      img: "https://i.postimg.cc/sX8qyWQ3/1d25afb4d59c3078a0623d0a9ae4fcdb8d732e54.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f9fafc", padding: "40px 0" }}>
      <div className="p-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "600" }}>Hot Car Rental Deals</h2>
          <p className="text-muted">The best car rental deals in town</p>
        </div>

        {/* Car Cards */}
        <Row className="justify-content-center">
          {cars.map((car, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="shadow-sm border-0 rounded-3 h-100">
                <Card.Img variant="top" src={car.img} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="mb-2">{car.name}</Card.Title>
                    <h5 style={{ fontWeight: "600" }}>
                      {car.price}{" "}
                      <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                        /day
                      </span>
                    </h5>
                  </div>
                  <Button
                    variant="warning"
                    className="fw-bold mt-3"
                    style={{ color: "#000" }}
                  >
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Special Offer Banner */}
        <div
          className="text-center mt-5 p-4 rounded-3"
          style={{ backgroundColor: "#ffcc00" }}
        >
          <h5 className="fw-bold">Special Offer</h5>
          <p className="mb-3">Flat ₹100 Off on local cab bookings</p>
          <div className="d-flex justify-content-center gap-2">
            <span
              className="px-3 py-2 rounded-2 fw-bold"
              style={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
            >
              EDIT100
            </span>
            <Button variant="dark" className="fw-bold">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDeals;
