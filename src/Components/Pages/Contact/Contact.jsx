import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'customer'
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setAlertMessage('Thank you for contacting Offeriyo! We will get back to you soon.');
    setAlertVariant('success');
    setShowAlert(true);
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      userType: 'customer'
    });
    
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="contact-hero-title">Let's Connect — We'd Love to Hear From You</h1>
              <p className="contact-hero-subtitle">
                Have questions, suggestions, or partnership ideas? Reach out to our team anytime — we're here to help every shop and every customer grow together.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact" id="contact">
        <Container>
          {showAlert && (
            <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible className="contact-alert">
              {alertMessage}
            </Alert>
          )}
          
          <Row className="g-4">
            <Col lg={8}>
              <Card className="contact-form-card">
                <Card.Body className="p-4 p-lg-5">
                  <div className="form-header text-center mb-4">
                    <div className="form-icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <h3 className="form-title">Send us a Message</h3>
                    <p className="form-subtitle">We'll respond as soon as possible</p>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formUserType">
                          <Form.Label>I am a</Form.Label>
                          <Form.Select 
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            className="form-select-custom"
                          >
                            <option value="customer">Customer</option>
                            <option value="shop-owner">Shop Owner</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Enter your name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Enter your message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-control-custom"
                      />
                    </Form.Group>
                    
                    <div className="text-center">
                      <Button variant="primary" type="submit" className="submit-btn-custom">
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <div className="contact-info-sticky">
                <Card className="contact-info-card mb-4">
                  <Card.Body className="p-4">
                    <h4 className="info-title">Contact Information</h4>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div className="contact-content">
                        <h5>Email</h5>
                        <a href="mailto:OfficialOfferiyo@gmail.com">OfficialOfferiyo@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-globe2"></i>
                      </div>
                      <div className="contact-content">
                        <h5>Website</h5>
                        <a href="https://www.offeriyo.com" target="_blank" rel="noopener noreferrer">www.offeriyo.com</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div className="contact-content">
                        <h5>Office</h5>
                        <p>Indore, Madhya Pradesh, India</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="bi bi-clock-fill"></i>
                      </div>
                      <div className="contact-content">
                        <h5>Business Hours</h5>
                        <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                        <p>Sat: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="social-card">
                  <Card.Body className="p-4">
                    <h4 className="info-title">Follow Us</h4>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/offeriyo" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/offeriyo" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/offeriyo" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://twitter.com/offeriyo" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card className="app-download-card mt-4">
                  <Card.Body className="p-4 text-center">
                    <h4 className="info-title">Get the Offeriyo App</h4>
                    <p className="app-tagline">Har Local Offer Chutki Mai!</p>
                    <div className="download-buttons">
                      <a href="#" className="download-btn">
                        <i className="bi bi-google-play"></i>
                        <div className="btn-text">
                          <small>Get it on</small>
                          <span>Google Play</span>
                        </div>
                      </a>
                      <a href="#" className="download-btn">
                        <i className="bi bi-apple"></i>
                        <div className="btn-text">
                          <small>Download on the</small>
                          <span>App Store</span>
                        </div>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;