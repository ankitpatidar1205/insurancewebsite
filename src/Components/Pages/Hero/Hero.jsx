import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero " id="home">
      <Container className="hero-wrapper">
        <div className="video-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source
              src="https://videos.pexels.com/video-files/855469/855469-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">
              Your health partner that prevents, insures and supports you every day
            </h1>
            <div className="hero-buttons">
              <Button href="#" className="btn-primary-custom">
                Get my quote in 2 minutes
              </Button>
              <Button href="#" className="btn-secondary-custom">
                Request a demo
              </Button>
            </div>
            <div className="video-link">
              <a href="#" className="video-text">
                
                Learn all about Alan in video
                <span className="play-icon ms-2"></span>
              </a>
            </div>
          </div>
        </div>

        <Button className="help-button">Help</Button>
      </Container>
    </section>
  );
};

export default Hero;
