import { useEffect, useState, useRef } from 'react';
import { slideData } from './SlideData';
import './Slide.scss';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slideData.length;
  const autoScroll = true; // Enable auto-scrolling
  let slideInterval;
  const intervalTime = 5000; // 5 seconds per slide
  const sliderRef = useRef(null); // Reference to slider container

  // Auto-scroll function
  const nextSlide = () => {
    if (currentSlide === slideLength - 1) {
      // Reset to first slide
      setCurrentSlide(0);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none'; // Disable transition for reset
        sliderRef.current.style.transform = `translateX(0%)`;
        // Trigger reflow to ensure instant reset
        sliderRef.current.offsetHeight;
        setTimeout(() => {
          sliderRef.current.style.transition = 'transform 1.5s ease-in-out';
        }, 0);
      }
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Reset to first slide on mount
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // Update transform based on currentSlide
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slider-wrapper" ref={sliderRef}>
        {slideData.map((slide, index) => {
          const { image, tag, heading, desc, buttonText } = slide;
          return (
            <div
              key={index}
              className={index === currentSlide ? 'slide current' : 'slide'}
            >
              <div className="slide-container">
                <div className="content">
                  <div className="left">
                    <button className="tag-btn">{tag}</button>
                    <h2>{heading}</h2>
                    <p>{desc}</p>
                    <button className="contact-btn">{buttonText}</button>
                  </div>
                  <div className="right">
                    <img src={image} alt="car" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;