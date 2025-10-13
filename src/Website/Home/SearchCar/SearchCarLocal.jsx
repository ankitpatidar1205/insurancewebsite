import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// ✅ Cab Selection Modal (Booking Modal)
const CabSelectionModal = ({ show, handleClose, cab }) => {
  const [carCount, setCarCount] = useState(1);

  if (!cab) return null;

  // ✅ Total amount calculation
  const totalAmount = Math.round(Number(cab.totalFare) * carCount);
  const advanceAmount = Math.round(totalAmount * 0.2); // 20% advance

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{cab?.carName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Number of Cars */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Number Of Car</label>
          <select
            className="form-select rounded-3"
            value={carCount}
            onChange={(e) => setCarCount(Number(e.target.value))}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} Cab{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Advance % */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            You Are Paying to Confirm Booking?
          </label>
          <select className="form-select rounded-3" value="20" readOnly>
            <option value="20">20 %</option>
          </select>
        </div>

        {/* Advance Amount */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Advance Amount</label>
          <input
            type="text"
            className="form-control"
            value={`₹ ${advanceAmount}`}
            readOnly
          />
        </div>

        <hr />
        <h6 className="text-center text-success fw-bold">Total Fare: ₹ {totalAmount}</h6>

        {/* Book Button */}
        <Link to="/website/booking">
          <button
            className="btn w-100 fw-bold mt-3"
            style={{ backgroundColor: "#ff8c00", color: "#fff" }}
          >
            BOOK CAB
          </button>
        </Link>
      </Modal.Body>
    </Modal>
  );
};

// ✅ Fare Details Modal
const FareDetailsModal = ({ show, handleClose, cab }) => {
  if (!cab) return null;


  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="custom-modal"
    >
      {/* Header */}
      <Modal.Header closeButton className="border-0 fw-bold fs-5 border rounded shadow-sm p-3 w-100 bg-light">
        <Modal.Title className="">
          Fare Details - {cab?.carName} ({cab.subTariff})
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Fare Summary Section */}
        <div className="border rounded shadow-sm p-4 mb-4 bg-light">

          <div className="d-flex justify-content-between mb-2">
            <span>Minimum Charges:</span>
            <span className="fw-bold">
              {cab.fixHours} hours / {cab.fixRate} Kms
            </span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Basic Fare Per Day:</span>
            <span className="fw-bold">Rs {cab.basicFare}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>5% GST on {cab.basicFare}:</span>
            <span className="fw-bold">Rs {cab.basicFareWithGST}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Total: </span>
            <span className="fw-bold">Rs {cab.basicFareWithGST} x {cab.dayCount} = {cab.total}</span>
          </div>


          <div className="d-flex justify-content-between mb-2">
            <span>Driver Charge:</span>
            <span className="fw-bold">Rs {cab.totalDriverCharge}</span>
          </div>

          {cab.totalNightHalt > 0 && <div className="d-flex justify-content-between mb-2">
            <span>Night Halt:</span>
            <span className="fw-bold">Rs {cab.totalNightHalt}</span>
          </div>}

          <hr />
          <h5 className="d-flex justify-content-between">
            <span className="fw-bold">Total Cost</span>
            <span className="fw-bold">Rs {cab.totalFare}</span>
          </h5>
        </div>

        {/* Extra Charges Section */}
        <div className="border rounded shadow-sm p-4 mb-4 bg-light">
          <p className="mb-1 fw-bold">
            Extra Charges: If you use the car/cab more than{" "}
            <span className="fw-bold">
              {cab.fixHours} hours / {cab.fixRate} Kms
            </span>
            , extra charges will apply:
          </p>
          <ul className="mb-0">
            <li>
              + Rs <span className="fw-bold">{cab.perHrsRate} / Hour</span>
            </li>
            <li>
              + Rs <span className="fw-bold">{cab.perKmRate} / Km</span>
            </li>
          </ul>
        </div>

        {/* Close Button */}
        <Button
          variant="warning"
          className="w-100 text-white fw-bold rounded-pill py-2"
          onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>

  );
};

// ✅ Cab Card Component
const CabCard = ({ cab, onSelectCab, onViewFareDetails }) => (
  <Card className="shadow-sm mb-4 rounded-3 border-0">
    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap">
      {/* Car Image */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={cab.image}
          alt={cab.carName}
          style={{
            width: "180px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
        <div>
          <h5 className="fw-bold text-primary mb-1">{cab.carName}</h5>
          <p className="mb-1 small text-muted">
            {cab.seats} Seats
          </p>
          <p className="mb-1 small text-muted">
            {cab.carType}
          </p>
          {cab.perKmRate && (
            <p className="mb-0 small text-success">₹ {cab.perKmRate} per km</p>
          )}
        </div>
      </div>

      {/* Price & Buttons */}
      <div className="text-end mt-3 mt-md-0 d-flex flex-column align-items-end">
        {cab.totalFare && <h5 className="fw-bold mb-2">₹ {cab.totalFare}</h5>}
        <Button
          variant="warning"
          className="fw-bold mb-2"
          onClick={() => onSelectCab(cab)}
        >
          SELECT CAB
        </Button>
        <Button
          variant="link"
          className="p-0 text-decoration-none"
          style={{ color: "#ff4500" }}
          onClick={() => onViewFareDetails(cab)}
        >
          Fare Details
        </Button>
      </div>
    </Card.Body>
  </Card>
);

// ✅ Full Page Component
const SearchCarLocal = () => {
  const [cabData, setCabData] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [fareDetailsCab, setFareDetailsCab] = useState(null);

  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem("localSearch"));
    if (searchData) {
      setCabData(searchData);
    }
  }, []);

  return (
    <Container className="py-4">
      {cabData.length > 0 ? (
        <Row>
          {cabData.map((cab, i) => (
            <Col xs={12} md={6} key={i}>
              <CabCard
                cab={cab}
                onSelectCab={setSelectedCab}
                onViewFareDetails={setFareDetailsCab}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div
          className="text-center py-5"
          style={{ backgroundColor: "#fff3e0", borderRadius: "10px" }}
        >
          <img
            src="/no-cab.png"
            alt="No Cabs"
            style={{ width: "150px", marginBottom: "20px" }}
          />
          <h4 style={{ color: "#ff8c00" }}>No Cabs Available</h4>
          <p style={{ color: "#555" }}>
            Try changing your search or check back later for available cars.
          </p>
        </div>
      )}

      {selectedCab && (
        <CabSelectionModal
          show={!!selectedCab}
          handleClose={() => setSelectedCab(null)}
          cab={selectedCab}
        />
      )}
      {fareDetailsCab && (
        <FareDetailsModal
          show={!!fareDetailsCab}
          handleClose={() => setFareDetailsCab(null)}
          cab={fareDetailsCab}
        />
      )}
    </Container>
  );
};

export default SearchCarLocal;