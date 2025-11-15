import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  const stats = [
    { number: '5K+', label: 'Local Shops Listed' },
    { number: '50K+', label: 'Active Offers' },
    { number: '100+', label: 'Cities Covered' },
    { number: '95%', label: 'Customer Satisfaction' }
  ];

  const values = [
    {
      icon: 'bi-shop',
      title: 'Local First',
      description: 'We prioritize local businesses and help them thrive in the digital age.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Trust & Authenticity',
      description: 'All shops and offers on Offeriyo are verified to ensure genuine experiences.'
    },
    {
      icon: 'bi-lightning-fill',
      title: 'Instant Discovery',
      description: 'We make discovering local offers as quick and easy as a single tap.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Community Growth',
      description: 'We believe in growing together - supporting local economies and communities.'
    }
  ];

  return (
    <div className="about-page">
      {/* Company Story */}
      <section className="company-story">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="story-content">
                <h2>Alan. Where insurance, care, and prevention finally work together.</h2>
                <p>
                 Healthcare works best when it isn't fragmented. That's why we built the first truly integrated model, making prevention the norm, care accessible, and insurance delightful.
                </p>
                <p>
                Today, we’re serving over 1 million members in France, Belgium, Spain, and Canada.
                </p>
               
               <button className='btn btn-primary'>Our unique model</button>
              </div>
            </Col>
            <Col md={6}>
              <div className="story-image">
                <img src="https://6vvt7k9n.twic.pics/v1/image:prismic/aQxlK7pReVYa4Hly_Homepage_HeroIllustration_Desktop.png" alt="Our Story" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

         <section className="company-story">
        <Container>
          <Row className="align-items-center">
        
            <Col md={6}>
              <div className="story-image">
                <img src="https://6vvt7k9n.twic.pics/prismic/aQDMb7pReVYa3wD1_Imagewrapper-1--1-.png?rect=0%2C14%2C976%2C692&w=2368&h=1680&auto=format&twic=v1/cover=470x333" alt="Our Story" className="img-fluid rounded" />
              </div>
            </Col>
                <Col md={6}>
              <div className="story-content">
                <h2>A letter from our CEO</h2>
                <p>
               Health is the universal thread that connects every human story. We will all face its challenges, whether watching a loved one battle schizophrenia or bipolar disorder, losing someone dear to cancer, struggling with fertility or weight control, or enduring endometriosis every single month. making prevention the norm, care accessible, and insurance delightful.
                </p>
                <p>
          Those are the shared realities that define our humanity. Health touches every life, every family, every future. It's the foundation of life, happiness, and society.
                </p>
               <p>Great health unlocks our best life and our best work. When it's strong, our potential expands at home, at work, across families, teams, and society. When it's fragile, everything else becomes brittle. That simple truth is why we started Alan, and why we pour so much energy into it every single day.</p>
               <button className='btn btn-primary'>Our unique model</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>Our vision is to make prevention the new norm of care</h2>
              <p>
Too often, people face a system that is complex, reactive, and anxiety‑inducing. They delay care because of forms, jargon, waiting lists, or stigma. Employers want to help, but fragmentation and friction get in the way.</p>
          
          <p>At Alan we want to ensure people live in good health to 100 while helping employers feel proud, turning health benefits from a cost center into their most valuable investment.</p>
            </Col>
          </Row>
        </Container>
      </section>

        <section className="company-story">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="story-content">
                <h2>Our model</h2>
                <p>
             At the heart of Alan is a bold idea: healthcare works best when it isn’t fragmented. Insurance, care access, and prevention shouldn’t live in silos. They should reinforce each other.
                </p>
                <p>
             That’s why we built the first truly integrated healthcare partner.

A model where prevention fuels long-term health, where care is immediate and accessible, and where insurance is simple, transparent, and fast.

This integrated approach unlocks better outcomes for individuals, higher performance for companies, and lasting value for the healthcare system.

Our customers are companies of all sizes & industriessegments, consumers (retirees, self-employed and governments (Ministries, local collectivities, …).
                </p>
               
               <button className='btn btn-primary'>Our business model</button>
              </div>
            </Col>
            <Col md={6}>
              <div className="story-image">
                <img src="https://6vvt7k9n.twic.pics/prismic/aQDODLpReVYa3wGd_ImageforPrismic.png?rect=16%2C0%2C1151%2C840&w=1952&h=1424&auto=format&twic=v1/cover=390x284" alt="Our Story" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

        <section className="cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>Healthcare that actually works</h2>
          <p>Every decision we make, every feature we build, every partnership we form serves our mission to make healthcare simple, engaging, and effective. Here's how we do it;</p>
            </Col>
          </Row>
        </Container>
      </section>

        <section className="company-story">
        <Container>
          <Row className="align-items-center">
                <Col md={6}>
              <div className="story-image">
                <img src="https://6vvt7k9n.twic.pics/prismic/aQDOxLpReVYa3wIV_Imagewrapper-2--1-.png?rect=0%2C4%2C976%2C712&w=1952&h=1424&auto=format&twic=v1/cover=390x284" alt="Our Story" className="img-fluid rounded" />
              </div>
            </Col>
            <Col md={6}>
              <div className="story-content">
                <h2>Health without gaps</h2>
                <p>
          With full-stack health insurance, instant reimbursements, smart healthcare, and human support at every step, Alan bridges payers, providers, and members for better care.
                </p>
            
              </div>
            </Col>
        
          </Row>
        </Container>
      </section>
      {/* Mission & Vision */}
      <section className="mission-vision">
        <Container>
           <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>The most engaging prevention & care</h2>
          <p>We make prevention and care something people actually use and enjoy.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mission-card">
                <Card.Body>
                  <h3>30%+</h3>
                  <p>
                Weekly active users in team and individual challenges.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="vision-card">
                <Card.Body>
                  <h3>260k</h3>
                  <p>
                Medical conversations delivered, each equal to a doctor’s visit.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="vision-card">
                <Card.Body>
                  <h3>95%</h3>
                  <p>
              Of AI-powered medical chats rated good or excellent by members (reviewed daily by our medical team).
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <Container>
          <h2 className="section-title">Our Impact</h2>
          <Row>
            {stats.map((stat, index) => (
              <Col md={3} key={index}>
                <div className="stat-item">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <Container>
          <h2 className="section-title">Our Core Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="value-card">
                  <div className="value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <Container>
          <h2 className="section-title">How Offeriyo Works</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="works-content">
                <h3>For Shop Owners</h3>
                <ul className="works-list">
                  <li>Create your digital shop profile in minutes</li>
                  <li>Post offers, deals, and schemes instantly</li>
                  <li>Reach thousands of nearby customers</li>
                  <li>Drive real footfall to your store</li>
                  <li>Build digital trust with verified listings</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="works-content">
                <h3>For Customers</h3>
                <ul className="works-list">
                  <li>Discover nearby deals from trusted local shops</li>
                  <li>Stay updated on sales and special offers</li>
                  <li>Check products in person before buying</li>
                  <li>Enjoy instant shopping without delivery delays</li>
                  <li>Support local businesses in your community</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
    
    </div>
  );
};

export default About;