import React, { useState } from 'react';
import Home from './components/Home';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : 'auto';
  };

  return (
    <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Home toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;