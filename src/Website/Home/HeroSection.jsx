import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeroSection.css";
import OutStation from "./OutStation";
import Local from "./Local";
import Transfer from "./Transfer";
import Deals from "./Deals";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("outstation");

  // Define each card data
  const tabs = [    
    {
      id: "outstation",
      title: "Outstation",
      icon: "fa-car",
      desc: "Perfect for intercity travel needs. Comfortable cars with experienced drivers.",
      highlight: "500+ routes",
      formType: "one-way",
      formFields: ["Source City", "Destination City", "Start Date", "Start Time"],
    },
    {
      id: "local",
      title: "Local",
      icon: "fa-map-marker-alt",
      desc: "Explore the city with ease. Hourly packages available.",
      highlight: "4, 8, 12 hrs",
      formType: "local",
      formFields: ["Source City", "Destination City", "Start Date", "Start Time"],
    },
    {
      id: "transfer",
      title: "Transfer",
      icon: "fa-plane",
      desc: "Reliable airport & station transfers. On-time pickup/drop.",
      highlight: "24/7 Available",
      formType: "transfer",
      formFields: ["Pick Up Location", "Drop Location", "Start Date", "End Date", "Start Time"],
    },
    {
      id: "deals",
      title: "Deals",
      icon: "fa-percent",
      desc: "Exclusive offers & discounts. Save big on travel expenses.",
      highlight: "Up to 50% off",
      formType: "deals",
      formFields: ["Source City", "Destination City", "Start Date", "Start Time"],
    },
  ];

  return (
    <div className="hero-wrapper  ">
      {/* Background Image */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          {/* Header */}
          <h1 className="hero-title">Your Safety Matters To Us</h1>
          <p className="hero-subtitle">100% Sanitized | Safe | Reliable Cab</p>

          {/* Tabs */}
          <div className="tabs-container d-flex flex-nowrap overflow-auto pb-2 mb-3">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-card ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-icon">
                  <i className={`fas ${tab.icon} text-dark`}></i>
                </div>
                <h6 className="tab-title">{tab.title}</h6>
                <p className="tab-desc d-none d-md-block">{tab.desc}</p>
                <p className="tab-highlight text-warning">{tab.highlight}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="form-container rounded-4 shadow-lg p-3 bg-white  ">
            {/* Tab Buttons */}
            <div className="d-flex flex-wrap gap-2 mb-3 ">
              {activeTab === "outstation" && (
                <>
                 <OutStation/>
                </>
              )}
              {activeTab === "local" && (
                <>
                 <Local/>
                </>
              )}
              {activeTab === "transfer" && (
                <>
                <Transfer/>
                
                </>
              )}
              {activeTab === "deals" && (
                <button className="btn btn-warning">
                  <Deals/>
                </button>
              )}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;