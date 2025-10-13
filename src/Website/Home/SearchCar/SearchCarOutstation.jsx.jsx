import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Modal, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCar, FaSync, FaRoute, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// ✅ Cab Selection Modal Component
const CabSelectionModal = ({ show, handleClose, cab }) => {
  const [carCount, setCarCount] = useState(1);

  if (!cab) return null;

  // Total amount calculation
  const totalAmount = Math.round(cab.total * carCount);
  // Advance = 20% of total
  const advanceAmount = Math.round(totalAmount * 0.2);

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
          <label className="form-label fw-semibold">Amount</label>
          <input
            type="text"
            className="form-control"
            value={`₹ ${advanceAmount}`}
            readOnly
          />
        </div>

        {/* Book Button */}
        <Link to="/website/booking">
          <button
            className="btn w-100 fw-bold"
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
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="bg-light">
        <Modal.Title>
          <span className="fw-bold">Fare Details</span> -{" "}
          {cab?.carName} <small className="text-muted">
            ({cab.subTariff?.toUpperCase()})
          </small>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">

        {/* Route Details Section */}
        {cab.routeDetails && cab.routeDetails.length > 0 && (
          <div className="mb-4">
            <h6 className="fw-bold text-secondary mb-3">
              <FaMapMarkerAlt className="me-2 text-success" />
              Route Details
            </h6>
            <div className="list-group">
              {cab.routeDetails.map((route, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action border rounded mb-2"
                >
                  <div className="d-flex align-items-center mb-1">
                    <FaMapMarkerAlt className="me-2 text-success" />
                    <span className="fw-bold">{route.sourceCity}</span>
                    <span className="mx-2">→</span>
                    <FaMapMarkerAlt className="me-2 text-danger" />
                    <span className="fw-bold">{route.destinationCity}</span>
                  </div>
                  <div className="text-muted small">
                    Distance: {route.distance} Km | Duration: {route.duration} Min
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fare Breakdown Section */}
        <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "#f9fafc" }}>

          {cab.totalDistance && (
            <div className="d-flex justify-content-between mb-2">
              <span>Approx Roundtrip Distance:</span>
              <span className="fw-bold">{cab.totalDistance} Km</span>
            </div>
          )}
          {cab.avgRatePerDay && (
            <div className="d-flex justify-content-between mb-2">
              <span>Minimum Charged Distance:</span>
              <span className="fw-bold">{cab.avgRatePerDay} Km/Day</span>
            </div>
          )}
          {cab.approxRoundTripDistance && (
            <div className="d-flex justify-content-between mb-2">
              <span>Estimated Km Charge:</span>
              <span className="fw-bold">{cab.approxRoundTripDistance} ₹</span>
            </div>
          )}
          {cab.subTariff === "oneWay" && cab.perKmRate && (
            <div className="d-flex justify-content-between mb-2">
              <span>Per Km Rate:</span>
              <span className="fw-bold">₹ {cab.perKmRate}</span>
            </div>
          )}

          {cab.approxDistanceOneway && (
            <div className="d-flex justify-content-between mb-2">
              <span>Approx Distance Oneway:</span>
              <span>₹ {cab.approxDistanceOneway}</span>
            </div>
          )}
          {cab.approxDistanceLeftover && (
            <div className="d-flex justify-content-between mb-2">
              <span>Approx Distance Leftover:</span>
              <span>₹ {cab.approxDistanceLeftover}</span>
            </div>
          )}
          {cab.driverCharge && (
            <div className="d-flex justify-content-between mb-2">
              <span>Driver Allowance:</span>
              <span>₹ {cab.driverCharge}</span>
            </div>
          )}
          {cab.nightHalt > 0 && (
            <div className="d-flex justify-content-between mb-2">
              <span>Night Halt:</span>
              <span>₹ {cab.nightHalt}</span>
            </div>
          )}
          {cab.gst && (
            <div className="d-flex justify-content-between mb-2">
              <span>5% GST on Rs. {cab.total}:</span>
              <span>₹ {cab.gst}</span>
            </div>
          )}

          {cab.estimatedKmCharged && (
            <div className="d-flex justify-content-between mb-2">
              <span>Estimated Km Charged:</span>
              <span>{cab.estimatedKmCharged} ₹</span>
            </div>
          )}


          <hr />

          {/* {cab.total !== undefined && cab.totalwithgst && ( */}
          <div className="d-flex justify-content-between fw-bold text-dark fs-5">
            <span>Total Cost</span>
            <span>₹ {Math.round(cab?.totalwithgst ? cab?.totalwithgst : cab?.total)}</span>
          </div>
          {/* )} */}
        </div>


        <div className="p-3 rounded" style={{ backgroundColor: "#f9fafc" }}>
          <p className="fw-bold mb-2">
            <em>Extra Charges :</em> If you use car/cab more than{" "}
            <span className="fw-bold">{cab.approxDistanceOneway} Kms</span> for oneway,
            extra charges as follows:
          </p>

          <div className="ms-3">
            <p className="mb-1">
              After {cab.approxDistanceOneway ? cab.approxDistanceOneway : cab.after} Kms :
            </p>

            <ul className="mb-2" style={{ listStyleType: "disc" }}>
              {cab.subTariff === "oneWay" ? (
                <>
                  <li>
                    + Rs <span className="fw-bold">{cab.perKmRate}</span> Per Km.{" "}
                    <small>(One Side)</small>
                  </li>
                  <li>
                    + Rs <span className="fw-bold">{cab.perKmRate}</span> Per Km.{" "}
                    <small>(Leftover Side)</small>
                  </li>
                  <hr className="my-2" />

                  <p className="fw-bold mb-0">
                    + Rs {cab.perKmRate * 2} Per Km. <small>(Both Side)</small>
                  </p>
                </>
              ) : (
                <li>
                  + Rs <span className="fw-bold">{cab.perKmRate}</span> Per Km. Charges
                </li>
              )}
            </ul>


          </div>

        </div>

        <Button
          variant="warning mt-3"
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
            {cab.seats} Seats{" "}
          </p>
          {cab.carType && (
            <p className="mb-0 small text-success"> {cab.carType}</p>
          )}
          {cab.perKmRate && (
            <p className="mb-0 small text-success">₹ {cab.perKmRate} / Per KM</p>
          )}
        </div>
      </div>

      {/* Price & Buttons */}
      <div className="text-end mt-3 mt-md-0 d-flex flex-column align-items-end">
        {cab.totalwithgst && (
          <h5 className="fw-bold mb-2">₹ {cab.totalwithgst}</h5>
        )}
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
const SearchCarOutstation = () => {
  const [cabData, setCabData] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [fareDetailsCab, setFareDetailsCab] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  // Function to fetch data from localStorage
  const fetchCabData = () => {
    let searchData = null;

    const storedData = localStorage.getItem("outstationSearch");
    if (storedData != "undefined") {
      searchData = JSON.parse(storedData);
    } if (searchData) {
      console.log(searchData, "jhuihuigug");
      // Just set the data as it is from localStorage
      setCabData(searchData);
    } else {
      setCabData([]);
    }
    setLastUpdated(Date.now());
  };

  // Fetch data on component mount and when lastUpdated changes
  useEffect(() => {
    fetchCabData();
  }, []);

  // Set up an interval to check for updates every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchCabData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Available Cabs</h2>
        <div className="d-flex align-items-center">
          <span className="text-muted me-2">
            {cabData.length} {cabData.length === 1 ? 'cab' : 'cabs'} available
          </span>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={fetchCabData}
            title="Refresh results"
          >
            <FaSync />
          </Button>
        </div>
      </div>

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
          <FaCar className="text-warning mb-3" style={{ fontSize: "3rem" }} />
          <h4 style={{ color: "#ff8c00" }}>No Cabs Available</h4>
          <p style={{ color: "#555" }}>
            Try changing your search or check back later for available cars.
          </p>
          <Button variant="warning" onClick={fetchCabData}>
            Refresh Results
          </Button>
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

export default SearchCarOutstation;