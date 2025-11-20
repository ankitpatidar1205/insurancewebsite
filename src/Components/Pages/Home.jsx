import React from 'react';
import Hero from './Hero/Hero';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import Testimonials from './Testimonials/Testimonials';

import Slider from './Slider/Slider';
import ServicesSection from './ServicesSection/ServicesSection';
import HealthcareSystem from './HealthcareSystem/HealthcareSystem';
import BeforeAfter from './BeforeAfter/BeforeAfter';
import HealthApp from './HealthApp/HealthApp';
import CustomerServiceSection from './CustomerServiceSection/CustomerServiceSection';
import AlanHealthOffers from './AlanHealthOffers/AlanHealthOffers';
import MarmotCTA from './MarmotCTA/MarmotCTA';
import Stepper from './Stepper/Stepper';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Slider/>
      <KeyBenefits />
      <ServicesSection />
      <HealthcareSystem />
      <HealthApp />
      {/* <Stepper/> */}
      <CustomerServiceSection />
      <AlanHealthOffers/>
  
      
      <BeforeAfter/>
          <MarmotCTA/>
   
    </div>
  );
};

export default Home;