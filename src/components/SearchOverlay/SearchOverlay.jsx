import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim().length > 0
    ? products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="search-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="search-overlay-inner">
        <div className="search-overlay-content">
          <div className="search-container">
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="search-clear-btn" onClick={() => setQuery('')} aria-label="Clear search">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            )}
          </div>

          {results.length > 0 && (
            <div className="search-results">
              {results.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="search-result-item"
                  onClick={onClose}
                >
                  <img src={product.image} alt={product.title} className="search-result-img" />
                  <div className="search-result-info">
                    <span className="search-result-title">{product.title}</span>
                    <span className="search-result-price">${product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {query.trim() && results.length === 0 && (
            <p className="search-no-results">No products found for "{query}"</p>
          )}
        </div>

        <button className="close-btn" onClick={onClose} aria-label="Close search">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchOverlay;
