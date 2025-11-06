import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'bi-shop',
      title: 'Shop Listing',
      description: 'Shop owners can list their stores in just 2 minutes and start getting visibility instantly.'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Geo-Based Offers',
      description: 'Customers only see offers from shops within their nearby radius for relevant deals.'
    },
    {
      icon: 'bi-megaphone-fill',
      title: 'Smart Offer Management',
      description: 'Shop owners can post, edit, and remove offers anytime from the dashboard.'
    },
    {
      icon: 'bi-bell-fill',
      title: 'Instant Notifications',
      description: 'Customers get notified when a new deal is live near them.'
    },
    {
      icon: 'bi-chat-dots-fill',
      title: 'Direct Reach',
      description: 'No middlemen or fake stores — customers connect directly with shop owners.'
    },
    {
      icon: 'bi-patch-check-fill',
      title: 'Verified Shops Only',
      description: 'Every shop on Offeriyo is verified for authenticity and reliability.'
    },
    {
      icon: 'bi-calendar-event-fill',
      title: 'Festival Campaigns',
      description: 'Get featured during local and national festivals to reach thousands more users.'
    },
    {
      icon: 'bi-phone-vibrate-fill',
      title: 'Mobile-First Platform',
      description: 'Optimized for mobile devices to ensure seamless experience for both shop owners and customers.'
    }
  ];

  return (
    <section className="features" id="features">
      <Container>
        <h2 className="section-title">What Makes Offeriyo Unique</h2>
        <p className="section-subtitle text-center mb-5">
          Offeriyo isn't just another shopping app — it's a digital ecosystem that connects people with their local market.
          We believe shopping locally should be as easy as shopping online, but faster, safer, and more genuine.
        </p>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="feature-card card-hover">
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#how-it-works" className="btn-primary-custom">
            Explore All Features →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Features;