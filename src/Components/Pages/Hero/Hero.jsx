import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-wrapper">
        {/* Video Section */}
        <div className="hero-video-section">
          <video autoPlay loop muted playsInline className="hero-video">
            <source
              src="https://ik.imagekit.io/8x6rwnonn/fr_homepage_modal_video.mp4?updatedAt=1762893173607"
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
            <a href="#" className="btn-primary-custom">
              Get my quote in 2 minutes
            </a>
            <a href="#" className="btn-secondary-custom">
              Request a demo
            </a>
          </div>
          <div className="video-link">
            <a href="#" className="video-text">
              Learn all about Alan in video
              <span className="play-icon ms-2"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;