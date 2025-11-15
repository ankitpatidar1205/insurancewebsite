import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">
        {/* Video Section */}
        <div className="hero-video-section">
          <video autoPlay loop muted playsInline className="hero-video">
            <source
              src="https://www.pexels.com/download/video/8439137/"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
          <button className="help-button" aria-label="Help">?</button>
        </div>

        {/* Content Section */}
        <div className="hero-content-section">
          <h1 className="hero-title">
            Your health partner that prevents, insures and supports you every day
          </h1>
          <div className="hero-buttons">
            <Link to="/dispatch" className="btn-primary-custom">
              Get my quote in 2 minutes
            </Link>
            <Link to="/request-demo" className="btn-secondary-custom">
              Request a demo
            </Link>
          </div>
          <div className="video-link">
            <a href="#" className="video-text">
              Learn all about Lifesecure in video
              <span className="play-icon ms-2"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;