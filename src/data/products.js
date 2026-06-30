// Central product data store for the entire app
export const products = [
  {
    id: 1,
    title: 'DP® MOTO JACKET',
    price: '210.00',
    category: 'jackets',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_1_75196a04-555e-4228-a1c1-ed961fc791f9.png?v=1780666154'
  },
  {
    id: 2,
    title: 'THRASHED DENIM',
    price: '180.00',
    category: 'trousers',
    image: '/THRASHED DENIM.png'
  },
  {
    id: 3,
    title: 'DP® CARD HOLDER',
    price: '35.00',
    category: 'accessories',
    image: '/DP® CARD HOLDER.png'
  },
  {
    id: 4,
    title: 'DARK® MOTO CAP',
    price: '50.00',
    category: 'caps',
    image: '/DARK® MOTO CAP.png'
  },
  {
    id: 5,
    title: 'DARK® MOTO THERMAL',
    price: '80.00',
    category: 'jackets',
    image: '/DARK® MOTO THERMAL.png'
  },
  {
    id: 6,
    title: 'DARK® MOTO SWEATPANTS',
    price: '120.00',
    category: 'trousers',
    image: '/DARK® MOTO SWEATPANTS.png'
  },
  {
    id: 7,
    title: 'DARK® MOTO HOODIE',
    price: '140.00',
    category: 'jackets',
    image: '/DARK® MOTO HOODIE.png'
  },
  {
    id: 8,
    title: 'UNIFORM DENIM',
    price: '160.00',
    category: 'trousers',
    image: '/UNIFORM DENIM.png'
  }
];

// Helpers
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getNewArrivals = () => products.slice(0, 8);
