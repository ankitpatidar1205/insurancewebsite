import React from "react";
import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import "./BookingPage.css"; // <-- custom CSS import

const BookingPage = () => {
  return (
    <Container fluid className="bg-white py-4">
      <Row className="justify-content-center">
        {/* Main Form Section */}
        <Col md={8}>
          {/* Traveller Details */}
          <Card className="mb-4 shadow-sm border-0">
            <Card.Body>
              <h6 className="mb-3 fw-bold">
                <i className="bi bi-person-fill me-2"></i>Traveller Details
              </h6>
             
              <Form>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Control type="email" placeholder="pickupAdress" />
                  </Col>
                  <Col md={3}>
                    <Form.Control type="text" placeholder="agentCode"  />
                  </Col>
                 
                  <Col md={2}>
                    <Form.Control type="text" placeholder="gstNumber"  />
                  </Col>
                  <Col md={2}>
                    <Form.Control type="text" placeholder="companyName" />
                  </Col>
                  <Col md={2}>
                    <Form.Control type="text" placeholder="companyAddress" />
                  </Col>
                </Row>
                <div className="mt-3 text-end">
                  <Button className="btn-continue">CONTINUE</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>     
      </Row>
    </Container>
  );
};

export default BookingPage;
