import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/hero-image.png" alt="Hero Background" className="hero-image" />
      </div>
      {/* Overlay removed or lightened as per image 2 */}
    </section>
  );
};

export default Hero;
