import React from 'react';
import './Navbar.css';

const Navbar = ({ onSearchClick, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-links">
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#collections" className="nav-link">Collections</a>
        </div>
        
        <div className="navbar-logo">
          <a href="/">DAVID CLOTHINGS</a>
        </div>
        
        <div className="navbar-icons">
          <a href="#account" className="icon-text-link">Account</a>
          <button className="icon-btn" aria-label="Search" onClick={onSearchClick}>
            <span className="icon-text">Search</span>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="icon-btn" aria-label="Cart" onClick={onCartClick}>
            <span className="icon-text">Cart</span>
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
