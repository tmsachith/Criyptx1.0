import React from 'react';
import { Link } from 'react-router-dom';
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
        <section className="subscription">
          <h2>Choose Your Adventure Plan</h2>
          <div className="subscription-options">
            <div className="subscription-card free">
              <h3>Free</h3>
              <p>Basic features with ads</p>
              <ul>
                <li>Interactive Map</li>
                <li>Basic Budget Tracker</li>
                <li>Emergency Contacts</li>
              </ul>
              <p className="price">$0/month</p>
              <button>Start Free</button>
            </div>
            <div className="subscription-card freemium">
              <h3>Freemium</h3>
              <p>Pro features with ads</p>
              <ul>
                <li>All Free features</li>
                <li>Advanced Budget Analytics</li>
                <li>Offline Maps</li>
                <li>Basic Translation</li>
              </ul>
              <p className="price">$4.99/month</p>
              <button>Try Freemium</button>
            </div>
            <div className="subscription-card premium">
              <h3>Premium</h3>
              <p>Pro features, no ads</p>
              <ul>
                <li>All Freemium features</li>
                <li>Ad-free experience</li>
                <li>Premium Support</li>
                <li>Advanced Translation</li>
              </ul>
              <p className="price">$9.99/month</p>
              <button>Go Premium</button>
            </div>
          </div>
        </section>
        <section className="cta">
          <h2>Start Your Adventure</h2>
          <Link to="/explore">
            <button>Explore Now</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;