import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5 mt-4">
          <Col lg={8} className="text-center">
            <h6 className="display-4 fw-bold  fs-2 mt-4 mb-3">Privacy Policy</h6>
          </Col>
        </Row>

        {/* Introduction */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">Introduction</h2>
                <p className="text-muted">
                  Welcome to Offeriyo. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  and use our services and tell you about your privacy rights and how the law protects you.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Information We Collect */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">1. Information We Collect</h2>
                
                <h5 className="fw-bold mb-3">📋 Personal Information:</h5>
                <ul className="mb-4">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Shop information and business details (for shop owners)</li>
                  <li>Location data to provide hyperlocal offers</li>
                  <li>Account credentials and preferences</li>
                </ul>
                
                <h5 className="fw-bold mb-3">💻 Technical Information:</h5>
                <ul>
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Usage data and app performance metrics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data for hyperlocal offer discovery</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How We Use Your Information */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">2. How We Use Your Information</h2>
                <p className="mb-3">We use your personal information to:</p>
                <ul>
                  <li>✅ Provide and maintain our hyperlocal marketplace services</li>
                  <li>✅ Connect local shop owners with nearby customers</li>
                  <li>✅ Send you notifications about relevant local offers</li>
                  <li>✅ Communicate with you about products, services, and events</li>
                  <li>✅ Monitor and analyze trends and usage to improve our platform</li>
                  <li>✅ Detect, prevent, and address technical issues</li>
                  <li>✅ Fulfill legal and regulatory requirements</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Data Sharing and Disclosure */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">3. Data Sharing and Disclosure</h2>
                <p className="mb-3">We may share your personal information with:</p>
                <ul>
                  <li><strong>🤝 Local Shop Owners:</strong> To connect you with relevant offers in your area</li>
                  <li><strong>🤝 Service Providers:</strong> Third-party companies that provide services on our behalf</li>
                  <li><strong>⚖️ Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>🤝 Business Partners:</strong> With your consent for joint marketing efforts</li>
                </ul>
                <div className="alert alert-info mt-3">
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Note:</strong> We do not sell your personal information to third parties for marketing purposes.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Data Security */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">4. Data Security</h2>
                <p className="mb-3">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul>
                  <li>🔒 SSL encryption for data transmission</li>
                  <li>🖥️ Secure servers and databases</li>
                  <li>🔍 Regular security audits and updates</li>
                  <li>👥 Employee training on data protection</li>
                  <li>🔐 Access controls and authentication systems</li>
                  <li>📍 Secure handling of location data</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Your Rights */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">5. Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul>
                  <li><strong>📂 Access:</strong> Request copies of your personal data</li>
                  <li><strong>✏️ Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>🗑️ Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>📤 Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>❌ Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>⏸️ Restriction:</strong> Request restriction of processing</li>
                  <li><strong>📍 Location Control:</strong> Control how your location data is used</li>
                </ul>
                <div className="alert alert-success mt-3">
                  <i className="bi bi-check-circle me-2"></i>
                  To exercise these rights, please contact us using the information below.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Cookies */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">6. Cookies and Tracking</h2>
                <p className="mb-3">
                  We use cookies and similar tracking technologies to track activity on our service and hold 
                  certain information. You can instruct your browser to refuse all cookies or to indicate when 
                  a cookie is being sent.
                </p>
                <h5 className="fw-bold mb-3">Types of cookies we use:</h5>
                <ul>
                  <li><strong>🔑 Essential Cookies:</strong> Required for the service to function</li>
                  <li><strong>📊 Performance Cookies:</strong> Help us improve our service</li>
                  <li><strong>⚙️ Functional Cookies:</strong> Remember your preferences and location settings</li>
                  <li><strong>📢 Marketing Cookies:</strong> Used for advertising relevant local offers</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Changes to Policy */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">7. Changes to This Policy</h2>
                <p className="mb-3">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
                </p>
                <div className="alert alert-warning">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  You are advised to review this Privacy Policy periodically for any changes.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">8. Contact Information</h2>
                <p className="mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul>
                  <li>📧 Email: OfficialOfferiyo@gmail.com</li>
                  <li>🌐 Website: www.offeriyo.com</li>
                  <li>📍 Office: Indore, Madhya Pradesh, India</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer Note */}
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <p className="text-muted">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;