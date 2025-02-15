import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../styles/Translate.css';

const Translate = ({ toggleSidebar, isSidebarOpen }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('sinhala');
  const [searchTerm, setSearchTerm] = useState('');

  const commonPhrases = {
    'Hello': {
      sinhala: 'ආයුබෝවන් (Ayubowan)',
      tamil: 'வணக்கம் (Vanakkam)'
    },
    'Thank you': {
      sinhala: 'ස්තූතියි (Sthuthiyi)',
      tamil: 'நன்றி (Nandri)'
    },
    'Please': {
      sinhala: 'කරුණාකර (Karunakara)',
      tamil: 'தயவு செய்து (Thayavu Seithu)'
    },
    'Yes': {
      sinhala: 'ඔව් (Ow)',
      tamil: 'ஆம் (Aam)'
    },
    'No': {
      sinhala: 'නැහැ (Nehe)',
      tamil: 'இல்லை (Illai)'
    },
    'Excuse me': {
      sinhala: 'සමාවෙන්න (Samawenna)',
      tamil: 'மன்னிக்கவும் (Mannikavum)'
    },
    'How much?': {
      sinhala: 'කීයද? (Keeyada?)',
      tamil: 'எவ்வளவு? (Evvalavu?)'
    },
    'Where is...?': {
      sinhala: 'කොහෙද...? (Koheda...?)',
      tamil: 'எங்கே...? (Enge...?)'
    },
    'I don\'t understand': {
      sinhala: 'මට තේරෙන්නෙ නෑ (Mata Therenne Naa)',
      tamil: 'எனக்கு புரியவில்லை (Enakku Puriyavillai)'
    },
    'Can you help me?': {
      sinhala: 'ඔයාට මට උදව් කරන්න පුළුවන්ද? (Oyata Mata Udaw Karanna Puluwanda?)',
      tamil: 'நீங்கள் எனக்கு உதவ முடியுமா? (Neengal Enakku Udhava Mudiyuma?)'
    }
  };

  const filteredPhrases = Object.keys(commonPhrases).filter(phrase =>
    phrase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`translate-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Header toggleSidebar={toggleSidebar} />
      <main className="translate-main">
        <h1>Translate</h1>
        <div className="language-selector">
          <label htmlFor="language-select">Select Language:</label>
          <select 
            id="language-select" 
            value={selectedLanguage} 
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="sinhala">Sinhala</option>
            <option value="tamil">Tamil</option>
          </select>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search phrases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="phrases-container">
          {filteredPhrases.map((phrase, index) => (
            <div key={index} className="phrase-item">
              <h3>{phrase}</h3>
              <p>{commonPhrases[phrase][selectedLanguage]}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Translate;