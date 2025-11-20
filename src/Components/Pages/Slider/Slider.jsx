import React from 'react';
import { Container } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  const logos = [
    'https://6vvt7k9n.twic.pics/v1/image:prismic/Z8XSMRsAHJWomD1j_Cultura_Logo_20211.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/ZjNavUMTzAJOCfOl_celio.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/ZjNblkMTzAJOCfPI_caudalie.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/ZjNcHUMTzAJOCfPs_siapartners.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/510338de-8c3e-486d-9f1a-6371196aedcc_Vitalliance_logo.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/ZjNbfkMTzAJOCfPC_axereal.png',
    'https://6vvt7k9n.twic.pics/v1/image:prismic/2dee4fab-2c67-43c7-8b9b-52956a9fa755_logo_netatmo.png',
  ];

  return (
    <section className="logo-slider-section">
      
        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {logos.map((logo, index) => (
              <div className="logo-slide" key={index}>
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate logos for continuous loop effect */}
            {logos.map((logo, index) => (
              <div className="logo-slide" key={`duplicate-${index}`}>
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Add this bottom line text */}
        <p className="logo-slider-text">
          Over 710,000 members and 33,000 companies take care of their health with Lifesecure
        </p>
   
    </section>
  );
};

export default Slider;
