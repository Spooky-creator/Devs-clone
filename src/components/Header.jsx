// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional: add your CSS here

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">DevsRec</div>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;