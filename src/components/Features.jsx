import React, { useState, useEffect } from 'react';
import './Features.css';

const FeatureCard = ({ title, description, index }) => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const cardElement = document.getElementById(title);
    const rect = cardElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id={title}  // This can be kept, but it can also be simplified if needed
      className={`card ${inView ? 'slide-up' : ''}`}  // Corrected className interpolation
      style={{ animationDelay: `${index * 0.3}s` }}  // Corrected inline style
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet' },
    { title: 'Feature 2', description: 'Consectetur adipiscing elit' },
    { title: 'Feature 3', description: 'Sed do eiusmod tempor incididunt' }
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}  // React key for list items
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
