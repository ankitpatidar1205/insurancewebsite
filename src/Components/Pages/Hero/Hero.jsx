import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container fluid className="hero-container">
        <Row className="align-items-center h-100">
          <Col md={6} className="hero-left">
            <div className="hero-content">
              <h1 className="hero-title">Your health partner that prevents, insures and supports you every day</h1>
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
                  <span className="play-icon"></span>
                  Learn all about Alan in video
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-right">
            <div className="hero-image">
              <img src="https://z-cdn-media.chatglm.cn/files/977fa7bf-a5a8-40cd-8d93-9d6a8e949743_pasted_image_1762885480618.png?auth_key=1862885523-79ec81b08cbf40bbbb03179217b1c791-0-7b67c76cda0c68ea028559299dd8a4b6" alt="Person drinking orange juice" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;