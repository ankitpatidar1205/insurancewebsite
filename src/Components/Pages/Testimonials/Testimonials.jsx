import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Offeriyo helped me reach more customers in my locality. My footfall increased by 40% within just one month of listing my shop.',
      author: 'Ramesh Kumar',
      company: 'Kumar Grocery Store – Indore',
      type: 'shop-owner'
    },
    {
      text: 'I discovered amazing deals at shops I never knew existed in my neighborhood. It\'s like having a local market in my pocket!',
      author: 'Priya Sharma',
      company: 'Customer – Mumbai',
      type: 'customer'
    },
    {
      text: 'Posting offers is so simple. I updated my festival sale offer and saw customers walking in within hours. No technical skills needed!',
      author: 'Anjali Patel',
      company: 'Patel Fashion Boutique – Ahmedabad',
      type: 'shop-owner'
    },
    {
      text: 'I love that I can verify products in person before buying. No more fake products or delivery delays. Just genuine local shopping.',
      author: 'Vikram Singh',
      company: 'Customer – Delhi',
      type: 'customer'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <Container>
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle text-center mb-5">
          Real stories from real shop owners and customers who are transforming their local shopping experience with Offeriyo.
        </p>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <div className="testimonial-card card-hover">
                <div className="testimonial-type">
                  {testimonial.type === 'shop-owner' ? 
                    <span className="badge bg-primary">Shop Owner</span> : 
                    <span className="badge bg-success">Customer</span>
                  }
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-info">
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#download" className="btn-primary-custom">
            Join the Offeriyo Community Today
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;