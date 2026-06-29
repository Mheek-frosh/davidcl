import React, { useState } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [currency, setCurrency] = useState('United States (USD $)');

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-8-8v11.37a2 2 0 1 1-2-1.92V9.3A6 6 0 1 0 15 16"></path></svg>
          </a>
        </div>
        <div className="topbar-center">
          <span className="marquee-text">THRASHED DENIM & MOTO JACKET OUT NOW!</span>
        </div>
        <div className="topbar-right">
          <a href="/">HOME</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <div className="currency-selector">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="currency-dropdown"
            >
              <option value="United States (USD $)">🇺🇸 United States (USD $)</option>
              <option value="Nigeria (NGN ₦)">🇳🇬 Nigeria (NGN ₦)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
