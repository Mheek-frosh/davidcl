import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://cdn.shopify.com/s/files/1/0601/5906/6363/files/Untitled_design.zip_-_2.png?crop=center&height=1200&v=1755881481&width=1200" 
          alt="Dark Passengers Hero" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">DAVID CLOTHINGS</h1>
        <p className="hero-subtitle">Embrace the darkness.</p>
        <button className="btn hero-btn">Shop Collection</button>
      </div>
    </section>
  );
};

export default Hero;
