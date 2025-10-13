import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

// Helper function to get vehicle features
const getVehicleFeatures = (vehicle) => {
  if (!vehicle) return [];
  const features = [];
  if (vehicle.ac) features.push("AC");
  if (vehicle.gps) features.push("GPS");
  if (vehicle.music) features.push("Music");
  if (vehicle.carrier) features.push("Carrier");
  return features;
};

// ✅ Cab Selection Modal (Booking Modal)
const CabSelectionModal = ({ show, handleClose, cab }) => {
  const [carCount, setCarCount] = useState(1);

  if (!cab) return null;

  // Get vehicle features
  const features = getVehicleFeatures(cab.vehicle);

  // ✅ Total amount calculation (API finalAmount × count)
  const totalAmount = Math.round(Number(cab.finalAmount) * carCount);
  const advanceAmount = Math.round(totalAmount * 0.2); // 20% advance

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{cab?.vehicle?.carName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <img
            src={cab?.vehicle?.image}
            alt={cab?.vehicle?.carName}
            style={{
              width: "100%",
              maxHeight: "180px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>

        <p className="mb-1"><b>Car Type:</b> {cab?.vehicle?.carType}</p>
        <p className="mb-1"><b>Seats:</b> {cab?.vehicle?.seats}</p>
        {features.length > 0 && (
          <p className="mb-1">
            <b>Features:</b> {features.join(", ")}
          </p>
        )}
        <p className="mb-1"><b>Days:</b> {cab?.dayCount}</p>

        {/* Number of Cars */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Number Of Cars</label>
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
        <h6 className="text-center text-success fw-bold">
          Total Fare: ₹ {totalAmount}
        </h6>

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

  // Fare fields to display with their labels
  const fareFields = [
    { key: 'basicFare', label: 'Basic Fare', prefix: '₹ ' },
    { key: 'waitingCharge', label: 'Waiting Charge', prefix: '₹ ' },
    { key: 'driverCharge', label: 'Driver Charge', prefix: '₹ ' },
    { key: 'nightHalt', label: 'Night Halt', prefix: '₹ ' },
    { key: 'gst', label: 'GST', suffix: ' %' },
    { key: 'fareWithGst', label: 'Fare With GST', prefix: '₹ ' },
  ];

  return (
  <Modal show={show} onHide={handleClose} centered size="lg">
  <Modal.Header closeButton className="border rounded p-3 mb-3" style={{ backgroundColor: "#f9f9f9" }}>
    <Modal.Title className="fw-bold">
      Fare Details - {cab?.vehicle?.carName}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* Fare Summary */}
    <div className="border rounded p-3 mb-3" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="d-flex justify-content-between mb-1">
        <span>Basic Fare Per Transfer:</span>
        <span className="fw-bold">Rs. {cab.basicFare}</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>5% GST on Rs. {cab.basicFare}:</span>
        <span className="fw-bold">Rs. {cab.fareWithGst}</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>Driver Charges:</span>
        <span className="fw-bold">Rs. {cab.driverCharge}</span>
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span>Night Halt:</span>
        <span className="fw-bold">Rs. {cab.nightHalt}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between fw-bold text-dark fs-5">
        <span >Total Cost:</span>
        <span >Rs. {cab.finalAmount}</span>
      </div>
    </div>

    {/* Extra Charges */}
    <div className="border rounded p-3 mb-3" style={{ backgroundColor: "#f9f9f9" }}>
      <h6 className="text-muted mb-2">Extra Charges</h6>
      <div className="d-flex justify-content-between">
        <span>Waiting Charges:</span>
        <span className="fw-bold">Rs. {cab.waitingCharge} Per Hour</span>
      </div>
    </div>

    {/* Close Button */}
    <Button
      variant="warning"
      className="w-100 text-white fw-bold"
      onClick={handleClose}
    >
      Close
    </Button>
  </Modal.Body>
</Modal>

  );
};

// ✅ Cab Card Component
const CabCard = ({ cab, onSelectCab, onViewFareDetails }) => {
  // Get vehicle features
  const features = getVehicleFeatures(cab.vehicle);

  return (
    <Card className="shadow-sm mb-4 rounded-3 border-0">
      <Card.Body className="d-flex align-items-center justify-content-between flex-wrap">
        {/* Car Image */}
        <div className="d-flex align-items-center gap-3">
          <img
            src={cab?.vehicle?.image}
            alt={cab?.vehicle?.carName}
            style={{
              width: "180px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <div>
            <h5 className="fw-bold text-primary mb-1">
              {cab?.vehicle?.carName}
            </h5>
            <p className="mb-1 small text-muted">
              {cab?.vehicle?.carType} • {cab?.vehicle?.seats} Seats
            </p>
            {features.length > 0 && (
              <p className="mb-1 small text-muted">
                Features: {features.join(", ")}
              </p>
            )}
            <p className="mb-0 small text-success">
              Final Fare: ₹ {cab.finalAmount}
            </p>
          </div>
        </div>

        {/* Price & Buttons */}
        <div className="text-end mt-3 mt-md-0 d-flex flex-column align-items-end">
          <h5 className="fw-bold mb-2">₹ {cab.finalAmount}</h5>
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
};

// ✅ Full Page Component
const SearchCarTransfer = () => {
  const [cabData, setCabData] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [fareDetailsCab, setFareDetailsCab] = useState(null);

  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem("transferSearch"));
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

export default SearchCarTransfer;