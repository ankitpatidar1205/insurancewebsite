import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";

const Dashboard = () => {
  // Example static data
  const bookings = [
    { id: "B001", type: "Outstation", date: "2025-09-22", status: "Completed", totalAmount: 120 },
    { id: "B002", type: "Local", date: "2025-09-23", status: "Pending", totalAmount: 50 },
    { id: "B003", type: "Transfer", date: "2025-09-24", status: "Cancelled", totalAmount: 0 },
  ];

  const totalBookings = bookings.length;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      {/* Summary Card */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4">
            <Card.Body>
              <Card.Title className="text-muted">Total Bookings</Card.Title>
              <h2 className="text-warning">{totalBookings}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4">
            <Card.Body>
              <Card.Title className="text-muted">Completed</Card.Title>
              <h2 className="text-success">{bookings.filter(b => b.status === "Completed").length}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 rounded-4">
            <Card.Body>
              <Card.Title className="text-muted">Pending</Card.Title>
              <h2 className="text-danger">{bookings.filter(b => b.status === "Pending").length}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bookings Table */}
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Body>
          <h5 className="mb-3">Your Bookings</h5>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Booking ID</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.id}</td>
                  <td>{booking.type}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        booking.status === "Completed"
                          ? "bg-success"
                          : booking.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>${booking.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
