// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>DevsRec</h2>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link
              to="features" // Target the section with id="features"
              smooth={true}  // Enable smooth scroll
              duration={500} // Scroll duration (500ms)
              offset={-80}   // Offset to account for fixed navbar height
              className="nav-link"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="about" // Target the section with id="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact" // Target the section with id="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;