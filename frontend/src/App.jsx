import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Explore from './pages/Explore';
import Budget from './pages/Budget';
import Emergency from './pages/Emergency';
import Translate from './pages/Translate';

 
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : 'auto';
  };

  return (
    <Router>
      <div className={`App ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Routes>
          <Route 
            path="/" 
            element={<Home toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} 
          />
          <Route 
            path="/explore" 
            element={<Explore toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} 
          />
          <Route 
            path="/budget" 
            element={<Budget toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} 
          />
          <Route 
            path="/emergency" 
            element={<Emergency toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} 
          />
          <Route 
            path="/translate" 
            element={<Translate toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;