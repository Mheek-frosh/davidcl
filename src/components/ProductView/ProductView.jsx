import React, { useState, useEffect } from 'react';
import './ProductView.css';
import StickyPopup from '../StickyPopup/StickyPopup';
import ProductGrid from '../ProductGrid/ProductGrid';

const ProductView = ({ product }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showSticky, setShowSticky] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky popup when scrolled past a certain point (e.g., 600px)
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <p className="size-label">Size</p>
            <div className="size-options">
              {['28', '30', '32', '34', '36'].map(size => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
          </div>

          <button className="btn add-to-cart-btn">ADD TO CART</button>

          <div className="accordions">
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(0)}>
                PRODUCT DESCRIPTION
                <span className="accordion-icon">{activeAccordion === 0 ? '-' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 0 ? 'open' : ''}`}>
                <ul>
                  <li>CUT & SEWN</li>
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
                <span className="accordion-icon">{activeAccordion === 1 ? '-' : '+'}</span>
              </button>
              <div className={`accordion-content ${activeAccordion === 1 ? 'open' : ''}`}>
                <p>Size chart details here.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion(2)}>
                SHIPPING & RETURNS
                <span className="accordion-icon">{activeAccordion === 2 ? '-' : '+'}</span>
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

      <StickyPopup product={product} isVisible={showSticky} />
    </div>
  );
};

export default ProductView;
