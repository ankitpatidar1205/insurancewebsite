import React, { useState } from "react";
import { Card, Button, Badge, ProgressBar } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaMapMarkerAlt, FaUser, FaUsers, FaHeartbeat, FaFileContract } from "react-icons/fa";
import "./Dispatch.css";

const Dispatch = () => {
  const [step, setStep] = useState(0);
  const [selectedEmirate, setSelectedEmirate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  const steps = [
    { id: 0, title: "Emirate Selection", icon: <FaMapMarkerAlt /> },
    { id: 1, title: "Product Selection", icon: <FaFileContract /> },
    { id: 2, title: "Category Selection", icon: <FaUsers /> },
    { id: 3, title: "Plan Selection", icon: <FaHeartbeat /> }
  ];

  const emirates = [
    { name: "NE", code: "NE", description: "Northern Emirates" },
    { name: "DUBAI", code: "DXB", description: "Dubai" },
    { name: "ABU DHABI/Al AIN", code: "AUH", description: "Abu Dhabi & Al Ain" }
  ];

  const products = {
    NE: [
      { id: "product1", name: "Product 1", price: "AED 1500/month", features: ["Basic Coverage", "24/7 Support", "Emergency Care"] },
      { id: "product2", name: "Product 2", price: "AED 2500/month", features: ["Enhanced Coverage", "Priority Support", "Family Care"] },
      { id: "product3", name: "Product 3", price: "AED 3500/month", features: ["Premium Coverage", "VIP Support", "Complete Healthcare"] }
    ]
  };

  const categories = {
    DUBAI: [
      { 
        type: "Self", 
        options: [
          { id: "lsb", name: "LSB", description: "Low Salary Basic" },
          { id: "nsb", name: "NSB", description: "Normal Salary Basic" }
        ]
      },
      { 
        type: "Dependence", 
        options: [
          { id: "spouse", name: "Spouse", description: "Spouse Coverage" },
          { id: "children", name: "Children", description: "Children Coverage" },
          { id: "parents", name: "Parents", description: "Parents Coverage" }
        ]
      }
    ]
  };

  const plans = [
    { id: "basic", name: "Basic Plan", price: "AED 299/month", badge: "Popular" },
    { id: "enhanced", name: "Enhanced Plan", price: "AED 499/month", badge: "Recommended" },
    { id: "premium", name: "Premium Plan", price: "AED 799/month", badge: "Best Value" }
  ];

  const handleEmirateSelect = (emirate) => {
    setSelectedEmirate(emirate.code);
    if (emirate.code === "NE") {
      setStep(1);
    } else if (emirate.code === "DXB") {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product.id);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.id);
    setStep(3);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan.id);
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
    setSelectedEmirate("");
    setSelectedProduct("");
    setSelectedCategory("");
    setSelectedPlan("");
    setShowComparison(false);
  };

  const progressPercentage = ((step + 1) / steps.length) * 100;

  return (
    <div className="wizard-container" style={{marginTop:"120px"}}>
      <div className="wizard-main">
        {/* TOP NAVIGATION */}
        <div className="wizard-nav">
          {step > 0 && (
            <span className="back-button" onClick={handleBack}>
              <FaArrowLeft /> Back
            </span>
          )}

          <div className="wizard-tabs">
            {steps.map((s, i) => (
              <span 
                className={`wizard-tab ${i === step ? "active" : ""} ${i < step ? "completed" : ""}`} 
                key={i}
                onClick={() => i < step && setStep(i)}
              >
                {i < step ? <FaCheckCircle /> : s.icon}
                <span className="tab-text">{s.title}</span>
              </span>
            ))}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="progress-container">
          <ProgressBar now={progressPercentage} className="wizard-progress" />
          <div className="progress-text">Step {step + 1} of {steps.length}</div>
        </div>

        {/* STEP CONTENT */}
        <div className="wizard-content">
          {/* STEP 0: EMIRATE SELECTION */}
          {step === 0 && (
            <>
              <h1 className="wizard-title">Emirate of Visa Issuance</h1>
              <p className="wizard-sub">Select emirate where your visa was issued</p>
              
              <div className="wizard-list">
                {emirates.map((emirate, idx) => (
                  <div 
                    className={`wizard-card ${selectedEmirate === emirate.code ? "selected" : ""}`} 
                    key={idx} 
                    onClick={() => handleEmirateSelect(emirate)}
                  >
                    <div className="wizard-card-content">
                      <div className="wizard-card-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="wizard-card-text">
                        <h4>{emirate.name}</h4>
                        <span className="wizard-code">{emirate.description}</span>
                      </div>
                      <div className="wizard-card-arrow">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 1: PRODUCT SELECTION (FOR NE) */}
          {step === 1 && selectedEmirate === "NE" && (
            <>
              <h1 className="wizard-title">Select Your Product</h1>
              <p className="wizard-sub">Choose product that best suits your needs</p>
              
              <div className="wizard-list">
                {products.NE.map((product, idx) => (
                  <div 
                    className={`wizard-card product-card ${selectedProduct === product.id ? "selected" : ""}`} 
                    key={idx} 
                    onClick={() => handleProductSelect(product)}
                  >
                    <div className="wizard-card-content">
                      <div className="wizard-card-icon">
                        <FaFileContract />
                      </div>
                      <div className="wizard-card-text">
                        <h4>{product.name}</h4>
                        <span className="wizard-price">{product.price}</span>
                        <div className="product-features">
                          {product.features.map((feature, i) => (
                            <div key={i} className="feature-item">
                              <FaCheckCircle className="feature-icon" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div 
                  className={`wizard-card comparison-card ${showComparison ? "active" : ""}`} 
                  onClick={() => setShowComparison(!showComparison)}
                >
                  <div className="wizard-card-content">
                    <div className="wizard-card-icon">
                      <FaFileContract />
                    </div>
                    <div className="wizard-card-text">
                      <h4>Show Comparison</h4>
                      <span className="wizard-code">Compare all products side by side</span>
                    </div>
                  </div>
                </div>

                {showComparison && (
                  <div className="comparison-table">
                    <h3>Product Comparison</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Features</th>
                          <th>Product 1</th>
                          <th>Product 2</th>
                          <th>Product 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Basic Coverage</td>
                          <td><FaCheckCircle className="text-success" /></td>
                          <td><FaCheckCircle className="text-success" /></td>
                          <td><FaCheckCircle className="text-success" /></td>
                        </tr>
                        <tr>
                          <td>Priority Support</td>
                          <td><span className="text-danger">✗</span></td>
                          <td><FaCheckCircle className="text-success" /></td>
                          <td><FaCheckCircle className="text-success" /></td>
                        </tr>
                        <tr>
                          <td>VIP Support</td>
                          <td><span className="text-danger">✗</span></td>
                          <td><span className="text-danger">✗</span></td>
                          <td><FaCheckCircle className="text-success" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {selectedProduct && (
                  <div className="wizard-actions">
                    <Button variant="primary" size="lg" onClick={() => setStep(3)}>
                      Sold The Product and Proceed <FaArrowRight />
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* STEP 2: CATEGORY SELECTION (FOR DUBAI) */}
          {step === 2 && selectedEmirate === "DXB" && (
            <>
              <h1 className="wizard-title">Select Your Category</h1>
              <p className="wizard-sub">Choose between Self or Dependence coverage</p>
              
              <div className="wizard-list">
                {categories.DUBAI.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="category-title">{category.type}</h3>
                    <div className="category-options">
                      {category.options.map((option, optIdx) => (
                        <div 
                          className={`wizard-card category-card ${selectedCategory === option.id ? "selected" : ""}`} 
                          key={optIdx} 
                          onClick={() => handleCategorySelect(option)}
                        >
                          <div className="wizard-card-content">
                            <div className="wizard-card-icon">
                              {category.type === "Self" ? <FaUser /> : <FaUsers />}
                            </div>
                            <div className="wizard-card-text">
                              <h4>{option.name}</h4>
                              <span className="wizard-code">{option.description}</span>
                            </div>
                            <div className="wizard-card-arrow">
                              <FaArrowRight />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 3: PLAN SELECTION */}
          {step === 3 && (
            <>
              <h1 className="wizard-title">Plan Selection</h1>
              <p className="wizard-sub">Choose your insurance plan</p>
              
              <div className="wizard-list">
                {plans.map((plan, idx) => (
                  <div 
                    className={`wizard-card plan-card ${selectedPlan === plan.id ? "selected" : ""}`} 
                    key={idx} 
                    onClick={() => handlePlanSelect(plan)}
                  >
                    <div className="wizard-card-content">
                      <div className="wizard-card-icon">
                        <FaHeartbeat />
                      </div>
                      <div className="wizard-card-text">
                        <div className="plan-header">
                          <h4>{plan.name}</h4>
                          {plan.badge && <Badge bg="secondary" className="plan-badge">{plan.badge}</Badge>}
                        </div>
                        <span className="wizard-price">{plan.price}</span>
                        <div className="plan-features">
                          <div className="feature-item">
                            <FaCheckCircle className="feature-icon" />
                            Complete Medical Coverage
                          </div>
                          <div className="feature-item">
                            <FaCheckCircle className="feature-icon" />
                            24/7 Emergency Support
                          </div>
                          <div className="feature-item">
                            <FaCheckCircle className="feature-icon" />
                            Worldwide Coverage
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedPlan && (
                <div className="wizard-actions">
                  <Button variant="success" size="lg" onClick={handleReset}>
                    Complete Application <FaCheckCircle />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dispatch;