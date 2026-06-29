import React, { useState, useEffect } from 'react';
import './ProductView.css';
import StickyPopup from '../StickyPopup/StickyPopup';
import ProductGrid from '../ProductGrid/ProductGrid';

const ProductView = ({ product, addToCart }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showSticky, setShowSticky] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset state when product changes
  useEffect(() => {
    setSelectedSize(null);
    setAdded(false);
    setSizeError(false);
  }, [product.id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="product-view-container container">
      <div className="product-view-layout">
        <div className="product-images">
          <img src={product.image} alt={product.title} className="main-image" />
          <div className="thumbnail-list">
            <img src={product.image} alt="Thumbnail 1" className="thumbnail active" />
            <img src={product.image} alt="Thumbnail 2" className="thumbnail" />
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-view-title">{product.title}</h1>
          <p className="product-view-price">${product.price}</p>

          <div className="size-selector">
            <p className="size-label">
              Size
              {sizeError && <span className="size-error"> — Please select a size</span>}
            </p>
            <div className="size-options">
              {['28', '30', '32', '34', '36'].map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => { setSelectedSize(size); setSizeError(false); }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className={`btn add-to-cart-btn ${added ? 'added' : ''} ${sizeError ? 'error' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ ADDED TO CART' : sizeError ? 'SELECT A SIZE' : 'ADD TO CART'}
          </button>

          <div className="accordions">
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(0)}>
                PRODUCT DESCRIPTION
                <span className="accordion-icon">{activeAccordion === 0 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 0 ? 'open' : ''}`}>
                <ul>
                  <li>CUT &amp; SEWN</li>
                  <li>HEAVYWEIGHT 16 OZ COTTON</li>
                  <li>490 GSM</li>
                  <li>HAND-PAINTED SILVER WASH</li>
                  <li>SIGNATURE HARDWARE BUTTONS</li>
                  <li>SIGNATURE WOVEN TAG</li>
                  <li>SIGNATURE LEATHER TAG</li>
                </ul>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                SIZE CHART
                <span className="accordion-icon">{activeAccordion === 1 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
                <p>Size chart details here.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                SHIPPING &amp; RETURNS
                <span className="accordion-icon">{activeAccordion === 2 ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 2 ? 'open' : ''}`}>
                <p>Shipping details here.</p>
              </div>
            </div>
          </div>

          <div className="fit-guide">
            <p className="fit-label">Fit</p>
            <div className="fit-bar-container">
              <div className="fit-segments">
                <div className="fit-segment"></div>
                <div className="fit-segment active"></div>
                <div className="fit-segment"></div>
              </div>
              <div className="fit-labels">
                <span>Small</span>
                <span>True to size</span>
                <span>Large</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="you-may-also-like">
        <h2 className="related-title">YOU MAY ALSO LIKE</h2>
        <ProductGrid hideTitle={true} />
      </div>

      <StickyPopup product={product} isVisible={showSticky} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductView;
