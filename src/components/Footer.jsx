// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Optional: add styles

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 DevsRec Club. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;