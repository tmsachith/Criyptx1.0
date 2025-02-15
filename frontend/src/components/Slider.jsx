import React, { useState, useEffect } from 'react';
import '../styles/Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/slider1.jpg',
      title: 'Explore Sri Lanka',
      description: 'Discover the beauty of Sri Lanka with LocalLens'
    },
    {
      image: '/slider2.jpg',
      title: 'Experience Local Culture',
      description: 'Immerse yourself in the rich Sri Lankan heritage'
    },
    {
      image: '/slider3.jpg',
      title: 'Adventure Awaits',
      description: 'Embark on thrilling journeys across the island'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;