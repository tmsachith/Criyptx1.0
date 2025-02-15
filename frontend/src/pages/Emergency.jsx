import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Emergency = ({ toggleSidebar, isSidebarOpen }) => {
  const emergencyContacts = [
    { name: 'Police', number: '119' },
    { name: 'Ambulance', number: '1990' },
    { name: 'Fire', number: '110' },
    { name: 'Tourist Police', number: '1912' },
  ];

  return (
    <div className={`emergency ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main>
        <h1>Emergency Contacts</h1>
        <ul>
          {emergencyContacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.name}:</strong> <a href={`tel:${contact.number}`}>{contact.number}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;