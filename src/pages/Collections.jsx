import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Collections.css';

const collectionsData = {
  caps: [
    {
      id: 101,
      title: 'OBSIDIAN SNAPBACK',
      price: '45.00',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 102,
      title: 'ESSENTIAL BEANIE',
      price: '35.00',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 103,
      title: 'NIGHT CAMO CAP',
      price: '40.00',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=1000'
    }
  ],
  trousers: [
    {
      id: 201,
      title: 'TACTICAL CARGO PANTS',
      price: '160.00',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 202,
      title: 'DISTRESSED DENIM',
      price: '145.00',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 203,
      title: 'TECHWEAR JOGGERS',
      price: '130.00',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000'
    }
  ],
  jackets: [
    {
      id: 301,
      title: 'LEATHER MOTO JACKET',
      price: '280.00',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 302,
      title: 'ONYX WINDBREAKER',
      price: '150.00',
      image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 303,
      title: 'VARSITY BOMBER',
      price: '190.00',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000'
    }
  ]
};

const Collections = () => {
  return (
    <div className="collections-page">
      <div className="collections-hero">
        <h1 className="collections-heading">OUR COLLECTIONS</h1>
        <p className="collections-sub">Curated gear for your lifestyle.</p>
      </div>

      <div className="collections-content container">
        {/* Caps Section */}
        <section className="collection-section">
          <h2 className="collection-title">CAPS</h2>
          <div className="collection-grid">
            {collectionsData.caps.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Trousers Section */}
        <section className="collection-section">
          <h2 className="collection-title">TROUSERS</h2>
          <div className="collection-grid">
            {collectionsData.trousers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Jackets Section */}
        <section className="collection-section">
          <h2 className="collection-title">JACKETS</h2>
          <div className="collection-grid">
            {collectionsData.jackets.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collections;
