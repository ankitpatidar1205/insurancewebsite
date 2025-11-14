import React, { useState, useRef, useEffect } from 'react';
import './Stepper.css';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  
  // Total steps
  const totalSteps = 6;
  
  // Step content
  const steps = [
    { id: 1, title: 'Step 1', description: 'Description for the first step', content: 'This is the detailed content for step 1. You can add any information you want here.' },
    { id: 2, title: 'Step 2', description: 'Description for the second step', content: 'This is the detailed content for step 2. When you scroll or click, this step will be displayed.' },
    { id: 3, title: 'Step 3', description: 'Description for the third step', content: 'This is the detailed content for step 3. Continue scrolling or clicking to see the next step.' },
  ];
  
  // Handle mouse wheel event
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (e.deltaY > 0 && activeStep < totalSteps - 1) {
        // Scroll down, go to next step
        setActiveStep(prev => prev + 1);
      } else if (e.deltaY < 0 && activeStep > 0) {
        // Scroll up, go to previous step
        setActiveStep(prev => prev - 1);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [activeStep, totalSteps]);
  
  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && activeStep < totalSteps - 1) {
        setActiveStep(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && activeStep > 0) {
        setActiveStep(prev => prev - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStep, totalSteps]);
  

  
  // Get the visible steps (current, previous, next)
  const getVisibleSteps = () => {
    const visibleSteps = [];
    
    // Add previous step if exists
    if (activeStep > 0) {
      visibleSteps.push({
        ...steps[activeStep - 1],
        position: 'prev'
      });
    }
    
    // Add current step
    visibleSteps.push({
      ...steps[activeStep],
      position: 'current'
    });
    
    // Add next step if exists
    if (activeStep < totalSteps - 1) {
      visibleSteps.push({
        ...steps[activeStep + 1],
        position: 'next'
      });
    }
    
    return visibleSteps;
  };
  
  return (
    <div className="vertical-slider-container" ref={containerRef}>
   
      
      {/* Step content area */}
      <div className="step-content-wrapper">
        <div className="step-slider">
          {getVisibleSteps().map((step) => (
            <div 
              key={step.id} 
              className={`step-card ${step.position}`}
            >
              <div className="step-header">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
              <div className="step-body">
                <p>{step.content}</p>
                <div className="step-visual">
                  <div className={`illustration illustration-${step.id}`}>
                    <span className="step-icon">{step.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    
      
    
    </div>
  );
};

export default Stepper;