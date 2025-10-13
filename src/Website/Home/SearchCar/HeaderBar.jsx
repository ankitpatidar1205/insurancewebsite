import React, { useState } from 'react';
import './HeaderBar.css';

const HeaderBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [serviceType, setServiceType] = useState('outstation');
  const [tripType, setTripType] = useState('oneway');
  const [source, setSource] = useState('Jabalpur');
  const [destination, setDestination] = useState('Indore');
  const [startDate, setStartDate] = useState('2025-09-09');
  const [endDate, setEndDate] = useState('2025-09-10');
  const [startTime, setStartTime] = useState('22:00');
  const [endTime, setEndTime] = useState('22:00');

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Top Info Bar */}
      <div className="info-bar">
        <span className="info-text">
          {serviceType.toUpperCase()} ({tripType.toUpperCase()}) | {source} → {destination} | 1 DAY(S) | {new Date(startDate).toLocaleDateString('en-GB').replace(/\//g, '-')} | {startTime}
        </span>
        <button className="btn-modify" onClick={toggleExpand}>
          <i className="bi bi-pencil-square me-1"></i> Modify Search
        </button>
      </div>

      {/* Expandable Search Form */}
      <div className={`modify-section ${isExpanded ? 'show' : ''}`}>
        <div className="container-fluid">
          {/* Service Type Buttons */}
          <div className="service-buttons">
            {[
              { key: 'outstation', label: 'OUTSTATION', icon: 'bi-box-seam' },
              { key: 'local', label: 'LOCAL', icon: 'bi-geo-alt' },
              { key: 'transfer', label: 'TRANSFER', icon: 'bi-arrow-left-right' },
            ].map((item) => (
              <button
                key={item.key}
                className={`btn-service ${serviceType === item.key ? 'active' : ''}`}
                onClick={() => setServiceType(item.key)}
              >
                <i className={`bi ${item.icon} me-1`}></i> {item.label}
              </button>
            ))}
          </div>

          {/* Trip Type Tabs (only for outstation) */}
          {serviceType === 'outstation' && (
            <div className="trip-tabs">
              {['roundtrip', 'oneway', 'multicity'].map((type) => (
                <button
                  key={type}
                  className={`tab-btn ${tripType === type ? 'active' : ''}`}
                  onClick={() => setTripType(type)}
                >
                  {type.toUpperCase().replace('MULTICITY', 'MULTI-CITY')}
                </button>
              ))}
            </div>
          )}

          {/* Local Duration Options */}
          {serviceType === 'local' && (
            <div className="duration-options">
              {['full-day', 'half-day'].map((type) => (
                <button
                  key={type}
                  className={`btn-duration ${tripType === type ? 'active' : ''}`}
                  onClick={() => setTripType(type)}
                >
                  {type.toUpperCase().replace('-', ' ')}
                </button>
              ))}
            </div>
          )}

          {/* Transfer Types */}
          {serviceType === 'transfer' && (
            <div className="transfer-options">
              {['AIRPORT', 'RAILWAY STATION', 'AREA / HOTEL'].map((label, idx) => (
                <button key={idx} className="btn-transfer">
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Form */}
          <div className="form-container">
            <div className="form-row">
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder={
                  serviceType === 'transfer' ? 'Pickup Location' : 'From'
                }
                className="form-input"
                aria-label="Source"
              />
              <span className="arrow">→</span>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={
                  serviceType === 'transfer' ? 'Drop Location' : 'To'
                }
                className="form-input"
                aria-label="Destination"
              />
            </div>

            <div className="form-row date-time-row">
              {/* Date Inputs */}
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="form-input date-input"
                aria-label="Start Date"
              />
              {tripType === 'roundtrip' && (
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="form-input date-input"
                  aria-label="End Date"
                />
              )}

              {/* Time Inputs */}
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="form-input time-input"
                aria-label="Start Time"
              />
              {tripType === 'roundtrip' && (
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="form-input time-input"
                  aria-label="End Time"
                />
              )}
            </div>

            {/* Multicity Add Button */}
            {tripType === 'multicity' && (
              <div className="form-row">
                <button className="btn-add">+ Add City</button>
              </div>
            )}

            {/* Search Button */}
            <button className="btn-search">SEARCH CAB</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;

