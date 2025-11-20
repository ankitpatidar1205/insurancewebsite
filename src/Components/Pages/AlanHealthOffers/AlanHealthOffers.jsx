import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";
import "../HealthApp/HealthApp.css";

const LifesecureIndividualsSection = () => {
  const [openSection, setOpenSection] = useState("retirees");

  const sections = [
    {
      id: "retirees",
      title: "Supplementary health insurance for retirees",
      description: `Discover Lifesecure Dolce Vita, our plan dedicated to retirees. Benefit from comprehensive coverage at fair prices, simplify your paperwork, and fully enjoy your retirement.`,
      linkText: "Discover Lifesecure Dolce Vita",
      linkUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&w=800&q=80", // happy elderly couple outdoors
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80", // senior smiling woman
        "https://images.unsplash.com/photo-1559599101-56854e8a8a4e?auto=format&fit=crop&w=800&q=80", // elderly man in nature
      ],
    },
    {
      id: "self-employed",
      title: "Better guarantees for the self-employed",
      description:
        "Tailored plans designed for freelancers and entrepreneurs — get reliable, flexible coverage that adapts to your dynamic lifestyle and business needs.",
      linkText: "Explore Self-Employed Plans",
      linkUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // creative workspace
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // freelancer laptop
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // man on laptop home office
      ],
    },
    {
      id: "public-sector",
      title: "Labelled offers for the public service",
      description:
        "Coming soon! Specialized health plans for public sector employees — designed with your unique benefits and schedules in mind.",
      linkText: "Notify Me When Available",
      linkUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", // office team
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80", // teacher or mentor
        "https://images.unsplash.com/photo-1581091870622-3d8a2b92f0b7?auto=format&fit=crop&w=800&q=80", // worker at desk
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

        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={7}>
            <h2 className="main-heading">Lifesecure for individuals</h2>
            <p className="sub-heading">
              We also offer deals for individuals: retirees, self-employed workers and — very soon — public sector employees!
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
                      {section.linkText && (
                        <a href={section.linkUrl} className="link-text">
                          {section.linkText}
                        </a>
                      )}
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
                  alt="individuals health"
                  className={`health-img ${index === 0 ? "active" : "secondary"}`}
                />
              ))}
            </div>
          </Col>
        </Row>
   
    </section>
  );
};

export default LifesecureIndividualsSection;
