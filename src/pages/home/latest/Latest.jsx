import React, { useRef } from 'react';
import './Latest.scss';
import { FaMapMarkedAlt, FaCalendarAlt, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import car1 from '../../../assets/imgs/news1.jpg';
import car2 from '../../../assets/imgs/news2.jpg';
import car3 from '../../../assets/imgs/news3.jpg';

const cards = [
  {
    img: car1,
    date: '07/31/2024',
    text: '10 European ski destinations you should visit this winter',
  },
  {
    img: car2,
    date: '07/31/2024',
    text: 'Booking travel during Corona: Find who are giving services',
  },
  {
    img: car3,
    date: '07/31/2024',
    text: 'Top Luxury Cars of 2023 Style, Comfort, and Performance',
  },
  {
    img: car1,
    date: '08/01/2024',
    text: 'Why electric cars are reshaping city roads',
  },
  {
    img: car2,
    date: '08/02/2024',
    text: 'How autonomous vehicles are tested for safety',
  },
  {
    img: car3,
    date: '08/03/2024',
    text: 'The ultimate road trip checklist for 2025',
  },
];

const Latest = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="containerP">
      <button className="brand-btn">LATEST NEWS</button>
      <h2>Latest Press Update</h2>

      <div className="slider-controls">
        <button className="nav-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="news-container" ref={scrollRef}>
          {cards.map((card, index) => (
            <div className="news-card" key={index}>
              <img src={card.img} alt={`News ${index}`} />
              <div className="news-info">
                <div className="date-div">
                  <button className="city-btn">CITY NEWS</button>
                  <FaCalendarAlt className="icon-n" />
                  <span className="date">{card.date}</span>
                </div>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Latest;
