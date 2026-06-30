import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductView from '../components/ProductView/ProductView';
import { getProductById } from '../data/products';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Product Not Found</h2>
        <button
          className="btn"
          onClick={() => navigate('/')}
          style={{ padding: '12px 32px' }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <ProductView product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
