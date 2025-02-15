import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Translate = ({ toggleSidebar, isSidebarOpen }) => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // In a real app, you would call a translation API here
    setTranslatedText(`Translated: ${inputText}`);
  };

  return (
    <div className={`translate ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main>
        <h1>Language Translation</h1>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to translate"
        />
        <button onClick={handleTranslate}>Translate</button>
        <div className="translated-text">
          <h2>Translation:</h2>
          <p>{translatedText}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Translate;