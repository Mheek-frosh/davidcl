// Central product data store for the entire app
export const products = [
  // === JACKETS ===
  {
    id: 1,
    title: 'DP® MOTO JACKET',
    price: '210.00',
    category: 'jackets',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_1_75196a04-555e-4228-a1c1-ed961fc791f9.png?v=1780666154'
  },
  {
    id: 2,
    title: 'NIGHTWALKER HOODIE',
    price: '120.00',
    category: 'jackets',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Untitled_design.zip_-_2.png?crop=center&height=1200&v=1755881481&width=1200'
  },
  {
    id: 3,
    title: 'ONYX WINDBREAKER',
    price: '150.00',
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=900'
  },

  // === TROUSERS ===
  {
    id: 4,
    title: 'THRASHED DENIM',
    price: '180.00',
    category: 'trousers',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_4_f162e560-1947-40cf-b580-43c99595ea7c.png?v=1780666075'
  },
  {
    id: 5,
    title: 'SHADOW CARGO PANTS',
    price: '150.00',
    category: 'trousers',
    image: 'https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Artboard_3_7f0d3bb8-bcdc-4306-9c9e-5c2fe503c967.png?v=1780666148'
  },
  {
    id: 6,
    title: 'TECHWEAR JOGGERS',
    price: '130.00',
    category: 'trousers',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=900'
  },

  // === CAPS ===
  {
    id: 7,
    title: 'OBSIDIAN SNAPBACK',
    price: '45.00',
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 8,
    title: 'ESSENTIAL BEANIE',
    price: '35.00',
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=900'
  },
  {
    id: 9,
    title: 'NIGHT CAMO CAP',
    price: '40.00',
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=900'
  }
];

// Helpers
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getNewArrivals = () => products.slice(0, 4);
