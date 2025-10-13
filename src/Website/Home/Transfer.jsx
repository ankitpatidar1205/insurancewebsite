import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../../Api/BaseUrl";

const Transfer = () => {
  const navigate = useNavigate();

  // ✅ States
  const [transferType, setTransferType] = useState("airport");
  const [cityData, setCityData] = useState([]);
  const [pickupOptions, setPickupOptions] = useState([]);
  const [dropOptions, setDropOptions] = useState([]);
  const [sourceCity, setSourceCity] = useState(""); // will store cityId
  const [sourceCityName, setSourceCityName] = useState(""); // for search input
  const [filteredCities, setFilteredCities] = useState([]);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");

  // ✅ Loading state
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch Cities once
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/location`);
        if (res.data.success) {
          const citiesMap = new Map();

          res.data.data.forEach((item) => {
            // Source
            citiesMap.set(item.city._id, {
              city: item.city.city,
              city_type: item.city.city_type,
            });

            // Destination
            // citiesMap.set(item.destination._id, {
            //   city: item.destination.city,
            //   city_type: item.destination.city_type,
            // });
          });

          // Convert map to array
          const citiesArray = Array.from(citiesMap, ([_id, value]) => ({
            _id,
            city: value.city,
            city_type: value.city_type,
          }));

          console.log("citiesArray", citiesArray);
          setCityData(citiesArray);
        }
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
    };

    fetchCities();
  }, []);

// ✅ Fetch Drop Options when transferType or city changes
useEffect(() => {
  const fetchDropOptions = async () => {
    if (!sourceCity) return;

    try {
      let url = "";
      if (transferType === "airport" || transferType === "railway") {
        url = `${BaseUrl}/transfer/getareahotelbycity/${sourceCity}`;
      } else if (transferType === "hotel") {
        url = `${BaseUrl}/transfer/getrailwaystationandairportbycity/${sourceCity}`;
      }

      if (url) {
        const res = await axios.get(url);
        if (res.data.success) {
          setDropOptions(res.data.data || []);
        }
      }
    } catch (err) {
      console.error("Error fetching drop options:", err);
    }
  };

  fetchDropOptions();
}, [transferType, sourceCity]);

  // ✅ Search filter for city
  const handleCitySearch = (val) => {
    setSourceCityName(val);
    console.log("cityDatacityData", cityData);
    if (val.length > 0) {
      const filtered = cityData.filter((c) =>
        c.city.toLowerCase().includes(val.toLowerCase()) && c.city_type === "Source"
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  // ✅ Fetch Pickup Options when transferType or city changes
  useEffect(() => {
    const fetchPickupOptions = async () => {
      if (!sourceCity) return;
      try {
        let url = "";
        if (transferType === "airport") {
          url = `${BaseUrl}/transfer/getairportbycity/${sourceCity}`;
        } else if (transferType === "railway") {
          url = `${BaseUrl}/transfer/getrailwaystationbycity/${sourceCity}`;
        } else if (transferType === "hotel") {
          console.log("transferType",transferType);
          url = `${BaseUrl}/location?cityId=${sourceCity}&transferType=${transferType}`;
        }

        if (url) {
          const res = await axios.get(url);
          if (res.data.success) {
            setPickupOptions(res.data.data || []);
          }
        }
      } catch (err) {
        console.error("Error fetching pickup options:", err);
      }
    };

    fetchPickupOptions();
  }, [transferType, sourceCity]);


  // ✅ Search Handler (POST request)
  const handleSearch = async () => {
    if (!sourceCity || !pickup || !drop || !startDate || !endDate) {
      return alert("Please fill all fields");
    }

  const selectedPickup = pickupOptions.find(p => p._id === pickup);
  const selectedDrop = dropOptions.find(d => d._id === drop);

    console.log("selectedPickup",selectedPickup);
    console.log("selectedDrop",selectedDrop);

  if (selectedPickup && selectedDrop) {
    const pickupName = selectedPickup.locationName 
    const dropName = selectedDrop.locationName;

    console.log("pickupName",pickupName);
    console.log("dropName",dropName);
    if (pickupName.toLowerCase() === dropName.toLowerCase()) {
      return alert("Pickup and Drop location cannot be the same!");
    }
  }

    setIsLoading(true);

    try {
      const payload = {
        city: sourceCity,
        pickupLocation: pickup,
        dropLocation: drop,
        startDate,
        endDate,
      };

      const res = await axios.post(
        `${BaseUrl}/transfer/search`,
        payload
      );

      const data = res.data.data || [];
      localStorage.setItem("transferSearch", JSON.stringify(data));

      // ✅ Set loading to false before navigation
      setIsLoading(false);
      navigate("/website/searchcartransfer");
    } catch (err) {
      console.error(err);
      alert("Error fetching cars. Try again.");
      // ✅ Set loading to false on error
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-3">
      {/* ✅ Transfer Type Buttons */}
      <div className="mb-3 d-flex gap-2">
        <button
          className={`btn ${transferType === "airport" ? "btn-warning" : "btn-light"}`}
          onClick={() => setTransferType("airport")}
        >
          Airport
        </button>
        <button
          className={`btn ${transferType === "railway" ? "btn-warning" : "btn-light"}`}
          onClick={() => setTransferType("railway")}
        >
          Railway Station
        </button>
        <button
          className={`btn ${transferType === "hotel" ? "btn-warning" : "btn-light"}`}
          onClick={() => setTransferType("hotel")}
        >
          Area / Hotel
        </button>
      </div>

      {/* ✅ Row 1: Source, Pickup, Drop */}
      <div className="row g-2 mb-2">
        {/* 🔍 Searchable City Input */}
        <div className="col-md-4 col-sm-6 position-relative">
          <label className="form-label small text-muted">Source City</label>
          <input
            type="text"
            className="form-control rounded-3"
            placeholder="Search City"
            value={sourceCityName}
            onChange={(e) => handleCitySearch(e.target.value)}
          />
          {filteredCities.length > 0 && (
            <ul
              className="list-group position-absolute w-100"
              style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
            >
              {filteredCities.map((c) => (
                <li
                  key={c._id}
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    setSourceCity(c._id);
                    setSourceCityName(c.city);
                    setFilteredCities([]);
                    setPickup("");
                    setDrop("");
                  }}
                >
                  {c.city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pickup */}
        <div className="col-md-4 col-sm-6">
          <label className="form-label small text-muted">Pickup Location</label>
          <select
            className="form-control rounded-3"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            disabled={!sourceCity}
          >
            <option value="">Select Pickup</option>
            {pickupOptions.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name || p.locationName || p.city}
              </option>
            ))}
          </select>
        </div>

        {/* Drop */}
        <div className="col-md-4 col-sm-6">
          <label className="form-label small text-muted">Drop Location</label>
     <select
  className="form-control rounded-3"
  value={drop}
  onChange={(e) => setDrop(e.target.value)}
  disabled={!sourceCity}
>
  <option value="">Select Drop</option>
  {dropOptions.map((d) => (
    <option key={d._id} value={d._id}>
      {d.locationName}
    </option>
  ))}
</select>

        </div>
      </div>

      {/* ✅ Row 2: Start Date, End Date, Time */}
      <div className="row g-2">
        <div className="col-md-4 col-sm-6">
          <label className="form-label small text-muted">Start Date</label>
          <input
            type="date"
            className="form-control rounded-3"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-6">
          <label className="form-label small text-muted">End Date</label>
          <input
            type="date"
            className="form-control rounded-3"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-sm-6">
          <label className="form-label small text-muted">Time</label>
          <input
            type="time"
            className="form-control rounded-3"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      {/* ✅ Search Button with Loading State */}
      <button
        className="btn btn-warning w-100 mt-3 py-2"
        onClick={handleSearch}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Searching...
          </>
        ) : (
          "Search Car"
        )}
      </button>
    </div>
  );
};

export default Transfer;