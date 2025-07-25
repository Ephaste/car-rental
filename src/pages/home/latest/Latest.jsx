import React from 'react';
import './Latest.scss';
import { FaMapMarkedAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
// Import local images
import car1 from '../../../assets/imgs/news1.jpg';
import car2 from '../../../assets/imgs/news2.jpg';
import car3 from '../../../assets/imgs/news3.jpg';

const Latest = () => {
  return (
    <div>
      <div className="containerP">
        <button className="brand-btn">LATEST NEWS</button>
        <h2>Latest Press Update</h2>
        <div className="news-container">
          <div className="news-card">
            <img src={car1} alt="Car 1" />
            <div className="news-info">
                    <div className='date-div'>
              <button className="city-btn">CITY NEWS</button> 
              <FaCalendarAlt className="icon-n" />
              <span className="date">07/31/2024</span>
               </div>
              <p>10 European ski destinations you should visit this winter</p>
            </div>
          </div>

          <div className="news-card">
            <img src={car2} alt="Car 2" />
            <div className="news-info">
                  <div className='date-div'>
              <button className="city-btn">CITY NEWS</button>
              <FaCalendarAlt className="icon-n" />
              <span className="date">07/31/2024</span>
               </div>
              <p>Booking travel during Corona: Find who are giving services</p>
            </div>
          </div>

          <div className="news-card">
            <img src={car3} alt="Car 3" />
            <div className="news-info">
                   <div className='date-div'>
              <button className="city-btn">CITY NEWS</button>
              <FaCalendarAlt className="icon-n" />
              <span className="date">07/31/2024</span>
               </div>
              <p>Top Luxury Cars of 2023 Style, Comfort, and Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
