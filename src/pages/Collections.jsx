import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProductsByCategory } from '../data/products';
import './Collections.css';

const CATEGORIES = [
  { key: 'caps', label: 'CAPS' },
  { key: 'trousers', label: 'TROUSERS' },
  { key: 'jackets', label: 'JACKETS' },
];

const Collections = () => {
  return (
    <div className="collections-page">
      <div className="collections-hero">
        <h1 className="collections-heading">OUR COLLECTIONS</h1>
        <p className="collections-sub">Curated gear for your lifestyle.</p>
      </div>

      <div className="collections-content container">
        {CATEGORIES.map(({ key, label }) => {
          const categoryProducts = getProductsByCategory(key);
          return (
            <section className="collection-section" key={key}>
              <div className="collection-header">
                <h2 className="collection-title">{label}</h2>
                <span className="collection-count">{categoryProducts.length} items</span>
              </div>
              <div className="collection-grid">
                {categoryProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
