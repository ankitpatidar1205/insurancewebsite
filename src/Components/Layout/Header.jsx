import React, { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownMode, setDropdownMode] = useState('hover');
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

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
    
    const handleClickOutside = (event) => {
      if (dropdownMode === 'click' && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setDropdownMode('hover');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownMode]);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    if (activeDropdown === path && dropdownMode === 'click') {
      setActiveDropdown(null);
      setDropdownMode('hover');
    } else {
      setActiveDropdown(path);
      setDropdownMode('click');
    }
  };

  const handleMouseEnter = (path) => {
    if (dropdownMode === 'hover') {
      setActiveDropdown(path);
    }
  };

  const handleMouseLeave = () => {
    if (dropdownMode === 'hover') {
      setActiveDropdown(null);
    }
  };

  const handleMobileNavClick = (path) => {
    if (activeMobileDropdown === path) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(path);
    }
  };

  const renderMobileDropdown = (path) => {
    const content = dropdownContent[path];
    
    switch(path) {
      case '/offers':
        return (
          <div className="mobile-dropdown-content">
            <div className="mobile-dropdown-header">
              <h4>{content.title}</h4>
              <p>{content.subtitle}</p>
            </div>
            
            {content.columns.map((column, colIdx) => (
              <div key={colIdx} className="mobile-dropdown-column">
                {column.sections.map((section, secIdx) => (
                  <div key={secIdx} className="mobile-dropdown-section">
                    <h5>{section.heading}</h5>
                    <div className="mobile-dropdown-items">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="mobile-dropdown-item">
                          <span className="mobile-item-icon">{item.icon}</span>
                          <div>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            
            <div className="mobile-bottom-card" style={{ backgroundColor: content.bottomCard.bgColor }}>
              <h5>{content.bottomCard.title}</h5>
              <p>{content.bottomCard.description}</p>
            </div>
          </div>
        );
        
      case '/why-Lifesecure':
        return (
          <div className="mobile-dropdown-content">
            <h4>{content.leftSection.heading}</h4>
            
            {content.leftSection.items.map((item, idx) => (
              <div key={idx} className="mobile-benefit-item">
                <div className="mobile-benefit-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="mobile-benefit-content">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
            
            <a href="#" className="mobile-link-more">{content.leftSection.link}</a>
            
            <div className="mobile-right-section" style={{ backgroundColor: content.rightSection.bgColor }}>
              <h4>{content.rightSection.heading}</h4>
              <h5>{content.rightSection.title}</h5>
              <p>{content.rightSection.description}</p>
              
              <div className="mobile-section-buttons">
                {content.rightSection.buttons.map((btn, idx) => (
                  <button key={idx} className={btn.primary ? 'btn-primary' : 'btn-secondary'}>
                    {btn.text}
                  </button>
                ))}
              </div>
              
              <div className="mobile-section-image">
                <img src={content.rightSection.image} alt="App" />
              </div>
            </div>
          </div>
        );
        
      case '/resources':
        return (
          <div className="mobile-dropdown-content">
            {content.leftSidebar.map((section, secIdx) => (
              <div key={secIdx} className="mobile-dropdown-section">
                <h5>{section.heading}</h5>
                <div className="mobile-dropdown-items">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="mobile-dropdown-item">
                      <span className="mobile-item-icon">{item.icon}</span>
                      <div>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {content.rightCards.map((card, idx) => (
              <div key={idx} className="mobile-resource-card" style={{ backgroundColor: card.bgColor, color: card.textColor || '#2d3436' }}>
                <div className="mobile-card-image">
                  <img src={card.image} alt="Guide" />
                </div>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
                <button className="btn-download">{card.buttonText}</button>
              </div>
            ))}
          </div>
        );
        
      case '/about-Lifesecure':
        return (
          <div className="mobile-dropdown-content">
            <div className="mobile-about-card" style={{ backgroundColor: content.leftCard.bgColor }}>
              <h4>{content.leftCard.title}</h4>
              <p>{content.leftCard.description}</p>
              <button className="btn-learn-more">{content.leftCard.buttonText}</button>
              <div className="mobile-about-image">
                <img src={content.leftCard.image} alt="Team" />
              </div>
            </div>
            
            {content.rightSections.map((section, secIdx) => (
              <div key={secIdx} className="mobile-dropdown-section">
                <h5>{section.heading}</h5>
                <div className="mobile-dropdown-items">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="mobile-dropdown-item">
                      <span className="mobile-item-icon">{item.icon}</span>
                      <div>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };

  const dropdownContent = {
    '/offers': {
      title: 'Find the offer designed for you.',
      subtitle: (
        <>
          The best in <a href="#">health insurance</a>, <a href="#">personal protection</a> and prevention, tailored to your needs.
        </>
      ),
      layout: 'grid',
      columns: [
        {
          sections: [
            {
              heading: 'By company size',
              items: [
                { icon: '👤', title: 'Self-employed workers (TNS)', description: 'Freelancers, business owners, etc.' },
                { icon: '👥', title: 'Start-ups and very small businesses', description: '1 to 5 employees' },
                { icon: '🏠', title: 'Small and medium-sized enterprises (SMEs)', description: '6 to 100 employees' },
                { icon: '🏢', title: 'Key accounts', description: 'From 100 to several thousand employees' }
              ]
            },
            {
              heading: 'For individuals',
              items: [{ icon: '☀️', title: 'Retirees', description: 'Enjoy comprehensive and preventative coverage' }]
            }
          ]
        },
        {
          sections: [
            {
              heading: 'By sector of activity',
              items: [
                { icon: '💻', title: 'Tech', description: 'Start-ups and scale-ups' },
                { icon: '☕', title: 'Hotels, cafes, restaurants', description: 'Franchisees or independent' },
                { icon: '🛍️', title: 'Shops and supermarkets', description: 'For small and large stores' },
                { icon: '🔧', title: 'Industrialists and trading companies', description: 'For SMEs and mid-sized companies with an industrial focus' }
              ]
            },
            {
              heading: 'For the public sector',
              items: [
                { icon: '🚶', title: 'Local government employees', description: 'Offers eligible for local authority participation' },
                { icon: '🏛️', title: 'Public institutions', description: 'For structures in the public domain' }
              ]
            }
          ]
        }
      ],
      bottomCard: {
        title: 'Chartered accountants?',
        description: 'Become an Lifesecure partner and offer your customers the best experience in the industry.',
        bgColor: '#FFF4E6'
      }
    },

    '/why-Lifesecure': {
      title: null,
      layout: 'two-section',
      leftSection: {
        heading: 'The benefits of Lifesecure for your business',
        items: [
          {
            image: "https://i.postimg.cc/hGXyMZSX/Reasons-to-buy-a-life-insurance-policy.jpg",
            title: 'Get your first employees covered in 5 minutes with Lifesecure',
            description: 'When conformity rhymes with simplicity'
          },
          {
            image: "https://i.postimg.cc/qMBGjDL5/Keseimbangan-Kemampuan-Berbelanja-Purchasing-Power-Parity.jpg",
            title: 'Preserve the purchasing power of your employees',
            description: 'More care, less out-of-pocket expense.'
          },
          {
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=300&q=60",
            title: 'Put health at the heart of your HR strategy',
            description: 'Concrete actions for the well-being of your employees'
          }
        ],
        link: 'See more use cases'
      },
      rightSection: {
        heading: 'For our members',
        bgColor: '#E8F4FD',
        title: 'Your health partner everywhere, all the time.',
        description: 'Business leaders, freelancers, employees and their families are never alone when it comes to their health again.',
        buttons: [
          { text: 'Discover the app', primary: true },
          { text: 'Discover the new products', primary: false }
        ],
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=60"
      }
    },

    '/resources': {
      title: null,
      layout: 'sidebar',
      leftSidebar: [
        {
          heading: 'Themes',
          items: [
            { icon: '🏢', title: 'The company health insurance plan', description: 'Company health insurance: all the concepts you need to understand' },
            { icon: '☕', title: 'Health insurance for self-employed workers', description: 'Self-employed health insurance: the complete guide to choosing the right one!' },
            { icon: '•••', title: 'All our themes', description: 'Health insurance, supplementary insurance: everything you need to know' }
          ]
        },
        {
          heading: 'Resources',
          items: [
            { icon: '📖', title: 'Guides', description: 'Our guides for HR professionals, managers and freelancers' },
            { icon: '✉️', title: 'Tools', description: 'Letter templates for terminating a contract, etc.' },
            { icon: '💬', title: 'Testimonials', description: 'What our members & customers say about us' }
          ]
        }
      ],
      rightCards: [
        {
          title: 'Download the guide to artificial intelligence',
          description: 'The guide to integrating AI into your HR teams',
          buttonText: 'Download',
          bgColor: '#F8E8F4',
          image: "https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=350&q=60"
        },
        {
          title: 'Download the health insurance guide',
          description: 'The guide to finally understanding everything',
          buttonText: 'Download',
          bgColor: '#1E5651',
          textColor: '#FFFFFF',
          image: "https://i.postimg.cc/qBwshXT6/Health-Insurance-Guide.jpg"
        }
      ]
    },

    '/about-Lifesecure': {
      title: null,
      layout: 'about',
      leftCard: {
        title: 'Join our team',
        description: 'Reimagine healthcare with ambitious and caring international talent.',
        buttonText: 'Learn more',
        bgColor: '#F8E8F4',
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=350&q=60"
      },
      rightSections: [
        {
          heading: 'About Lifesecure',
          items: [
            { icon: '🎯', title: 'Our business model', description: 'The principles of our economic model' },
            { icon: '💪', title: 'Our financial strength', description: 'Our finances, explained simply' },
            { icon: '📰', title: 'Our news', description: 'New features, letters to our investors, etc.' },
            { icon: '🔧', title: 'Tech at Lifesecure', description: "Learn more about Lifesecure's tech culture" }
          ]
        },
        {
          heading: 'Discover Lifesecure',
          items: [
            { icon: '🌍', title: 'About us', description: 'Everything you need to know about the company (in English 😉)' }
          ]
        }
      ]
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar expand="lg" expanded={mobileMenuOpen} onToggle={setMobileMenuOpen}>
          <Navbar.Brand as={Link} to="/" className="brand-container">
            <a href="/" className="Lifesecure-logo">
              <img 
                src="https://i.postimg.cc/PJK9XZ73/Whats-App-Image-2025-11-14-at-21-02-46-6f198ba5-removebg-preview.png"
                alt="Lifesecure Logo"
                width="150"
                height="35"
                style={{ objectFit: "contain" }}
              />
            </a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="desktop-nav">
            <Nav className="ms-auto">
              {Object.keys(dropdownContent).map((path) => (
                <div
                  key={path}
                  className="nav-item-wrapper"
                  onMouseEnter={() => handleMouseEnter(path)}
                  onMouseLeave={handleMouseLeave}
                  ref={activeDropdown === path ? dropdownRef : null}
                >
                  <Nav.Link
                    as="button"
                    className={`nav-link-custom ${activePath === path ? 'active' : ''} ${activeDropdown === path ? 'dropdown-active' : ''}`}
                    onClick={(e) => handleNavClick(path, e)}
                  >
                    {path === '/offers' && 'Our offers'}
                    {path === '/why-Lifesecure' && 'Why Lifesecure?'}
                    {path === '/resources' && 'Resources'}
                    {path === '/about-Lifesecure' && 'About Lifesecure'}
                    <span className="dropdown-indicator">▼</span>
                  </Nav.Link>
                  
                  {activeDropdown === path && (
                    <div className={`mega-dropdown ${dropdownContent[path].layout}`}>
                      
                      {/* OFFERS DROPDOWN */}
                      {path === '/offers' && (
                        <div className="offers-dropdown">
                          <div className="dropdown-header">
                            <h2>{dropdownContent[path].title}</h2>
                            <p className="dropdown-subtitle">{dropdownContent[path].subtitle}</p>
                          </div>

                          <div className="offers-grid">
                            {dropdownContent[path].columns.map((column, colIdx) => (
                              <div key={colIdx} className="offers-column">
                                {column.sections.map((section, secIdx) => (
                                  <div key={secIdx} className="dropdown-section">
                                    <h3 className="section-heading">{section.heading}</h3>
                                    <div className="section-items">
                                      {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="dropdown-item">
                                          <span className="item-icon">{item.icon}</span>
                                          <div className="item-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>

                          <div className="bottom-card" style={{ backgroundColor: dropdownContent[path].bottomCard.bgColor }}>
                            <h4>{dropdownContent[path].bottomCard.title}</h4>
                            <p>{dropdownContent[path].bottomCard.description}</p>
                          </div>
                        </div>
                      )}

                      {/* WHY LIFESECURE DROPDOWN */}
                      {path === '/why-Lifesecure' && (
                        <div className="why-Lifesecure-dropdown">
                          
                          <div className="left-section">
                            <h3 className="section-main-heading">{dropdownContent[path].leftSection.heading}</h3>

                            <div className="benefits-list">
                              {dropdownContent[path].leftSection.items.map((item, idx) => (
                                <div key={idx} className="benefit-item">
                                  <div className="benefit-image-placeholder">
                                    <img src={item.image} alt="Benefit" />
                                  </div>

                                  <div className="benefit-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <a href="#" className="link-more">{dropdownContent[path].leftSection.link}</a>
                          </div>

                          <div className="right-section" style={{ backgroundColor: dropdownContent[path].rightSection.bgColor }}>
                            <h3 className="section-main-heading">{dropdownContent[path].rightSection.heading}</h3>
                            <h2 className="section-title">{dropdownContent[path].rightSection.title}</h2>
                            <p className="section-description">{dropdownContent[path].rightSection.description}</p>

                            <div className="section-buttons">
                              {dropdownContent[path].rightSection.buttons.map((btn, idx) => (
                                <button key={idx} className={btn.primary ? 'btn-primary' : 'btn-secondary'}>
                                  {btn.text}
                                </button>
                              ))}
                            </div>

                            <div className="section-image-placeholder">
                              <img src={dropdownContent[path].rightSection.image} alt="App" />
                            </div>
                          </div>

                        </div>
                      )}

                      {/* RESOURCES DROPDOWN */}
                      {path === '/resources' && (
                        <div className="resources-dropdown">
                          <div className="resources-left">
                            {dropdownContent[path].leftSidebar.map((section, secIdx) => (
                              <div key={secIdx} className="dropdown-section">
                                <h3 className="section-heading">{section.heading}</h3>
                                <div className="section-items">
                                  {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="dropdown-item">
                                      <span className="item-icon">{item.icon}</span>
                                      <div className="item-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="resources-right">
                            {dropdownContent[path].rightCards.map((card, idx) => (
                              <div 
                                key={idx}
                                className="resource-card"
                                style={{ backgroundColor: card.bgColor, color: card.textColor || '#2d3436' }}
                              >
                                <div className="card-image-placeholder">
                                  <img src={card.image} alt="Guide" />
                                </div>

                                <h4>{card.title}</h4>
                                <p>{card.description}</p>

                                <button className="btn-download">{card.buttonText}</button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ABOUT LIFESECURE DROPDOWN */}
                      {path === '/about-Lifesecure' && (
                        <div className="about-dropdown">
                          
                          <div className="about-left">
                            <div className="about-card" style={{ backgroundColor: dropdownContent[path].leftCard.bgColor }}>
                              <h3>{dropdownContent[path].leftCard.title}</h3>
                              <p>{dropdownContent[path].leftCard.description}</p>
                              <button className="btn-learn-more">{dropdownContent[path].leftCard.buttonText}</button>

                              <div className="about-image-placeholder">
                                <img src={dropdownContent[path].leftCard.image} alt="Team" />
                              </div>
                            </div>
                          </div>

                          <div className="about-right">
                            {dropdownContent[path].rightSections.map((section, secIdx) => (
                              <div key={secIdx} className="dropdown-section">
                                <h3 className="section-heading">{section.heading}</h3>
                                <div className="section-items">
                                  {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="dropdown-item">
                                      <span className="item-icon">{item.icon}</span>
                                      <div className="item-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                        </div>
                      )}

                    </div>
                  )}

                </div>
              ))}
            </Nav>

            <div className="header-actions">
              <Button as={Link} to="/login" className="btn-login-header">Log in</Button>
              <Link to="/dispatch">
                <Button className="btn-quote-header">Get my quote in 2 minutes</Button>
              </Link>
            </div>

          </Navbar.Collapse>

          {/* MOBILE MENU */}
          <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'show' : ''}`}>
            <div className="mobile-menu-content">
              
              <button className="close-btn" onClick={() => {
                setMobileMenuOpen(false);
                setActiveMobileDropdown(null);
              }}>×</button>

              <div className="mobile-nav-list">
                {Object.keys(dropdownContent).map((path) => (
                  <div key={path} className="mobile-nav-item">
                    <button 
                      className="mobile-nav-link"
                      onClick={() => handleMobileNavClick(path)}
                    >
                      {path === '/offers' && 'Our offers'}
                      {path === '/why-Lifesecure' && 'Why Lifesecure?'}
                      {path === '/resources' && 'Resources'}
                      {path === '/about-Lifesecure' && 'About Lifesecure'}
                      <span className="mobile-dropdown-indicator">▼</span>
                    </button>
                    
                    {activeMobileDropdown === path && renderMobileDropdown(path)}
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