import React, { useState } from "react";
import "./Dispatch.css";

const steps = ["Situation", "Health", "Estimate", "Subscription"];

const Dispatch = () => {
  const [step, setStep] = useState(0);

  const listData = {
    0: [
      { title: "Real estate", code: 1527 },
      { title: "Trade in sporting goods & leisure equipment", code: 1557 },
      { title: "Building caretakers, concierges & employees", code: 1043 },
      { title: "Hotels, cafés & restaurants", code: 1979 },
    ],

    1: [
      { title: "No health concerns", code: "✔" },
      { title: "Existing chronic illness", code: "⚕" },
      { title: "Pregnant or planning", code: "👶" },
      { title: "Recent medical treatment", code: "🏥" },
    ],

    2: [
      { title: "Below 2000 AED income", code: "Basic" },
      { title: "2000 – 6000 AED", code: "Standard" },
      { title: "6000+ AED", code: "Premium" },
    ],

    3: [
      { title: "Monthly Subscription", code: "AED 149" },
      { title: "Quarterly Subscription", code: "AED 390" },
      { title: "Yearly Subscription", code: "AED 1499" },
    ],
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="wizard-main">

      {/* TOP NAV */}
      <div className="wizard-nav">
        {step > 0 && (
          <span className="back-button" onClick={handleBack}>
            ← Back
          </span>
        )}

        <div className="wizard-tabs">
          {steps.map((s, i) => (
            <span className={i === step ? "wizard-tab active" : "wizard-tab"} key={i}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* TITLES */}
      <h1 className="wizard-title">
        {step === 0 && "We are not 100% certain about your collective agreement."}
        {step === 1 && "Tell us about your health situation"}
        {step === 2 && "Help us estimate your income range"}
        {step === 3 && "Choose your subscription plan"}
      </h1>

      <p className="wizard-sub">Can you help us?</p>

      {/* LIST */}
      <div className="wizard-list">
        {listData[step].map((item, idx) => (
          <div className="wizard-card" key={idx} onClick={handleNext}>
            <div className="wizard-card-text">
              <h4>{item.title}</h4>
              <span className="wizard-code">{item.code}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dispatch;
