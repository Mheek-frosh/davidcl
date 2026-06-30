import React from 'react';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1 className="shop-heading">SHOP ALL</h1>
        <p className="shop-sub">Handcrafted. Limited. Yours.</p>
      </div>
      <ProductGrid hideTitle={true} showAll={true} />
    </div>
  );
};

export default Shop;
