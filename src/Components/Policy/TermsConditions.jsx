import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page" style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-5 mt-5">
          <Col lg={8} className="text-center">
            <h6 className="display-4 fw-bold fs-2 mt-4 mb-3">Terms & Conditions</h6>
          </Col>
        </Row>

        {/* Introduction */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">Introduction</h2>
                <p className="text-muted">
                  Welcome to Offeriyo - "Har Local Offer Chutki Mai!". These terms and conditions outline the rules 
                  and regulations for the use of Offeriyo's services. By accessing this website and using our services, 
                  we assume you accept these terms and conditions in full. Do not continue to use Offeriyo's website 
                  if you do not accept all of the terms and conditions stated on this page.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* License */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">1. License</h2>
                <p className="mb-3">Unless otherwise stated, Offeriyo and/or its licensors own the intellectual 
                property rights for all material on Offeriyo. All intellectual property rights are reserved.</p>
                <p className="mb-3">You may view and/or print pages from offeriyo.com for your own personal use 
                subject to restrictions set in these terms and conditions.</p>
                <p>You must not:</p>
                <ul>
                  <li>❌ Republish material from offeriyo.com</li>
                  <li>❌ Sell, rent or sub-license material from offeriyo.com</li>
                  <li>❌ Reproduce, duplicate or copy material from offeriyo.com</li>
                  <li>❌ Redistribute content from offeriyo.com</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* User Accounts */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">2. User Accounts</h2>
                <p className="mb-3">When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. Failure to do so constitutes a breach of the Terms.</p>
                <p className="mb-3">You are responsible for safeguarding the password that you use to access the service 
                and for any activities or actions under your password.</p>
                <div className="alert alert-info mt-3">
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Note:</strong> Offeriyo cannot and will not be liable for any loss or damage arising 
                  from your failure to comply with this security obligation.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Shop Owner Terms */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">3. Shop Owner Terms</h2>
                <p className="mb-3">For shop owners using Offeriyo to list their business and offers:</p>
                <ul>
                  <li>🏪 You must be the legitimate owner or authorized representative of the shop</li>
                  <li>📋 All shop information must be accurate and up-to-date</li>
                  <li>🎯 All offers and deals must be genuine and available as listed</li>
                  <li>📍 Your shop location must be accurate for hyperlocal discovery</li>
                  <li>📞 You must respond to customer inquiries in a timely manner</li>
                </ul>
                <p className="mb-3">Offeriyo reserves the right to remove any shop or offer that violates these terms.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Customer Terms */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">4. Customer Terms</h2>
                <p className="mb-3">For customers using Offeriyo to discover local offers:</p>
                <ul>
                  <li>🛍️ You must verify the details of offers directly with the shop before making a purchase</li>
                  <li>📍 You must provide accurate location information for relevant offer discovery</li>
                  <li>📱 You must not misuse the platform to harass or spam shop owners</li>
                  <li>🔄 You must honor the terms and conditions of individual offers as specified by shops</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Offer Terms */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">5. Offer Terms</h2>
                <p className="mb-3">Regarding offers and deals listed on Offeriyo:</p>
                <ul>
                  <li>🎯 All offers are provided directly by local shop owners</li>
                  <li>📅 Offers are subject to availability and may have expiration dates</li>
                  <li>📋 Some offers may have specific terms and conditions set by the shop</li>
                  <li>🔄 Offeriyo is not responsible for the fulfillment of offers or deals</li>
                  <li>💰 Transactions are conducted directly between customers and shop owners</li>
                </ul>
                <div className="alert alert-warning mt-3">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Important:</strong> Offeriyo is a platform to connect local shops with customers and 
                  is not responsible for the quality of products or services provided by individual shops.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Acceptable Use */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">6. Acceptable Use</h2>
                <p className="mb-3">You may use our services for lawful purposes only. You agree not to use the service:</p>
                <ul>
                  <li>❌ In any way that breaches any applicable local, national, or international law</li>
                  <li>❌ To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material</li>
                  <li>❌ To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, 
                  time-bombs, keystroke loggers, spyware, adware or any other harmful programs</li>
                  <li>❌ To impersonate any person or entity or to otherwise misrepresent your affiliation with a person or entity</li>
                  <li>❌ To post false or misleading information about shops or offers</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Intellectual Property */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">7. Intellectual Property</h2>
                <p className="mb-3">All content included on the website, such as text, graphics, logos, images, as well as the 
                compilation thereof, and any software used on the website, is the property of Offeriyo or its suppliers 
                and protected by copyright and other intellectual property laws.</p>
                <p className="mb-3">You may not use any trademarks, service marks, or trade names of Offeriyo without our prior 
                written permission, including "Har Local Offer Chutki Mai!"</p>
                <div className="alert alert-success mt-3">
                  <i className="bi bi-check-circle me-2"></i>
                  <strong>User Content:</strong> By posting content on our platform, you grant us a worldwide, non-exclusive, 
                  royalty-free license to use, reproduce, modify, and display such content.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Limitation of Liability */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">8. Limitation of Liability</h2>
                <p className="mb-3">In no event shall Offeriyo, nor any of its officers, directors and employees, be held liable 
                for anything arising out of or in any way connected with your use of this website whether such liability is 
                under contract, tort or otherwise.</p>
                <p className="mb-3">Offeriyo, including its officers, directors and employees shall not be held liable for any 
                indirect, consequential or special liability arising out of or in any way related to your use of this website.</p>
                <p className="mb-3">Offeriyo is not responsible for the quality of products or services provided by individual 
                shops listed on our platform.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Termination */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">9. Termination</h2>
                <p className="mb-3">We may terminate or suspend your account immediately, without prior notice or liability, for any 
                reason whatsoever, including without limitation if you breach the Terms.</p>
                <p className="mb-3">Upon termination, your right to use the Service will cease immediately. If you wish to terminate 
                your account, you may simply discontinue using the Service.</p>
                <h5 className="fw-bold mb-3">Effect of Termination:</h5>
                <ul>
                  <li>🚫 All rights and licenses granted to you will cease immediately</li>
                  <li>🚫 You will no longer have access to your account or data</li>
                  <li>🚫 Your shop listing and offers will be removed from the platform</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Governing Law */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">10. Governing Law</h2>
                <p className="mb-3">These Terms shall be interpreted and governed by the laws of India, without regard to its 
                conflict of law provisions.</p>
                <p className="mb-3">Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts 
                of Indore, Madhya Pradesh, India.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Changes to Terms */}
        <Row className="justify-content-center mb-4">
          <Col lg={10}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="h3 mb-3 text-primary">11. Changes to These Terms</h2>
                <p className="mb-3">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                  is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <div className="alert alert-warning">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  Your continued use of the Service after the effective date of the revised Terms constitutes acceptance 
                  of the changes.
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
                <h2 className="h3 mb-3 text-primary">12. Contact Information</h2>
                <p className="mb-3">
                  If you have any questions about these Terms & Conditions, please contact us:
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

export default TermsConditions;