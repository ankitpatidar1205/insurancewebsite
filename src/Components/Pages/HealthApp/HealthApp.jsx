import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import "./HealthApp.css";

const HealthApp = () => {
  const [openSection, setOpenSection] = useState("treatment");

  const sections = [
    {
      id: "treatment",
      title: "Treatment completed, reimbursement provided immediately",
      description: `A therapy or osteopathy session? Take a photo of your invoice and receive your reimbursement before you're even charged. 
90% of refunds are processed in less than 24 hours.`,
      images: [
        "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3825525/pexels-photo-3825525.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: "partner",
      title: "Your head-to-toe health partner",
      description:
        "From your mental health to your physical wellbeing, our platform connects you to top professionals and care options for every need.",
      images: [
        "https://images.pexels.com/photos/4058233/pexels-photo-4058233.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8460151/pexels-photo-8460151.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: "eyes",
      title: "The best for your beautiful eyes",
      description:
        "Get complete eye care support — from regular checkups to vision therapy. Fast reimbursements, trusted specialists, and simple bookings.",
      images: [
        "https://images.pexels.com/photos/3765115/pexels-photo-3765115.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3822611/pexels-photo-3822611.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ];

  const activeSection =
    sections.find((s) => s.id === openSection) || sections[0];

  const handleToggle = (id) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="health-section">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={7}>
            <h2 className="main-heading">Health has found its app</h2>
            <p className="sub-heading">
              4.9/5 according to our members on the App Store and Play Store
            </p>

            <div className="accordion-section">
              {sections.map((section) => (
                <div key={section.id} className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => handleToggle(section.id)}
                  >
                    <h6>{section.title}</h6>
                    <div
                      className={`icon-wrapper ${
                        openSection === section.id ? "open" : ""
                      }`}
                    >
                      <span className="triangle-icon"></span>
                    </div>
                  </div>

                  <Collapse in={openSection === section.id}>
                    <div className="accordion-body">
                      <p>{section.description}</p>
                    </div>
                  </Collapse>
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={5} className="text-center image-col">
            <div className="image-container">
              {activeSection.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="health"
                  className={`health-img ${index === 0 ? "active" : "secondary"}`}
                />
              ))}

             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HealthApp;
