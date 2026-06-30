import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products, getNewArrivals } from '../../data/products';
import './ProductGrid.css';

const ProductGrid = ({ hideTitle, showAll = false }) => {
  const displayProducts = showAll ? products : getNewArrivals();

  return (
    <section className="product-section container">
      {!hideTitle && <h2 className="section-title">New Arrivals</h2>}
      <div className="product-grid">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
