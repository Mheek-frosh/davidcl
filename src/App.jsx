import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchOverlay from './components/SearchOverlay/SearchOverlay';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import TopBar from './components/TopBar/TopBar';
import './index.css';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const addToCart = (product, size) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, size, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.size === size)));
  };

  const updateQty = (productId, size, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.size === size
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      <TopBar />
      <Navbar
        onSearchClick={() => setIsSearchOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
