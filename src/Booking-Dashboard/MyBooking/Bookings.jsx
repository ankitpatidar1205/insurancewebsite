import React, { useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Bookings.css";

const bookingsData = {
  active: [
    {
      id: "#BK2025001",
      car: "BMW 5 Series",
      price: "₹2,500",
      status: "Active",
            image:
        "https://i.postimg.cc/HkbL8hrZ/ae1ec87528f92a915a5694ec8edd33a508ca503b.jpg",
      pickup: {
        date: new Date("2025-01-15T10:00:00"),
        location: "Downtown Plaza, New York",
      },
      dropoff: {
        date: new Date("2025-01-18T18:00:00"),
        location: "JFK Airport, Terminal 1",
      },
      actions: ["View Details", "Modify", "Cancel"],
    },
    {
      id: "#BK2025002",
      car: "Toyota Fortuner",
      price: "₹3,200",
      status: "In Progress",
      image:
        "https://i.postimg.cc/8PzTdRWk/fe9560a541d12b2ff8eaefcd0d559f2c051bac4a.jpg",
      pickup: {
        date: new Date("2025-01-12T09:00:00"),
        location: "Central Station, Mumbai",
      },
      dropoff: {
        date: new Date("2025-01-19T20:00:00"),
        location: "Goa Beach Resort",
      },
      actions: ["View Details", "Track Vehicle", "Emergency"],
    },
  ],
  upcoming: [
    {
      id: "#BK2025010",
      car: "Audi A6",
      price: "₹4,000",
      status: "Upcoming",
      pickup: {
        date: new Date("2025-02-02T11:00:00"),
        location: "Delhi Airport",
      },
      dropoff: {
        date: new Date("2025-02-06T18:00:00"),
        location: "Delhi Airport",
      },
      actions: ["View Details", "Cancel"],
    },
  ],
  past: [
    {
      id: "#BK2024005",
      car: "Mercedes C-Class",
      price: "₹3,800",
      status: "Completed",
      pickup: {
        date: new Date("2024-12-10T09:00:00"),
        location: "London City Center",
      },
      dropoff: {
        date: new Date("2024-12-15T20:00:00"),
        location: "Heathrow Airport",
      },
      actions: ["View Details"],
    },
  ],
};

export default function Bookings() {
  const [key, setKey] = useState("active");
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Filter bookings
  const filterBookings = (list) => {
    return list.filter((b) => {
      const matchSearch =
        b.car.toLowerCase().includes(search.toLowerCase()) ||
        b.id.toLowerCase().includes(search.toLowerCase());

      const withinRange =
        (!startDate && !endDate) ||
        (b.pickup.date >= startDate && b.dropoff.date <= endDate);

      return matchSearch && withinRange;
    });
  };

  const renderBookingCard = (b, idx) => (
    <div className="booking-card" key={idx}>
      {b.image && <img src={b.image} alt={b.car} className="car-img" />}
      <div className="booking-details">
        <h5>{b.car}</h5>
        <p className="booking-id">Booking ID: {b.id}</p>
        <span
          className={`status ${b.status.toLowerCase().replace(" ", "-")}`}
        >
          {b.status}
        </span>
        <div className="pickup-dropoff">
          <div>
            <strong>
              <i className="bi bi-geo-alt-fill"></i> Pickup
            </strong>
            <p>{b.pickup.date.toLocaleString()}</p>
            <p>{b.pickup.location}</p>
          </div>
          <div>
            <strong>
              <i className="bi bi-geo-alt"></i> Drop-off
            </strong>
            <p>{b.dropoff.date.toLocaleString()}</p>
            <p>{b.dropoff.location}</p>
          </div>
        </div>
        <div className="actions">
          {b.actions.map((action, i) => (
            <Button
              key={i}
              variant={
                action === "Cancel"
                  ? "danger"
                  : action === "Track Vehicle"
                  ? "success"
                  : action === "Emergency"
                  ? "warning"
                  : "primary"
              }
              className="me-2 mb-2 action-btn"
            >
              {action}
            </Button>
          ))}
        </div>
      </div>
      <div className="price">
        <h5>{b.price}</h5>
        <small>per day</small>
      </div>
    </div>
  );

  return (
    <div className="container booking-container">
      {/* Search + Filters */}
      <div className="filter-bar d-flex flex-wrap justify-content-between mb-3">
        <div className="search-box-container">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="form-control search-box"
            placeholder="Search bookings by car model, booking ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="d-flex flex-wrap gap-2 mt-2 mt-md-0">
          <div className="date-picker-wrapper">
            <i className="bi bi-calendar date-icon"></i>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
              placeholderText="Date Range"
              className="form-control date-picker"
            />
          </div>

          <Button variant="light" className="filter-btn">
            <i className="bi bi-funnel"></i> All Status
          </Button>
          <Button
            variant="link"
            className="clear-filters"
            onClick={() => {
              setSearch("");
              setDateRange([null, null]);
            }}
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        id="bookings-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="booking-tabs"
      >
        <Tab
          eventKey="active"
          title={`Active Bookings (${bookingsData.active.length})`}
        >
          {filterBookings(bookingsData.active).map(renderBookingCard)}
        </Tab>

        <Tab
          eventKey="upcoming"
          title={`Upcoming Bookings (${bookingsData.upcoming.length})`}
        >
          {filterBookings(bookingsData.upcoming).map(renderBookingCard)}
        </Tab>

        <Tab
          eventKey="past"
          title={`Past Bookings (${bookingsData.past.length})`}
        >
          {filterBookings(bookingsData.past).map(renderBookingCard)}
        </Tab>
      </Tabs>
    </div>
  );
}
