import React from 'react';
import Hero from './Hero/Hero';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import Testimonials from './Testimonials/Testimonials';
import CTASection from './CTASection/CTASection';
import DownloadApp from './DownloadApp/DownloadApp';
import Slider from './Slider/Slider';
import ServicesSection from './ServicesSection/ServicesSection';
import HealthcareSystem from './HealthcareSystem/HealthcareSystem';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Slider/>
      <KeyBenefits />
      <ServicesSection />
      <HealthcareSystem />
      
      {/* 5. Testimonials - Social proof from real users */}
      <Testimonials />
      
      {/* 6. CTA Section - Strong call to action */}
      <CTASection />
      
   
    </div>
  );
};

export default Home;