import React from 'react';
import { useParams } from 'react-router-dom';
import ProductView from '../components/ProductView/ProductView';

const mockProducts = [
  {
    id: 1,
    title: 'DP® MOTO JACKET',
    price: '210.00',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_1_75196a04-555e-4228-a1c1-ed961fc791f9.png?v=1780666154'
  },
  {
    id: 2,
    title: 'THRASHED DENIM',
    price: '180.00',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_4_f162e560-1947-40cf-b580-43c99595ea7c.png?v=1780666075'
  },
  {
    id: 3,
    title: 'NIGHTWALKER HOODIE',
    price: '120.00',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Untitled_design.zip_-_2.png?crop=center&height=1200&v=1755881481&width=1200'
  },
  {
    id: 4,
    title: 'SHADOW CARGO PANTS',
    price: '150.00',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_3_7f0d3bb8-bcdc-4306-9c9e-5c2fe503c967.png?v=1780666148'
  }
];

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id)) || mockProducts[0];

  return (
    <div>
      <ProductView product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
