import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const heroElement = document.getElementById('hero');
    const rect = heroElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className={`hero ${inView ? 'slide-up' : ''}`}  // Fixed className syntax
    >
      <div className="hero-content">
        <h1>Welcome to DevsRec</h1>
        <p>Join the best developers' community!</p>
        <a href="#features" className="cta-btn">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
