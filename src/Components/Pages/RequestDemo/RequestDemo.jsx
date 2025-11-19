import React, { useState } from "react";
import "./RequestDemo.css";

const RequestDemo = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setError(true);
      return;
    }
  };

  return (
    <section className="demo-wrapper mt-5">
      <div className="container-large">
        <div className="row g-0 form-box">

          {/* LEFT SECTION */}
          <div className="col-lg-6 left-area">
            <h2 className="title">Talk to our teams</h2>

            <ul className="features">
              <li>
                <span className="tick">✓</span> Share your health insurance needs
              </li>
              <li>
                <span className="tick">✓</span> Discover Lifesecure, your new health partner
              </li>
              <li>
                <span className="tick">✓</span> Find the ideal health plan
              </li>
            </ul>

            <img
              className="main-img"
              src="https://i.postimg.cc/SRn11ZLf/contact-person-with-phone-f97eae74af8383d1.webp"
              alt="person"
            />

            <img
              src="https://Lifesecure.com/website-assets/Lifesecure-Lifesecure-website:4c03e26f4e1aef2df0d614020841b25c52dbf3f4/pink-flower-1886591798fc09ce.webp"
              className="flower"
              alt=""
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="col-lg-6 right-area">

            {/* Tabs */}
            <div className="tabs">
              <button
                className={activeTab === "discover" ? "active" : ""}
                onClick={() => setActiveTab("discover")}
              >
                I'm discovering Lifesecure
              </button>

              <button
                className={activeTab === "member" ? "active" : ""}
                onClick={() => setActiveTab("member")}
              >
                Already a member?
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="row">
                <div className="col-6 mb-3">
                  <input type="text" className="input" placeholder="First name *" />
                </div>
                <div className="col-6 mb-3">
                  <input type="text" className="input" placeholder="Name *" />
                </div>
              </div>

              <div className="mb-3">
                <input type="email" className="input" placeholder="Email *" />
              </div>

              <div className="mb-3">
                <input type="tel" className="input" placeholder="Phone *" />
              </div>

              {/* Dropdown */}
              <div className="mb-3">
                <select
                  className={`input ${error ? "error" : ""}`}
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    setError(false);
                  }}
                >
                  <option value="">You are… *</option>
                  <option value="hr">HR Manager</option>
                  <option value="employee">Employee</option>
                  <option value="other">Other</option>
                </select>

                {error && <p className="error-text">This field is required</p>}
              </div>

              <button className="continue-btn">Continue</button>

              <p className="privacy">
                Contextual information may be used to process your request.{" "}
                <a href="#">privacy policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;
