import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, cartItems = [], onRemove, onUpdateQty }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.qty,
    0
  );

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
          <h2 className="cart-title">YOUR CART ({cartItems.reduce((s, i) => s + i.qty, 0)})</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-content empty">
            <svg className="cart-empty-icon" viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <p className="cart-empty-label">Your cart is empty</p>
            <button className="btn cart-shop-btn" onClick={onClose}>START SHOPPING</button>
          </div>
        ) : (
          <div className="cart-items-wrapper">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-meta">Size: {item.size}</p>
                    <p className="cart-item-price">${(parseFloat(item.price) * item.qty).toFixed(2)}</p>
                    <div className="cart-item-controls">
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQty(item.id, item.size, -1)}
                          aria-label="Decrease"
                        >−</button>
                        <span className="qty-value">{item.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQty(item.id, item.size, 1)}
                          aria-label="Increase"
                        >+</button>
                      </div>
                      <button
                        className="cart-remove-btn"
                        onClick={() => onRemove(item.id, item.size)}
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="cart-shipping-note">Shipping & taxes calculated at checkout</p>
              <button className="btn cart-checkout-btn">CHECKOUT</button>
              <button className="cart-continue-btn" onClick={onClose}>Continue Shopping</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
