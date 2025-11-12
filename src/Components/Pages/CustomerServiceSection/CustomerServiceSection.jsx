import React from 'react';
import './CustomerServiceSection.css';

const CustomerServiceCard = () => {
  return (
    <div className="customer-service-card">
      {/* Left side - Marmot image */}
      <div className="marmot-container">
        <img 
          src="https://i.postimg.cc/26vZVnbT/marmot-7a942e772fe6b002.webp" 
          alt="Friendly marmot character" 
          className="marmot-image"
        />
        
        {/* Floating tags on left side */}
        <div className="tag tag-effective">Effective</div>
        <div className="tag tag-pedagogue">Pedagogue</div>
        <div className="tag tag-clear">Clear</div>
      </div>
      
      {/* Right side - Content */}
      <div className="content-container">
        {/* Team avatars */}
        <div className="team-avatars">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" className="avatar" />
          <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Team member" className="avatar" />
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team member" className="avatar" />
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Team member" className="avatar" />
          <div className="avatar-plus">+50</div>
        </div>
        
        {/* Main content */}
        <h2 className="main-title">A customer service truly at your service</h2>
        <p className="subtitle">Yes, it exists.</p>
        <p className="description">
          Our experts will respond to you within 5 minutes via chat, within the day via email, 
          or call you if you prefer to speak directly.
        </p>
        <p className="rating">Rated 4.6/5 by our members for the past 8 years.</p>
        
        {/* Kind tag with heart */}
        <div className="tag tag-kind">Kind ❤️</div>
        
        {/* Lightning bolt decoration */}
        <div className="lightning-bolt">⚡</div>
      </div>
    </div>
  );
};

export default CustomerServiceCard;
