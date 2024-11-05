// src/components/Hero.js
import React from 'react';
import './Hero.css'; // Optional: add your styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to DevsRec</h1>
        <p>Your go-to platform for developers!</p>
        <a href="#features" className="cta-btn">Explore Features</a>
      </div>
    </section>
  );
};

export default Hero;