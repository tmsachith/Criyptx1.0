import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About LocalLens</h3>
          <p>Discover Sri Lanka like a local with our innovative tourism app.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#map">Map</a></li>
            <li><a href="#budget">Budget</a></li>
            <li><a href="#emergency">Emergency</a></li>
            <li><a href="#translate">Translate</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@locallens.com</p>
          <p>Phone: +94 11 234 5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 LocalLens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;