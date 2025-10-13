import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../Api/BaseUrl";
import { FaSpinner } from "react-icons/fa";

const Local = () => {
  const navigate = useNavigate();
  const [tariff, setTariff] = useState("fullDay"); // default fullDay
  const [cityData, setCityData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const [source, setSource] = useState({ city: "", id: "" });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");

  // ✅ Fetch Cities
useEffect(() => {
  const fetchCities = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/outstation`);
      if (res.data.success) {
        const citiesArray = [];

        res.data.data.forEach((item) => {
          // ✅ Source city
          if (item.source?._id && item.source?.city) {
            citiesArray.push({
              _id: item.source._id,
              city: item.source.city,
              city_type: item.source.city_type || "Source",
            });
          }
          // ✅ Destination city
          if (item.destination?._id && item.destination?.city) {
            citiesArray.push({
              _id: item.destination._id,
              city: item.destination.city,
              city_type: item.destination.city_type || "Destination",
            });
          }
        });

        setCityData(citiesArray);
      }
    } catch (err) {
      console.error(err);
    }
  };
  fetchCities();
}, []);

  // ✅ Source input handle
const handleSourceChange = (value) => {
  setSource({ city: value, id: "", city_type: "Source" });

  if (value.length >= 2) {
    // Filter Source type cities
    const filtered = cityData.filter(
      (c) =>
        c.city.toLowerCase().includes(value.toLowerCase()) &&
        c.city_type === "Source"
    );

    // ✅ Remove duplicates by city name
    const uniqueFiltered = Array.from(
      new Map(filtered.map((c) => [c.city.toLowerCase(), c])).values()
    );

    setSuggestions(uniqueFiltered);
  } else {
    setSuggestions([]);
  }
};



  const selectSuggestion = (city) => {
    setSource({ city: city.city, id: city._id });
    setSuggestions([]);
  };

  // ✅ API call
  const handleSearch = async () => {
    if (!source.id) return alert("Please select source city");
    if (!startDate || !endDate) return alert("Please select dates");

    setIsLoading(true); // Start loading

    try {
      const payload = {
        sourceCity: source.id,
        subTariff: tariff,
        startDate,
        endDate,
      };

      const res = await axios.post(`${BaseUrl}/local/search`, payload);
      const data = res.data.data || [];

      localStorage.setItem("localSearch", JSON.stringify(data));
      navigate("/website/searchcarlocal");
    } catch (err) {
      console.error(err);
      alert("Error fetching cars. Try again.");
    } finally {
      setIsLoading(false); // Stop loading regardless of success or error
    }
  };

  return (
    <div className="container py-3">
      {/* ✅ Tariff Buttons */}
      <div className="mb-3 d-flex gap-2">
        <button
          className={`btn ${tariff === "fullDay" ? "btn-warning" : "btn-light"}`}
          onClick={() => setTariff("fullDay")}
        >
          Full Day
        </button>
        <button
          className={`btn ${tariff === "halfDay" ? "btn-warning" : "btn-light"}`}
          onClick={() => setTariff("halfDay")}
        >
          Half Day
        </button>
      </div>

      {/* ✅ Source City Input */}
      <div className="row g-2">
        <div className="col-md-4 col-sm-6 position-relative">
          <label className="form-label small text-muted">Source City</label>
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Enter Source City"
            value={source.city}
            onChange={(e) => handleSourceChange(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul
              className="list-group position-absolute w-100"
              style={{ zIndex: 10 }}
            >
              {suggestions.map((c, i) => (
                <li
                  key={i}
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "pointer" }}
                  onClick={() => selectSuggestion(c)}
                >
                  {c.city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ Start Date */}
        <div className="col-md-3 col-sm-6">
          <label className="form-label small text-muted">Start Date</label>
          <input
            type="date"
            className="form-control rounded-3"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* ✅ End Date */}
        <div className="col-md-3 col-sm-6">
          <label className="form-label small text-muted">End Date</label>
          <input
            type="date"
            className="form-control rounded-3"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* ✅ Start Time */}
        <div className="col-md-2 col-sm-6">
          <label className="form-label small text-muted">Start Time</label>
          <input
            type="time"
            className="form-control rounded-3"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>

      {/* ✅ Search Button */}
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
          "Search Car"
        )}
      </button>
    </div>
  );
};

export default Local;