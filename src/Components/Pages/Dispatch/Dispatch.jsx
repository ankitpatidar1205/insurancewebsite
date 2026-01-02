import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dispatch = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userType, setUserType] = useState('');
  const [region, setRegion] = useState('');
  const [planType, setPlanType] = useState('');
  const [formData, setFormData] = useState({
    customerInfo: {
      name: '',
      nationality: '',
      gender: '',
      dateOfBirth: '',
      relation: '',
      maritalStatus: '',
      policyStart: ''
    },
    contactDetails: {
      country: 'United Arab Emirates',
      city: '',
      mobile: '00971',
      email: '',
      address: ''
    },
    smeInfo: {
      companyName: '',
      businessNature: '',
      emirate: '',
      city: '',
      brokerContact: '',
      contactNumber: '',
      email: '',
      holdingBroker: ''
    },
    familyDetails: []
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamily = [...formData.familyDetails];
    if (!updatedFamily[index]) {
      updatedFamily[index] = {};
    }
    updatedFamily[index][field] = value;
    setFormData(prev => ({
      ...prev,
      familyDetails: updatedFamily
    }));
  };

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyDetails: [...prev.familyDetails, {}]
    }));
  };

  const removeFamilyMember = (index) => {
    setFormData(prev => ({
      ...prev,
      familyDetails: prev.familyDetails.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('success');
  };

  const resetForm = () => {
    setCurrentStep('welcome');
    setUserType('');
    setRegion('');
    setPlanType('');
    setFormData({
      customerInfo: {
        name: '',
        nationality: '',
        gender: '',
        dateOfBirth: '',
        relation: '',
        maritalStatus: '',
        policyStart: ''
      },
      contactDetails: {
        country: 'United Arab Emirates',
        city: '',
        mobile: '00971',
        email: '',
        address: ''
      },
      smeInfo: {
        companyName: '',
        businessNature: '',
        emirate: '',
        city: '',
        brokerContact: '',
        contactNumber: '',
        email: '',
        holdingBroker: ''
      },
      familyDetails: []
    });
  };

  // Function to go back to the previous step
  const goBack = () => {
    if (currentStep === 'selfForm' || currentStep === 'familyForm') {
      setCurrentStep('planType');
    } else if (currentStep === 'smeForm') {
      setCurrentStep('region');
    } else if (currentStep === 'planType') {
      setCurrentStep('region');
    } else if (currentStep === 'region') {
      setCurrentStep('welcome');
    }
  };

  // Welcome Screen
  if (currentStep === 'welcome') {
    return (
      <div className="min-vh-100 position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-full animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-full animate-float-delay"></div>
          <div className="position-absolute top-1/2 start-1/3 w-80 h-80 bg-white opacity-5 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="position-relative z-1 d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
          <div className="text-center mb-5 animate-fade-in">
            <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle p-4 mb-4" style={{backdropFilter: 'blur(10px)'}}>
              <i className="bi bi-shield-check-fill text-white fs-1"></i>
            </div>
            <h3 className=" fw-bold text-white mb-2 mt-2">Welcome to LifeSecure</h3>
            <p className="fs-4 text-white-50 mt-3">National Life & General Insurance Company</p>
          </div>
          
          <div className="row g-4 w-100" style={{maxWidth: '900px'}}>
            <div className="col-md-6 animate-slide-up">
              <div 
                onClick={() => {
                  setUserType('individual');
                  setCurrentStep('region');
                }}
                className="card h-100 border-0 shadow-xl cursor-pointer transform-hover"
                style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', transition: 'all 0.3s ease'}}
              >
                <div className="card-body text-center p-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style={{width: '120px', height: '120px'}}>
                    <i className="bi bi-person-shield-fill fs-1 text-primary"></i>
                  </div>
                  <h3 className="card-title h3 fw-bold text-dark mb-3">Individual</h3>
                  <p className="card-text text-muted">Personal insurance solutions tailored to your needs</p>
                  <div className="mt-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                      <i className="bi bi-arrow-right-circle me-2"></i>Get Started
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 animate-slide-up-delay">
              <div 
                onClick={() => {
                  setUserType('sme');
                  setCurrentStep('region');
                }}
                className="card h-100 border-0 shadow-xl cursor-pointer transform-hover"
                style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', transition: 'all 0.3s ease'}}
              >
                <div className="card-body text-center p-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style={{width: '120px', height: '120px'}}>
                    <i className="bi bi-building fs-1 text-primary"></i>
                  </div>
                  <h3 className="card-title h3 fw-bold text-dark mb-3">SME</h3>
                  <p className="card-text text-muted">Comprehensive insurance for small and medium enterprises</p>
                  <div className="mt-4">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                      <i className="bi bi-arrow-right-circle me-2"></i>Get Started
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="position-absolute bottom-0 start-0 w-100 text-center py-3 text-white-50">
          <small>Copyright @ 2026 LIVA. All rights reserved</small>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-slow {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(20px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float 8s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-slide-up-delay {
            animation: slide-up 0.8s ease-out;
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }
          
          .transform-hover:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
          }
        `}</style>
      </div>
    );
  }

  // Region Selection Screen
  if (currentStep === 'region') {
    return (
      <div className="min-vh-100 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1 p-4">
          {/* PROMINENT BACK BUTTON */}
          <div className="d-flex justify-content-start mb-4">
            <button 
              onClick={goBack}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              <span>Back</span>
            </button>
          </div>
          
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 'calc(100vh - 120px)'}}>
            <div className="text-center mb-5">
           
              <h2 className="fw-bold text-white mb-3">Select Your Region</h2>
              <p className="text-white-50">Choose your region to continue with the application process</p>
            </div>
            
            <div className="row g-4 w-100" style={{maxWidth: '900px'}}>
              {['Dubai', 'Abu Dhabi', 'Northern Emirates'].map((regionOption, index) => (
                <div className="col-md-4 animate-slide-up" key={regionOption} style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'both'}}>
                  <div 
                    onClick={() => {
                      setRegion(regionOption);
                      if (userType === 'individual') {
                        setCurrentStep('planType');
                      } else {
                        setCurrentStep('smeForm');
                      }
                    }}
                    className="card h-100 border-0 shadow-xl cursor-pointer transform-hover"
                    style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', transition: 'all 0.3s ease'}}
                  >
                    <div className="card-body text-center p-4">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style={{width: '80px', height: '80px'}}>
                        <i className="bi bi-geo-alt-fill fs-2 text-primary"></i>
                      </div>
                      <h4 className="card-title fw-bold text-dark">{regionOption}</h4>
                      <div className="mt-3">
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                          <i className="bi bi-check-circle me-2"></i>Select
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .transform-hover:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
          }
        `}</style>
      </div>
    );
  }

  // Plan Type Selection Screen
  if (currentStep === 'planType') {
    return (
      <div className="min-vh-100 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1 p-4">
          {/* PROMINENT BACK BUTTON */}
          <div className="d-flex justify-content-start mb-4">
            <button 
              onClick={goBack}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              <span>Back</span>
            </button>
          </div>
          
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 'calc(100vh - 120px)'}}>
            <div className="text-center mb-5">
      
              <h2 className="fw-bold text-white mb-3 mt-4">Select Plan Type</h2>
              <p className="text-white-50">Choose the insurance plan that best fits your needs</p>
            </div>
            
            <div className="row g-4 w-100" style={{maxWidth: '800px'}}>
              <div className="col-md-6 animate-slide-up">
                <div 
                  onClick={() => {
                    setPlanType('self');
                    setCurrentStep('selfForm');
                  }}
                  className="card h-100 border-0 shadow-xl cursor-pointer transform-hover"
                  style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', transition: 'all 0.3s ease'}}
                >
                  <div className="card-body text-center p-5">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style={{width: '100px', height: '100px'}}>
                      <i className="bi bi-person-fill fs-1 text-primary"></i>
                    </div>
                    <h3 className="card-title h4 fw-bold text-dark mb-3">Self</h3>
                    <p className="card-text text-muted">Insurance coverage for yourself</p>
                    <div className="mt-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                        <i className="bi bi-check-circle me-2"></i>Select
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 animate-slide-up-delay">
                <div 
                  onClick={() => {
                    setPlanType('family');
                    setCurrentStep('familyForm');
                  }}
                  className="card h-100 border-0 shadow-xl cursor-pointer transform-hover"
                  style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px', transition: 'all 0.3s ease'}}
                >
                  <div className="card-body text-center p-5">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style={{width: '100px', height: '100px'}}>
                      <i className="bi bi-people-fill fs-1 text-primary"></i>
                    </div>
                    <h3 className="card-title h4 fw-bold text-dark mb-3">Family</h3>
                    <p className="card-text text-muted">Insurance coverage for your family</p>
                    <div className="mt-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                        <i className="bi bi-check-circle me-2"></i>Select
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out;
          }
          
          .animate-slide-up-delay {
            animation: slide-up 0.8s ease-out;
            animation-delay: 0.2s;
            animation-fill-mode: both;
          }
          
          .transform-hover:hover {
            transform: translateY(-10px) !important;
            box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
          }
        `}</style>
      </div>
    );
  }

  // Self Form
  if (currentStep === 'selfForm') {
    return (
      <div className="min-vh-100 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1 p-4">
          {/* PROMINENT BACK BUTTON */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button 
              onClick={goBack}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              <span>Back</span>
            </button>
            <button 
              onClick={() => setCurrentStep('welcome')}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-house-door me-2"></i>
              <span>Home</span>
            </button>
          </div>
          
          <div className="d-flex justify-content-center">
            <div className="w-100" style={{maxWidth: '1000px'}}>
             
              <form onSubmit={handleSubmit} className="card border-0 shadow-xl mt-4" style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px'}}>
                <div className="card-body p-3">
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                        <i className="bi bi-person-fill text-primary"></i>
                      </div>
                      <h5 className="fw-normal text-dark mb-0">Customer Information</h5>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-person me-2 text-primary"></i>Name
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.name}
                          onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-flag me-2 text-primary"></i>Nationality
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.nationality}
                          onChange={(e) => handleInputChange('customerInfo', 'nationality', e.target.value)}
                          required
                        >
                          <option value="">Select Nationality</option>
                          <option value="UAE">UAE</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-gender-ambiguous me-2 text-primary"></i>Gender
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.gender}
                          onChange={(e) => handleInputChange('customerInfo', 'gender', e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-calendar-date me-2 text-primary"></i>Date of Birth
                        </label>
                        <input 
                          type="date" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.dateOfBirth}
                          onChange={(e) => handleInputChange('customerInfo', 'dateOfBirth', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-people me-2 text-primary"></i>Relation
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.relation}
                          onChange={(e) => handleInputChange('customerInfo', 'relation', e.target.value)}
                          required
                        >
                          <option value="">Select Relation</option>
                          <option value="Self">Self</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Child">Child</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-heart me-2 text-primary"></i>Marital Status
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.maritalStatus}
                          onChange={(e) => handleInputChange('customerInfo', 'maritalStatus', e.target.value)}
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-calendar-check me-2 text-primary"></i>Policy Start
                        </label>
                        <input 
                          type="date" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.policyStart}
                          onChange={(e) => handleInputChange('customerInfo', 'policyStart', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                        <i className="bi bi-telephone-fill text-primary"></i>
                      </div>
                      <h5 className="fw-normal text-dark mb-0">Contact Details</h5>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-geo-alt me-2 text-primary"></i>Country
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.country}
                          onChange={(e) => handleInputChange('contactDetails', 'country', e.target.value)}
                          required
                        >
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-building me-2 text-primary"></i>City
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.city}
                          onChange={(e) => handleInputChange('contactDetails', 'city', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-phone me-2 text-primary"></i>Mobile Number
                        </label>
                        <input 
                          type="tel" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.mobile}
                          onChange={(e) => handleInputChange('contactDetails', 'mobile', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-envelope me-2 text-primary"></i>Email
                        </label>
                        <input 
                          type="email" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.email}
                          onChange={(e) => handleInputChange('contactDetails', 'email', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-8">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-house-door me-2 text-primary"></i>Complete Address
                        </label>
                        <textarea 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px'}}
                          rows="2"
                          value={formData.contactDetails.address}
                          onChange={(e) => handleInputChange('contactDetails', 'address', e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-end">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-4"
                      style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                    >
                      <i className="bi bi-send me-2"></i>
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>
      </div>
    );
  }

  // Family Form
  if (currentStep === 'familyForm') {
    return (
      <div className="min-vh-100 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1 p-4">
          {/* PROMINENT BACK BUTTON */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button 
              onClick={goBack}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              <span>Back</span>
            </button>
            <button 
              onClick={() => setCurrentStep('welcome')}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-house-door me-2"></i>
              <span>Home</span>
            </button>
          </div>
          
          <div className="d-flex justify-content-center">
            <div className="w-100" style={{maxWidth: '1000px'}}>
              <div className="text-center mb-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle p-3 mb-3" style={{backdropFilter: 'blur(10px)'}}>
                  <i className="bi bi-people-fill text-white fs-2"></i>
                </div>
                <h2 className="fw-bold text-white mb-3">Family Insurance Application</h2>
                <p className="text-white-50">Please fill in the details below to proceed with your application</p>
              </div>
              
              <form onSubmit={handleSubmit} className="card border-0 shadow-xl" style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px'}}>
                <div className="card-body p-3">
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                        <i className="bi bi-person-badge-fill text-primary"></i>
                      </div>
                      <h5 className="fw-normal text-dark mb-0">Customer Information</h5>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-person me-2 text-primary"></i>Name
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.name}
                          onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-flag me-2 text-primary"></i>Nationality
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.nationality}
                          onChange={(e) => handleInputChange('customerInfo', 'nationality', e.target.value)}
                          required
                        >
                          <option value="">Select Nationality</option>
                          <option value="UAE">UAE</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-gender-ambiguous me-2 text-primary"></i>Gender
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.gender}
                          onChange={(e) => handleInputChange('customerInfo', 'gender', e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-calendar-date me-2 text-primary"></i>Date of Birth
                        </label>
                        <input 
                          type="date" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.dateOfBirth}
                          onChange={(e) => handleInputChange('customerInfo', 'dateOfBirth', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-people me-2 text-primary"></i>Relation
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.relation}
                          onChange={(e) => handleInputChange('customerInfo', 'relation', e.target.value)}
                          required
                        >
                          <option value="">Select Relation</option>
                          <option value="Self">Self</option>
                          <option value="Spouse">Spouse</option>
                          <option value="Parent">Parent</option>
                          <option value="Child">Child</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-heart me-2 text-primary"></i>Marital Status
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.maritalStatus}
                          onChange={(e) => handleInputChange('customerInfo', 'maritalStatus', e.target.value)}
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-calendar-check me-2 text-primary"></i>Policy Start
                        </label>
                        <input 
                          type="date" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.customerInfo.policyStart}
                          onChange={(e) => handleInputChange('customerInfo', 'policyStart', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                        <i className="bi bi-telephone-fill text-primary"></i>
                      </div>
                      <h5 className="fw-normal text-dark mb-0">Contact Details</h5>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-geo-alt me-2 text-primary"></i>Country
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.country}
                          onChange={(e) => handleInputChange('contactDetails', 'country', e.target.value)}
                          required
                        >
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-building me-2 text-primary"></i>City
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.city}
                          onChange={(e) => handleInputChange('contactDetails', 'city', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-phone me-2 text-primary"></i>Mobile Number
                        </label>
                        <input 
                          type="tel" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.mobile}
                          onChange={(e) => handleInputChange('contactDetails', 'mobile', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-envelope me-2 text-primary"></i>Email
                        </label>
                        <input 
                          type="email" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.contactDetails.email}
                          onChange={(e) => handleInputChange('contactDetails', 'email', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-8">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-house-door me-2 text-primary"></i>Complete Address
                        </label>
                        <textarea 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px'}}
                          rows="2"
                          value={formData.contactDetails.address}
                          onChange={(e) => handleInputChange('contactDetails', 'address', e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-flex align-items-center">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                          <i className="bi bi-people-fill text-primary"></i>
                        </div>
                        <h5 className="fw-normal text-dark mb-0">Family Members</h5>
                      </div>
                      <button 
                        type="button"
                        onClick={addFamilyMember}
                        className="btn btn-primary btn-sm"
                        style={{borderRadius: '8px', fontSize: '12px', height: '32px'}}
                      >
                        <i className="bi bi-plus-circle me-2"></i>
                        Add Member
                      </button>
                    </div>
                    
                    {formData.familyDetails.length === 0 ? (
                      <div className="alert alert-info border-0 shadow-sm" style={{borderRadius: '8px', background: 'rgba(13, 202, 240, 0.1)', fontSize: '12px'}}>
                        <i className="bi bi-info-circle me-2"></i>
                        No family members added yet. Click "Add Member" to add family members.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {formData.familyDetails.map((member, index) => (
                          <div key={index} className="card border shadow-sm" style={{borderRadius: '12px'}}>
                            <div className="card-header bg-light d-flex justify-content-between align-items-center py-2 px-3" style={{borderRadius: '12px 12px 0 0'}}>
                              <div className="d-flex align-items-center">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-2" style={{width: '24px', height: '24px'}}>
                                  <i className="bi bi-person-fill text-primary" style={{fontSize: '12px'}}></i>
                                </div>
                                <h5 className="mb-0 fw-semibold" style={{fontSize: '13px'}}>Family Member {index + 1}</h5>
                              </div>
                              <button 
                                type="button"
                                onClick={() => removeFamilyMember(index)}
                                className="btn btn-sm btn-outline-danger"
                                style={{borderRadius: '6px', fontSize: '11px', height: '28px', padding: '0 8px'}}
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                            <div className="card-body p-3">
                              <div className="row g-2">
                                <div className="col-md-4">
                                  <label className="form-label fw-semibold" style={{fontSize: '11px'}}>
                                    <i className="bi bi-person me-2 text-primary"></i>Name
                                  </label>
                                  <input 
                                    type="text" 
                                    className="form-control border-0 shadow-sm"
                                    style={{borderRadius: '6px', fontSize: '12px', height: '34px'}}
                                    value={member.name || ''}
                                    onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)}
                                    required
                                  />
                                </div>
                                
                                <div className="col-md-4">
                                  <label className="form-label fw-semibold" style={{fontSize: '11px'}}>
                                    <i className="bi bi-calendar-date me-2 text-primary"></i>Date of Birth
                                  </label>
                                  <input 
                                    type="date" 
                                    className="form-control border-0 shadow-sm"
                                    style={{borderRadius: '6px', fontSize: '12px', height: '34px'}}
                                    value={member.dateOfBirth || ''}
                                    onChange={(e) => handleFamilyMemberChange(index, 'dateOfBirth', e.target.value)}
                                    required
                                  />
                                </div>
                                
                                <div className="col-md-4">
                                  <label className="form-label fw-semibold" style={{fontSize: '11px'}}>
                                    <i className="bi bi-gender-ambiguous me-2 text-primary"></i>Gender
                                  </label>
                                  <select 
                                    className="form-select border-0 shadow-sm"
                                    style={{borderRadius: '6px', fontSize: '12px', height: '34px'}}
                                    value={member.gender || ''}
                                    onChange={(e) => handleFamilyMemberChange(index, 'gender', e.target.value)}
                                    required
                                  >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                                
                                <div className="col-md-4">
                                  <label className="form-label fw-semibold" style={{fontSize: '11px'}}>
                                    <i className="bi bi-people me-2 text-primary"></i>Relation
                                  </label>
                                  <select 
                                    className="form-select border-0 shadow-sm"
                                    style={{borderRadius: '6px', fontSize: '12px', height: '34px'}}
                                    value={member.relation || ''}
                                    onChange={(e) => handleFamilyMemberChange(index, 'relation', e.target.value)}
                                    required
                                  >
                                    <option value="">Select Relation</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Son">Son</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                                
                                <div className="col-md-4">
                                  <label className="form-label fw-semibold" style={{fontSize: '11px'}}>
                                    <i className="bi bi-heart me-2 text-primary"></i>Marital Status
                                  </label>
                                  <select 
                                    className="form-select border-0 shadow-sm"
                                    style={{borderRadius: '6px', fontSize: '12px', height: '34px'}}
                                    value={member.maritalStatus || ''}
                                    onChange={(e) => handleFamilyMemberChange(index, 'maritalStatus', e.target.value)}
                                    required
                                  >
                                    <option value="">Select Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="d-flex justify-content-end">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-4"
                      style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                    >
                      <i className="bi bi-send me-2"></i>
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>
      </div>
    );
  }

  // SME Form
  if (currentStep === 'smeForm') {
    return (
      <div className="min-vh-100 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1 p-4">
          {/* PROMINENT BACK BUTTON */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button 
              onClick={goBack}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-arrow-left-circle me-2"></i>
              <span>Back</span>
            </button>
            <button 
              onClick={() => setCurrentStep('welcome')}
              className="btn btn-light d-flex align-items-center shadow"
              style={{borderRadius: '50px', padding: '8px 20px', fontWeight: '500'}}
            >
              <i className="bi bi-house-door me-2"></i>
              <span>Home</span>
            </button>
          </div>
          
          <div className="d-flex justify-content-center">
            <div className="w-100" style={{maxWidth: '1000px'}}>
             
              
              <form onSubmit={handleSubmit} className="card border-0 shadow-xl mt-4" style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px'}}>
                <div className="card-body p-3">
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2 pb-1 border-bottom">
                      <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle me-3" style={{width: '30px', height: '30px'}}>
                        <i className="bi bi-building text-primary"></i>
                      </div>
                      <h5 className="fw-normal text-dark mb-0">Company Information</h5>
                    </div>
                    
                    <div className="row g-2">
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-building me-2 text-primary"></i>Company Name (As per Trade License)*
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.companyName}
                          onChange={(e) => handleInputChange('smeInfo', 'companyName', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-briefcase me-2 text-primary"></i>Business Nature*
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.businessNature}
                          onChange={(e) => handleInputChange('smeInfo', 'businessNature', e.target.value)}
                          required
                        >
                          <option value="">Select Business Nature</option>
                          <option value="Government Institutions">Government Institutions</option>
                          <option value="Legal Firms">Legal Firms</option>
                          <option value="General Trading">General Trading</option>
                          <option value="Construction">Construction</option>
                          <option value="Hotels & Restaurants">Hotels & Restaurants</option>
                          <option value="Transport">Transport</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Oil & Gas">Oil & Gas</option>
                          <option value="Household Goods">Household Goods</option>
                          <option value="Educational Institution">Educational Institution</option>
                          <option value="Associations">Associations</option>
                          <option value="Healthcare Providers">Healthcare Providers</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-geo-alt me-2 text-primary"></i>Emirate*
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.emirate}
                          onChange={(e) => handleInputChange('smeInfo', 'emirate', e.target.value)}
                          required
                        >
                          <option value="">Select Emirate</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                        </select>
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-building me-2 text-primary"></i>City*
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.city}
                          onChange={(e) => handleInputChange('smeInfo', 'city', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-person-badge me-2 text-primary"></i>Broker Contact Person (Generating the quote)*
                        </label>
                        <input 
                          type="text" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.brokerContact}
                          onChange={(e) => handleInputChange('smeInfo', 'brokerContact', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-phone me-2 text-primary"></i>Contact Number*
                        </label>
                        <input 
                          type="tel" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.contactNumber}
                          onChange={(e) => handleInputChange('smeInfo', 'contactNumber', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-envelope me-2 text-primary"></i>Email*
                        </label>
                        <input 
                          type="email" 
                          className="form-control border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.email}
                          onChange={(e) => handleInputChange('smeInfo', 'email', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="col-md-4">
                        <label className="form-label fw-semibold" style={{fontSize: '12px'}}>
                          <i className="bi bi-question-circle me-2 text-primary"></i>Are you the holding broker?*
                        </label>
                        <select 
                          className="form-select border-0 shadow-sm"
                          style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                          value={formData.smeInfo.holdingBroker}
                          onChange={(e) => handleInputChange('smeInfo', 'holdingBroker', e.target.value)}
                          required
                        >
                          <option value="">Select Option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-end">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-4"
                      style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                    >
                      <i className="bi bi-send me-2"></i>
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
        `}</style>
      </div>
    );
  }

  // Success Screen
  if (currentStep === 'success') {
    return (
      <div className="min-vh-100 position-relative d-flex align-items-center justify-content-center p-4" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div className="position-absolute top-10 start-10 w-64 h-64 bg-white opacity-5 rounded-circle animate-float"></div>
          <div className="position-absolute bottom-20 end-20 w-96 h-96 bg-white opacity-5 rounded-circle animate-float-delay"></div>
        </div>
        
        <div className="position-relative z-1">
          <div className="card border-0 shadow-xl" style={{maxWidth: '600px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '20px'}}>
            <div className="card-body p-5 text-center">
              <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mb-4 animate-scale-in" style={{width: '120px', height: '120px'}}>
                <i className="bi bi-check-circle-fill fs-1 text-success"></i>
              </div>
              
              <h2 className="fw-bold mb-4">Application Submitted Successfully!</h2>
              <p className="text-muted mb-5">Thank you for choosing LifeSecure. Your application has been received and our team will review it shortly. You will receive a confirmation email with further details.</p>
              
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button 
                  onClick={resetForm}
                  className="btn btn-primary px-4"
                  style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                >
                  <i className="bi bi-arrow-repeat me-2"></i>
                  Submit Another Application
                </button>
                <button 
                  onClick={() => setCurrentStep('welcome')}
                  className="btn btn-outline-secondary px-4"
                  style={{borderRadius: '8px', fontSize: '13px', height: '38px'}}
                >
                  <i className="bi bi-house me-2"></i>
                  Return to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-delay {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes scale-in {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 8s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-scale-in {
            animation: scale-in 0.5s ease-out;
          }
        `}</style>
      </div>
    );
  }

  return null;
};

export default Dispatch;