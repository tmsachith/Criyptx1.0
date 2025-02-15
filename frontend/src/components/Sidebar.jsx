import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/" onClick={toggleSidebar}><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/explore" onClick={toggleSidebar}><i className="fas fa-map-marked-alt"></i> Interactive Map</Link></li>
            <li><Link to="/budget" onClick={toggleSidebar}><i className="fas fa-wallet"></i> Budget Tracker</Link></li>
            <li><Link to="/emergency" onClick={toggleSidebar}><i className="fas fa-ambulance"></i> Emergency Support</Link></li>
            <li><Link to="/translate" onClick={toggleSidebar}><i className="fas fa-language"></i> Language Translation</Link></li>
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