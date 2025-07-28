import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from './SlideData';
import "./Slide.scss";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="overlay"></div> {/* 👈 Added overlay */}
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <a href="/register">Find Out How</a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
