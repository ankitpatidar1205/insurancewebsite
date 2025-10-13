import React, { useState } from "react";
import { Link } from "react-router-dom";

const Deals = () => {
  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [startDate, setStartDate] = useState("");

  return (
    <div className="container py-4">
      {/* White background container with subtle border/shadow */}
      <div className="p-4 rounded-4 border shadow-sm bg-white">
        <div className="row g-3">
          {/* Source City */}
          <div className="col-md-4 col-sm-6">
            <label className="form-label small text-muted">Source City</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control -3"
                placeholder="Enter Source City"
                value={sourceCity}
                onChange={(e) => setSourceCity(e.target.value)}
              />
              <span className="input-group-text bg-white">
                <i className="fas fa-map-marker-alt text-warning"></i>
              </span>
            </div>
          </div>

          {/* Destination City */}
          <div className="col-md-4 col-sm-6">
            <label className="form-label small text-muted">Destination City</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="Enter Destination City"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
              />
              <span className="input-group-text bg-white">
                <i className="fas fa-map-marker-alt text-warning"></i>
              </span>
            </div>
          </div>

          {/* Start Date */}
          <div className="col-md-4 col-sm-6">
            <label className="form-label small text-muted">Start Date</label>
            <input
              type="date"
              className="form-control rounded-3"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        </div>

        {/* Search Button */}
        <Link to="/website/searchcar">
          <button className="btn btn-warning w-100 mt-4 py-2 fw-bold rounded-3">
            Search Car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Deals;
