import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`cart-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <div className="cart-content empty">
          <svg className="cart-empty-icon" viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h2>YOUR CART IS EMPTY</h2>
          <button className="btn cart-shop-btn" onClick={onClose}>START SHOPPING</button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
