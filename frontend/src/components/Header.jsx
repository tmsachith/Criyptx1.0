import React from 'react';
import '../styles/Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="logo">
        <img src="/logo.png" alt="LocalLens Logo" />
        <h1>LocalLens</h1>
      </div>
      <div className="header-actions">
        <button className="action-button">
          <i className="fas fa-search"></i>
        </button>
        <button className="action-button">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;