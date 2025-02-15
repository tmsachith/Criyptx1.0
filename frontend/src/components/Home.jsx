import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to LocalLens</h1>
        <p>Discover Sri Lanka like a local</p>
      </header>
      <main>
        <section className="features">
          <div className="feature">
            <h2>Interactive Map</h2>
            <p>Explore hidden gems and popular attractions</p>
          </div>
          <div className="feature">
            <h2>Budget Tracker</h2>
            <p>Manage your expenses and stay on budget</p>
          </div>
          <div className="feature">
            <h2>Emergency Support</h2>
            <p>Quick access to essential services</p>
          </div>
          <div className="feature">
            <h2>Language Translation</h2>
            <p>Break the language barrier with ease</p>
          </div>
        </section>
        <section className="cta">
          <h2>Start Your Adventure</h2>
          <button>Explore Now</button>
        </section>
      </main>
    </div>
  );
};

export default Home;