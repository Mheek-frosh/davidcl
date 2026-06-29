import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchOverlay from './components/SearchOverlay/SearchOverlay';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import './index.css';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="app">
      <Navbar 
        onSearchClick={() => setIsSearchOpen(true)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
