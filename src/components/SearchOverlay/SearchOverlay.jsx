import React from 'react';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-overlay-content">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search our store" 
            className="search-input" 
            autoFocus
          />
          <button className="search-icon-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </div>
      <button className="close-btn" onClick={onClose} aria-label="Close search">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  );
};

export default SearchOverlay;
