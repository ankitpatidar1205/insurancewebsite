import React from 'react';

import './MarmotCTA.css'; // Custom CSS file for exact styling

const MarmotCTA = () => {
  return (
    <div className="marmot-cta-container">
      <div className="text-content">
        <h1 className="main-heading">
          Registration in just a few moments. Satisfaction at every moment.
        </h1>
        <p className="sub-text">
          92% of our members report being satisfied or very satisfied with Lifesecure (May 2025).
        </p>
        <div className="button-group">
          <button className="btn btn-primary btn-quote">
            Get my quote in 2 minutes
          </button>
          <button className="btn btn-outline-primary btn-demo">
            Request a demo
          </button>
        </div>
      </div>
      <div className="marmot-image">
        {/* In a real implementation, you would use an actual image */}
        <div className="marmot-placeholder">
          {/* This would be replaced with the actual marmot image */}
        </div>
      </div>
    </div>
  );
};

export default MarmotCTA;