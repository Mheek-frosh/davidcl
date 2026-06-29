import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-overlay">
          <button className="btn quick-add-btn">Quick Add</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
