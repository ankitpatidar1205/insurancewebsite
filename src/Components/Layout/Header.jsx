/* Header.js */
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
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
    { path: '/offers', label: 'Our offers', hasDropdown: true },
    { path: '/why-alan', label: 'Why Alan?', hasDropdown: true },
    { path: '/resources', label: 'Resources', hasDropdown: true },
    { path: '/about-alan', label: 'About Alan', hasDropdown: true },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar expand="lg" expanded={mobileMenuOpen} onToggle={setMobileMenuOpen}>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="brand-container">
            <a href="/" className="alan-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 681 142"
                width="100px"
                height="28px"
                className="_width-100px _height-28px murray-next css-tf8o54"
                aria-hidden="true"
                aria-label="Alan"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M58.228 25.335C55.406 8.675 40.153-2.477 24.224.473 12.468 2.651 3.593 11.915.878 23.316q-.007.035-.017.07-.148.628-.27 1.264l-.03.149q-.116.618-.207 1.243-.014.078-.025.155a32 32 0 0 0-.17 1.402l-.01.098q-.061.635-.093 1.272-.013.204-.021.408c-.015.335-.02.672-.025 1.01 0 .133-.01.265-.01.4 0 .115.007.229.01.344q.003.27.012.54c.045 1.444.184 2.902.431 4.367 1.611 9.506 10.284 15.847 19.375 14.164 3.281-.609 6.17-2.18 8.444-4.387a6.47 6.47 0 0 1 7.095-1.28 15.96 15.96 0 0 0 9.317 1.061c8.726-1.616 14.658-10.04 13.696-19.122a19 19 0 0 0-.152-1.14m70.276-20.9c-32.175 0-52.163 11.366-52.163 29.659 0 21.327 20.476 50.44 52.163 50.44 31.2 0 52.163-29.44 52.163-50.44 0-18.571-19.5-29.659-52.163-29.659m128.462 24.943q-.008-.212-.02-.422-.034-.63-.093-1.258l-.01-.098q-.07-.705-.17-1.402l-.025-.155a31 31 0 0 0-.508-2.655l-.017-.071C253.408 11.915 244.533 2.65 232.777.473c-15.929-2.95-31.182 8.202-34.004 24.862a18 18 0 0 0-.152 1.139c-.963 9.083 4.97 17.506 13.696 19.122 3.262.605 6.47.176 9.318-1.062a6.47 6.47 0 0 1 7.094 1.28c2.275 2.208 5.163 3.78 8.445 4.388 9.09 1.683 17.764-4.658 19.374-14.164.247-1.465.385-2.923.431-4.367q.01-.27.014-.54c0-.115.007-.23.007-.345 0-.134-.007-.266-.01-.4q-.003-.506-.024-1.01m-82.21 71.979c-8.447-3.802-19.804 2.69-29.398 4.263-5.65.968-11.246 1.47-16.854 1.527a106.4 106.4 0 0 1-16.855-1.527c-9.595-1.573-20.95-8.062-29.399-4.263-4.283 1.943-5.603 6.681-3.863 12.339 1.197 3.866 3.507 7.436 6.443 10.31 6.1 6.004 13.902 10.547 21.086 13.421 7.313 2.947 14.944 4.52 22.588 4.575 7.645-.054 15.274-1.626 22.588-4.575 7.183-2.87 14.986-7.421 21.087-13.422 2.933-2.875 5.246-6.445 6.442-10.31 1.74-5.652.42-10.4-3.864-12.338M645.863 38.3c-12.668 0-22.46 4.606-29.567 15.165V44.3a3.89 3.89 0 0 0-3.89-3.89H587.17a3.89 3.89 0 0 0-3.892 3.89v91.668a3.89 3.89 0 0 0 3.892 3.891h25.235a3.89 3.89 0 0 0 3.891-3.89V86.104c0-11.328 4.031-21.313 15.937-21.313 12.093 0 15.743 11.713 15.743 21.313v49.863a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V84.182c0-21.694-6.144-45.883-35.137-45.883m-195.458 77.58-5.213-.012c-4.138-.143-5.96-3.287-5.96-7.536V106.4h.013V6.891a3.89 3.89 0 0 0-3.892-3.89h-24.567a3.89 3.89 0 0 0-3.892 3.89v99.74c0 28.554 18.343 35.173 35.551 35.173 2.367 0 4.64-.155 8.268-.456a3.897 3.897 0 0 0 3.574-3.878v-17.699a3.89 3.89 0 0 0-3.882-3.89m62.845.172c-14.012 0-22.656-11.518-22.656-26.11 0-14.016 8.256-25.535 22.275-25.535 14.012 0 23.418 10.56 23.418 26.493 0 15.743-9.982 25.152-23.037 25.152m51.401-75.644H539.41a3.89 3.89 0 0 0-3.89 3.891v9.36c-6.144-9.216-17.275-15.36-30.33-15.36-29.18 0-47.806 22.846-47.806 51.642 0 29.374 19.387 52.03 48 52.03 14.01 0 23.804-5.954 30.135-15.744v9.74a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V44.3a3.89 3.89 0 0 0-3.89-3.89m-227.786 75.643c-14.012 0-22.655-11.518-22.655-26.11 0-14.016 8.256-25.535 22.274-25.535 14.012 0 23.418 10.56 23.418 26.493 0 15.743-9.98 25.152-23.037 25.152m51.401-75.644h-25.242a3.89 3.89 0 0 0-3.89 3.891v9.36c-6.144-9.216-17.275-15.36-30.33-15.36C299.624 38.3 281 61.146 281 89.942c0 29.374 19.386 52.03 47.998 52.03 14.012 0 23.805-5.954 30.136-15.744v9.74a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V44.3a3.89 3.89 0 0 0-3.89-3.89"></path>
                </g>
              </svg>
            </a>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="desktop-nav">
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
                  {item.hasDropdown && <span className="dropdown-indicator">▼</span>}
                </Nav.Link>
              ))}
            </Nav>
            <div className="header-actions">
              <Button as={Link} to="/login" className="btn-login-header">
                Log in
              </Button>
            </div>
          </Navbar.Collapse>

          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'show' : ''}`}>
            <div className="mobile-menu-content">
              <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                ×
              </button>
              <div className="mobile-nav-list">
                {navItems.map((item) => (
                  <div key={item.path} className="mobile-nav-item">
                    <Link
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <span className="mobile-dropdown-indicator">▼</span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mobile-login-btn">
                <Button as={Link} to="/login" className="btn-login-header">
                  Log in
                </Button>
              </div>
            </div>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
