import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Sidebar from './Sidebar';
import '../styles/Home.css';

const Home = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`home ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <Slider />
      <main>
        <section className="features">
          <div className="feature">
            <i className="fas fa-map-marked-alt"></i>
            <h2>Interactive Map</h2>
            <p>Explore hidden gems and popular attractions</p>
          </div>
          <div className="feature">
            <i className="fas fa-wallet"></i>
            <h2>Budget Tracker</h2>
            <p>Manage your expenses and stay on budget</p>
          </div>
          <div className="feature">
            <i className="fas fa-ambulance"></i>
            <h2>Emergency Support</h2>
            <p>Quick access to essential services</p>
          </div>
          <div className="feature">
            <i className="fas fa-language"></i>
            <h2>Language Translation</h2>
            <p>Break the language barrier with ease</p>
          </div>
        </section>
        <section className="cta">
          <h2>Start Your Adventure</h2>
          <button>Explore Now</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;