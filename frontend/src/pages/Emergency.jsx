import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../styles/Emergency.css';

const Emergency = ({ toggleSidebar, isSidebarOpen }) => {
  const [location, setLocation] = useState('Loading...');
  const [nearbyServices, setNearbyServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating location loading
    setTimeout(() => {
      setLocation('Homagama');
      setIsLoading(false);
      // In a real app, you'd use geolocation API here
    }, 2000);
  }, []);

  useEffect(() => {
    if (location !== 'Loading...') {
      // Simulating nearby services fetch
      // In a real app, you'd fetch this data from an API based on the location
      setNearbyServices([
        { name: 'Homagama Police Station', distance: '0.5 km', phone: '011-2855222' },
        { name: 'Homagama Base Hospital', distance: '1.2 km', phone: '011-2855200' },
        { name: 'Homagama Fire Station', distance: '2.0 km', phone: '011-2857224' },
      ]);
    }
  }, [location]);

  const emergencyNumbers = [
    { service: 'Police Emergency', number: '119' },
    { service: 'Ambulance', number: '1990' },
    { service: 'Fire & Rescue', number: '110' },
    { service: 'Tourist Police', number: '1912' },
  ];

  return (
    <div className={`emergency-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main className="emergency-main">
        <h1>Emergency Services</h1>
        
        <div className="location-container">
          <h2>Your Location</h2>
          {isLoading ? (
            <div className="loading-animation"></div>
          ) : (
            <p>{location}</p>
          )}
        </div>

        <div className="nearby-services">
          <h2>Nearby Emergency Services</h2>
          {nearbyServices.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.name}</h3>
              <p>Distance: {service.distance}</p>
              <p>Phone: <a href={`tel:${service.phone}`}>{service.phone}</a></p>
            </div>
          ))}
        </div>

        <div className="emergency-numbers">
          <h2>Emergency Contact Numbers</h2>
          <ul>
            {emergencyNumbers.map((item, index) => (
              <li key={index}>
                <span>{item.service}:</span>
                <a href={`tel:${item.number}`}>{item.number}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;