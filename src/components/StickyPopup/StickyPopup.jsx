import React from 'react';
import './StickyPopup.css';

const StickyPopup = ({ product, isVisible }) => {
  return (
    <div className={`sticky-popup ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-popup-content">
        <img src={product.image} alt={product.title} className="sticky-image" />
        <div className="sticky-info">
          <span className="sticky-title">{product.title}</span>
          <button className="btn sticky-btn">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default StickyPopup;
