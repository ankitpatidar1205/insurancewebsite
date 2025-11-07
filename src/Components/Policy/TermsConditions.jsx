import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5 mt-5">
          <Col lg={8} className="text-center">
            <h6 className="display-4 fw-bold fs-2 mt-4 mb-3">TERMS OF USE (TERMS & CONDITIONS)</h6>

          </Col>
        </Row>

        {/* Introduction */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">1. Introduction</h2>
                <p className="text-muted">
                  Welcome to Offeriyo ("we," "our," "us").
                  Offeriyo is a digital platform designed to connect local shop owners with customers nearby, helping businesses showcase their offers, deals, and schemes online while allowing customers to easily discover and visit those shops.
                </p>
                <p className="text-muted">
                  By using Offeriyo's app, website, or services, you agree to comply with and be bound by the following Terms & Conditions.
                  If you do not agree with these terms, please do not access or use the Offeriyo platform.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Definitions */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">2. Definition</h2>
                <p className="mb-2"><strong>"Platform"</strong> refers to the Offeriyo mobile app, website, and associated services.</p>
                <p className="mb-2"><strong>"User"</strong> means any person accessing Offeriyo, including both shop owners and customers.</p>
                <p className="mb-2"><strong>"Shop Owner"</strong> means a business owner or merchant who registers to list their shop and offers.</p>
                <p className="mb-2"><strong>"Customer"</strong> means any person using Offeriyo to explore shops or offers.</p>
                <p className="mb-2"><strong>"Content"</strong> means all text, images, offers, deals, shop data, or information uploaded by users.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Eligibility */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">3. Eligibility</h2>
                <p className="text-muted">
                  You must be at least 18 years old to use Offeriyo.
                  By registering, you confirm that all information provided is accurate and that you are legally authorized to represent your business (for shop owners).
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Use of the Platform */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">4. Use of the Platform</h2>
                
                <h4 className="h5 mb-3">For Shop Owners:</h4>
                <ul>
                  <li>You may create a digital profile for your shop and post legitimate offers, deals, or schemes.</li>
                  <li>You must ensure all content shared is accurate, truthful, and not misleading.</li>
                  <li>You agree not to post any false offers, counterfeit products, or information violating applicable laws.</li>
                  <li>Offeriyo is not responsible for customer interactions, payments, or disputes that occur outside the platform.</li>
                </ul>
                
                <h4 className="h5 mb-3 mt-4">For Customers:</h4>
                <ul>
                  <li>You may browse shops, offers, and promotions available near you.</li>
                  <li>You understand that Offeriyo does not sell, deliver, or guarantee any product listed by shops.</li>
                  <li>All purchases and interactions happen directly between you and the shop owner.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Platform Responsibility */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">5. Platform Responsibility</h2>
                <p className="text-muted mb-3">
                  Offeriyo acts only as a digital connector between shop owners and customers.
                  We do not:
                </p>
                <ul>
                  <li>Own or sell any products listed by shop owners.</li>
                  <li>Guarantee the accuracy, availability, or validity of offers posted.</li>
                  <li>Handle or process any physical or online payments between users.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Responsibilities */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">6. User Responsibilities</h2>
                <p className="text-muted mb-3">All users agree to:</p>
                <ul>
                  <li>Use the platform lawfully and ethically.</li>
                  <li>Avoid posting offensive, false, or illegal content.</li>
                  <li>Respect intellectual property rights and not copy others' listings.</li>
                  <li>Not misuse or attempt to hack, scrape, or duplicate the Offeriyo platform.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Content Ownership */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">7. Content Ownership</h2>
                <p className="text-muted">
                  You (the user) retain ownership of the content you upload (shop details, offers, images, etc.).
                  However, by uploading it, you grant Offeriyo a non-exclusive license to display, promote, and distribute your content within the platform for marketing or user discovery purposes.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Termination */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">8. Termination</h2>
                <p className="text-muted">
                  Offeriyo reserves the right to suspend or delete any account found violating these Terms, posting inappropriate content, or engaging in fraudulent or misleading activities.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">9. Disclaimer</h2>
                <ul>
                  <li>Offeriyo provides its platform "as is" and makes no guarantees regarding performance or reliability.</li>
                  <li>We are not liable for any loss, damage, or dispute arising from use of our platform.</li>
                  <li>Offeriyo does not mediate between customers and shop owners — all transactions are independent.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Limitation of Liability */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">10. Limitation of Liability</h2>
                <p className="text-muted mb-3">In no event shall Offeriyo or its team be liable for:</p>
                <ul>
                  <li>Loss of revenue, data, or profits.</li>
                  <li>Damages caused by third-party links or user actions.</li>
                  <li>Any indirect, incidental, or consequential damages related to use of the platform.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modifications */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">11. Modifications</h2>
                <p className="text-muted">
                  Offeriyo reserves the right to modify these Terms at any time.
                  Continued use of the platform after any updates means you accept the revised Terms.
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

export default TermsConditions;