import React from 'react';
import Hero from './Hero/Hero';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import HowItWorks from './HowItWorks/HowItWorks';
import CTASection from './CTASection/CTASection';
import DownloadApp from './DownloadApp/DownloadApp';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section - Main value proposition */}
      <Hero />
      
      {/* 2. Key Benefits - Core highlights */}
      <KeyBenefits />
      
      {/* 3. How It Works - Simple process explanation */}
      <HowItWorks />
      
      {/* 4. Features - Detailed features breakdown */}
      <Features />
      
      {/* 5. Testimonials - Social proof from real users */}
      <Testimonials />
      
      {/* 6. CTA Section - Strong call to action */}
      <CTASection />
      
      {/* 7. Download App - Final section to encourage app download */}
      <DownloadApp />
    </div>
  );
};

export default Home;