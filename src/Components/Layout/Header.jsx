import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
   
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' }
  ];


  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar expand="lg" expanded={mobileMenuOpen} onToggle={setMobileMenuOpen}>
          <Navbar.Brand as={Link} to="/" className="brand-container">
            <div className="brand-logo">
              <span className="brand-text">Offeriyo</span>
              <span className="brand-tagline text-dark">Har Local Offer Chutki Mai!</span>
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link 
                  key={item.path}
                  as={Link} 
                  to={item.path}
                  className={`nav-link-custom ${activePath === item.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Nav.Link>
              ))}
              
           
            </Nav>
            
            <div className="header-actions">
              <Button as={Link} to="/download-app" className="btn-download-header">
                <i className="bi bi-download me-2"></i>
                Download App
              </Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;