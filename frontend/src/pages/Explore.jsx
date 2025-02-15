import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../styles/Explore.css';

const Explore = ({ toggleSidebar, isSidebarOpen, isPro = false }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate getting live location
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay to simulate location fetching
  }, []);

  const nearbyPlaces = [
    { 
      name: 'Seethawaka Wet Zone Botanical Garden', 
      distance: '3.5 km', 
      description: 'Beautiful botanical garden showcasing wet zone flora.',
      image: '/assets/images/seethawaka-botanical-garden.jpg',
      travelMethod: 'By tuk-tuk'
    },
    { 
      name: 'Panagoda Army Cantonment', 
      distance: '2.1 km', 
      description: 'Large military base with historical significance.',
      image: '/assets/images/panagoda-cantonment.jpg',
      travelMethod: 'By bus'
    },
    { 
      name: 'Homagama Lake', 
      distance: '1.0 km', 
      description: 'Scenic lake perfect for evening walks and relaxation.',
      image: '/assets/images/homagama-lake.jpg',
      travelMethod: 'Walking'
    },
    { 
      name: 'Sri Lanka Institute of Nanotechnology', 
      distance: '4.8 km', 
      description: 'Advanced research institute for nanotechnology.',
      image: '/assets/images/slintec.jpg',
      travelMethod: 'By car'
    },
    { 
      name: 'Meethirigala Forest Reserve', 
      distance: '7.5 km', 
      description: 'Protected forest area with diverse wildlife.',
      image: '/assets/images/meethirigala-forest.jpg',
      travelMethod: 'By car'
    },
  ];

  return (
    <div className={`explore ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main className="explore-main" style={{backgroundImage: 'url(/assets/images/homagama-background.jpg)'}}>
        <h1>Explore Sri Lanka</h1>
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Getting live location...</p>
          </div>
        ) : (
          <>
            <div className="location-info">
              <i className="fas fa-map-marker-alt"></i>
              <span>Your current location: Homagama, Sri Lanka</span>
            </div>
            <div className="nearby-places">
              <h2>Nearby Places to Visit</h2>
              <div className="places-grid">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="place-card">
                    <img src={place.image} alt={place.name} className="place-image" />
                    <h3>{place.name}</h3>
                    <p className="distance"><i className="fas fa-walking"></i> {place.distance}</p>
                    <p className="description">{place.description}</p>
                    {isPro && (
                      <p className="travel-method">
                        <i className="fas fa-route"></i> Best way: {place.travelMethod}
                      </p>
                    )}
                    <button className="view-details">View Details</button>
                  </div>
                ))}
              </div>
            </div>
            {!isPro && (
              <div className="pro-feature-banner">
                <p>Upgrade to Pro to see the best travel methods!</p>
                <button className="upgrade-button">Upgrade to Pro</button>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Explore;