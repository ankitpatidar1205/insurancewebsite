import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BaseUrl from '../../Api/BaseUrl';

const OutStation = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('oneWay');
  const [stops, setStops] = useState([{ from: '', fromId: '', to: '', toId: '' }]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [cityData, setCityData] = useState([]);
  const [suggestions, setSuggestions] = useState({});
  const [isLoading, setIsLoading] = useState(false);

const [sourceCities, setSourceCities] = useState([]);
const [destinationCities, setDestinationCities] = useState([]);

useEffect(() => {
  const fetchCities = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/outstation`);
      if (res.data.success) {
        const srcMap = new Map();
        const destMap = new Map();

        res.data.data.forEach(item => {
          srcMap.set(item.source._id, item.source.city);
          destMap.set(item.destination._id, item.destination.city);
        });

        const srcArray = Array.from(srcMap, ([_id, city]) => ({ _id, city }));
        const destArray = Array.from(destMap, ([_id, city]) => ({ _id, city }));

        setSourceCities(srcArray);
        setDestinationCities(destArray);
      }
    } catch (err) {
      console.error(err);
    }
  };
  fetchCities();
}, []);

const handleStopChange = (index, field, value) => {
  const newStops = [...stops];
  newStops[index][field] = value;
  newStops[index][field + 'Id'] = '';
  setStops(newStops);

  let filtered = [];
  if (value.length >= 2) {
    if (field === "from") {
      filtered = sourceCities.filter(city =>
        city.city.toLowerCase().includes(value.toLowerCase())
      );
    } else if (field === "to") {
      filtered = destinationCities.filter(city =>
        city.city.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  setSuggestions(prev => ({
    ...prev,
    [index]: { ...prev[index], [field]: filtered }
  }));
};

const selectSuggestion = (index, field, city) => {
  const newStops = [...stops];
  newStops[index][field] = city.city;      // input fill karega
  newStops[index][field + "Id"] = city._id; // city ka id store karega
  setStops(newStops);

  // Dropdown band karne ke liye suggestion clear
  setSuggestions(prev => ({
    ...prev,
    [index]: { ...prev[index], [field]: [] }
  }));
};

  // Modified addStop function to pre-fill the source with previous destination
  const addStop = () => {
    const lastStop = stops[stops.length - 1];
    const newStop = { 
      from: lastStop.to, 
      fromId: lastStop.toId, 
      to: '', 
      toId: '' 
    };
    setStops([...stops, newStop]);
  };

  const removeStop = index => setStops(stops.filter((_, i) => i !== index));

  const handleSearch = async () => {
    if (!stops[0].fromId || !stops[0].toId) {
      return alert('Please select source & destination');
    }

     for (let i = 0; i < stops.length; i++) {
    if (stops[i].from && stops[i].to && stops[i].from.toLowerCase() === stops[i].to.toLowerCase()) {
      return alert(`Stop ${i + 1}: Source and Destination cannot be the same city!`);
    }
  }

    // Validate dates
    if (!startDate) {
      return alert('Please select start date');
    }
    
    if (mode === 'roundTrip' && !endDate) {
      return alert('Please select end date for round trip');
    }

    setIsLoading(true);

    try {
      let resData;

      if (mode === "multicity") {
        // For multicity, we need to send routes[] in body
        const routes = stops
          .filter(stop => stop.fromId && stop.toId)
          .map(stop => ({
            sourceCity: stop.fromId,
            destinationCity: stop.toId,
          }));

        const res = await axios.post(
          `${BaseUrl}/tariff-outstation/search`,
          {
            routes,
            startDate,
            endDate,
          }
        );
        resData = res.data.data;

      } else if (mode === "oneWay") {
        const res = await axios.post(
          `${BaseUrl}/tariff-outstation/search`,
          {
            sourceCity: stops[0].fromId,
            destinationCity: stops[0].toId,
            subTariff: "oneWay",
            startDate,
          }
        );
        resData = res.data.data;

      } else if (mode === "roundTrip") {
        const res = await axios.post(
          `${BaseUrl}/tariff-outstation/search`,
          {
            sourceCity: stops[0].fromId,
            destinationCity: stops[0].toId,
            subTariff: "roundTrip",
            startDate,
            endDate,
          }
        );
        resData = res.data.data;
      }

      // Save in localStorage & navigate
      localStorage.setItem("outstationSearch", JSON.stringify(resData));
      navigate("/website/searchcar");

    } catch (err) {
      console.error(err);
      alert("Error fetching cars. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleDestinationSelect = (index, city, cityId, cityType) => {
  const newStops = [...stops];
  newStops[index].to = city;

  // Agar cityType Destination hai, to correct ID copy karo
  if (cityType === "Destination") {
    newStops[index].toId = cityId;
  }

  // Next stop banate waqt, sourceCity ke liye **Source type ID find karo**
  const nextStopSourceId = cityData.find(
    c => c.city === city && c.city_type === "Source"
  )?._id;

  const newStop = { from: city, fromId: nextStopSourceId || '', to: '', toId: '' };
  setStops([...newStops, newStop]);
};


  return (
    <div className="container py-3" style={{zIndex:"1000"}}>
      {/* Mode Buttons */}
      <div className="mb-3 d-flex gap-2">
        {['oneWay', 'roundTrip', 'multicity'].map(m => (
          <button
            key={m}
            className={`btn ${mode === m ? 'btn-warning' : 'btn-light'}`}
            onClick={() => setMode(m)}
          >
            {m === 'oneWay' ? 'One Way' : m === 'roundTrip' ? 'Round Trip' : 'Multicity'}
          </button>
        ))}
      </div>

      {/* Input Section */}
      {mode !== 'multicity' ? (
        // OneWay & RoundTrip
        <div className="row g-2 align-items-end">
        <div className="col-md-3 col-sm-6 position-relative">
  <label className="form-label small text-muted">Source</label>
  <input
    type="text"
    className="form-control rounded-3"
    placeholder="Source City"
    value={stops[0].from}
    onChange={e => handleStopChange(0, 'from', e.target.value)}
  />
  {suggestions[0]?.from?.length > 0 && (
    <ul className="list-group position-absolute w-100" style={{ zIndex: 10, maxHeight: "200px", overflowY: "auto" }}>
      {suggestions[0].from.map((city, i) => (
        <li
          key={i}
          className="list-group-item list-group-item-action"
          style={{ cursor: 'pointer' }}
          onClick={() => selectSuggestion(0, 'from', city)}
        >
          {city.city}
        </li>
      ))}
    </ul>
  )}
</div>


       <div className="col-md-3 col-sm-6 position-relative">
  <label className="form-label small text-muted">Destination</label>
  <input
    type="text"
    className="form-control rounded-3"
    placeholder="Destination City"
    value={stops[0].to}
    onChange={e => handleStopChange(0, 'to', e.target.value)}
  />
  {suggestions[0]?.to?.length > 0 && (
    <ul className="list-group position-absolute w-100" style={{ zIndex: 10, maxHeight: "200px", overflowY: "auto" }}>
      {suggestions[0].to.map((city, i) => (
        <li
          key={i}
          className="list-group-item list-group-item-action"
          style={{ cursor: 'pointer' }}
          onClick={() => selectSuggestion(0, 'to', city)}
        >
          {city.city}
        </li>
      ))}
    </ul>
  )}
</div>


          <div className="col-md-2 col-sm-6">
            <label className="form-label small text-muted">Start Date</label>
            <input
              type="date"
              className="form-control rounded-3"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </div>

          {mode === 'roundTrip' && (
            <div className="col-md-2 col-sm-6">
              <label className="form-label small text-muted">End Date</label>
              <input
                type="date"
                className="form-control rounded-3"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          )}

          <div className="col-md-2 col-sm-6">
            <label className="form-label small text-muted">Start Time</label>
            <input
              type="time"
              className="form-control rounded-3"
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <>
          {/* Multicity Stops */}
          {stops.map((stop, index) => (
            <div className="row g-2 align-items-end mb-2" key={index}>
              <div className="col-md-5 col-sm-6 position-relative">
                <label className="form-label small text-muted">
                  {index === 0 ? 'Source' : `Stop ${index} - Source`}
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Source City"
                  value={stop.from}
                  onChange={e => handleStopChange(index, 'from', e.target.value)}
                />
                {suggestions[index]?.from?.length > 0 && (
                  <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
                    {suggestions[index].from.map((city, i) => (
                      <li
                        key={i}
                        className="list-group-item list-group-item-action"
                        style={{ cursor: 'pointer' }}
                        onClick={() => selectSuggestion(index, 'from', city)}
                      >
                        {city.city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-md-5 col-sm-6 position-relative">
                <label className="form-label small text-muted">
                  {index === 0 ? 'Destination' : `Stop ${index} - Destination`}
                </label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Destination City"
                  value={stop.to}
                  onChange={e => handleStopChange(index, 'to', e.target.value)}
                />
                {suggestions[index]?.to?.length > 0 && (
                  <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
                    {suggestions[index].to.map((city, i) => (
                      <li
                        key={i}
                        className="list-group-item list-group-item-action"
                        style={{ cursor: 'pointer' }}
                        onClick={() => selectSuggestion(index, 'to', city)}
                      >
                        {city.city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-md-2 col-sm-6 d-flex gap-1">
                {index === stops.length - 1 && (
                  <button 
                    className="btn btn-success w-50" 
                    onClick={addStop}
                    title="Add Stop"
                  >
                    <FaPlus />
                  </button>
                )}
                {stops.length > 1 && (
                  <button 
                    className="btn btn-danger w-50" 
                    onClick={() => removeStop(index)}
                    title="Remove Stop"
                  >
                    <FaMinus />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Single common Date & Time row for multicity */}
          <div className="row g-2 align-items-end mt-2">
            <div className="col-md-4 col-sm-6">
              <label className="form-label small text-muted">Start Date</label>
              <input
                type="date"
                className="form-control rounded-3"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>

            <div className="col-md-4 col-sm-6">
              <label className="form-label small text-muted">End Date</label>
              <input
                type="date"
                className="form-control rounded-3"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>

            <div className="col-md-4 col-sm-6">
              <label className="form-label small text-muted">Start Time</label>
              <input
                type="time"
                className="form-control rounded-3"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
            </div>
          </div>
        </>
      )}

      <button 
        className="btn btn-warning w-100 mt-3 py-2 d-flex align-items-center justify-content-center" 
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <FaSpinner className="me-2 fa-spin" />
            Searching...
          </>
        ) : (
          'Search Car'
        )}
      </button>
    </div>
  );
};

export default OutStation;