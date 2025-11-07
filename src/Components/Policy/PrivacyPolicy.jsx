import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5 mt-4">
          <Col lg={8} className="text-center">
            <h6 className="display-4 fw-bold fs-2 mt-4 mb-3">Privacy Policy</h6>
          
          </Col>
        </Row>

        {/* Introduction */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">1. Introduction</h2>
                <p className="text-muted">
                  At Offeriyo, your privacy matters to us.
                  This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile app or website.
                </p>
                <p className="text-muted">
                  By using Offeriyo, you agree to the practices described in this policy.
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
                <h2 className="h3 mb-3 text-primary">2. Information We Collect</h2>
                <p className="text-muted mb-3">
                  We collect limited information necessary to provide and improve our services.
                </p>
                
                <h5 className="fw-bold mb-3">a. Information You Provide Directly</h5>
                <ul className="mb-4">
                  <li>Name, contact number, email address (for registration).</li>
                  <li>Shop details (name, location, photos, offers, etc.) for shop owners.</li>
                  <li>Feedback, reviews, or queries you submit.</li>
                </ul>
                
                <h5 className="fw-bold mb-3">b. Automatically Collected Information</h5>
                <ul className="mb-4">
                  <li>Device information (type, OS, version, and model).</li>
                  <li>Location data (to show nearby shops and offers).</li>
                  <li>App usage data (how you interact with features).</li>
                </ul>
                
                <h5 className="fw-bold mb-3">c. Cookies & Analytics</h5>
                <p className="text-muted">
                  Offeriyo uses cookies and analytics tools to understand how users interact with our platform and to improve experience quality.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* How We Use Your Information */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">3. How We Use Your Information</h2>
                <p className="text-muted mb-3">We use collected information to:</p>
                <ul>
                  <li>Create and manage user accounts.</li>
                  <li>Display relevant shops and offers based on location.</li>
                  <li>Notify users about new deals, promotions, or platform updates.</li>
                  <li>Communicate important information or support updates.</li>
                  <li>Improve platform performance and user experience.</li>
                </ul>
                <div className="alert alert-info mt-3">
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Note:</strong> We do not sell or rent your personal information to any third party.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Information Sharing */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">4. Information Sharing</h2>
                <p className="text-muted mb-3">We may share limited data only:</p>
                <ul>
                  <li>With service providers who assist us in operating the app (analytics, hosting, etc.).</li>
                  <li>If required by law or court order.</li>
                  <li>To protect Offeriyo's rights, users, or property.</li>
                </ul>
                <p className="text-muted">
                  All shared data is handled securely and only for legitimate operational purposes.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Data Retention */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">5. Data Retention</h2>
                <p className="text-muted">
                  We retain your data only as long as your account remains active or as needed for legal or operational reasons.
                  You can delete your account anytime by contacting our support team.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Security */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">6. Security</h2>
                <p className="text-muted">
                  We use industry-standard encryption and data protection practices to safeguard your personal information.
                  However, no online platform is 100% secure — users are encouraged to protect their login credentials and devices.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Location Access */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">7. Location Access</h2>
                <p className="text-muted">
                  Offeriyo requires access to your location (with permission) to show shops and offers near you.
                  You can disable location access anytime from your phone settings, though it may limit functionality.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third-Party Services */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">8. Third-Party Services</h2>
                <p className="text-muted">
                  Our app may include links or references to third-party websites or apps.
                  Offeriyo is not responsible for their content, privacy practices, or operations.
                  We encourage users to review third-party policies before interacting with them.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Children's Privacy */}
        {/* <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">9. Children's Privacy</h2>
                <p className="text-muted">
                  Offeriyo is not intended for users under the age of 18.
                  We do not knowingly collect data from minors.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        {/* Your Rights */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">9. Your Rights</h2>
                <p className="text-muted mb-3">You have the right to:</p>
                <ul>
                  <li>Access and update your information.</li>
                  <li>Request deletion of your account and data.</li>
                  <li>Opt out of promotional notifications.</li>
                  <li>Withdraw consent to share location data.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Changes to This Policy */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">10. Changes to This Policy</h2>
                <p className="text-muted">
                  Offeriyo may update this Privacy Policy periodically.
                  Any changes will be reflected on this page with an updated "Last Updated" date.
                  Continued use of the platform means you accept the revised policy.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer Note */}
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <p className="text-muted">
              Last updated: November 2025
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;