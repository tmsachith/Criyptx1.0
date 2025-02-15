import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>LocalLens</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav>
          <ul>
            <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#map"><i className="fas fa-map-marked-alt"></i> Interactive Map</a></li>
            <li><a href="#budget"><i className="fas fa-wallet"></i> Budget Tracker</a></li>
            <li><a href="#emergency"><i className="fas fa-ambulance"></i> Emergency Support</a></li>
            <li><a href="#translate"><i className="fas fa-language"></i> Language Translation</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <p>&copy; 2023 LocalLens</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;