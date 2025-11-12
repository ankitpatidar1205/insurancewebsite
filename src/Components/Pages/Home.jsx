import React from 'react';
import Hero from './Hero/Hero';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import Testimonials from './Testimonials/Testimonials';
import CTASection from './CTASection/CTASection';
import Slider from './Slider/Slider';
import ServicesSection from './ServicesSection/ServicesSection';
import HealthcareSystem from './HealthcareSystem/HealthcareSystem';
import BeforeAfter from './BeforeAfter/BeforeAfter';
import HealthApp from './HealthApp/HealthApp';
import CustomerServiceSection from './CustomerServiceSection/CustomerServiceSection';
import AlanHealthOffers from './AlanHealthOffers/AlanHealthOffers';
import MarmotCTA from './MarmotCTA/MarmotCTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Slider/>
      <KeyBenefits />
      <ServicesSection />
      <HealthcareSystem />
      <HealthApp />
      <CustomerServiceSection />
      <AlanHealthOffers/>
  
      
      {/* 5. Testimonials - Social proof from real users */}
      {/* <Testimonials /> */}
      
      {/* 6. CTA Section - Strong call to action */}
      {/* <CTASection /> */}
      <BeforeAfter/>
          <MarmotCTA/>
   
    </div>
  );
};

export default Home;