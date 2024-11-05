// src/components/Features.js
import React from 'react';
import './Features.css'; // Optional: add styles

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Feature 1</h3>
          <p>Description of feature 1</p>
        </div>
        <div className="card">
          <h3>Feature 2</h3>
          <p>Description of feature 2</p>
        </div>
        <div className="card">
          <h3>Feature 3</h3>
          <p>Description of feature 3</p>
        </div>
      </div>
    </section>
  );
};

export default Features;