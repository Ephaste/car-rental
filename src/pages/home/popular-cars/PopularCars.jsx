import React from 'react';
import "./PopularCars.scss";
import { FaUserFriends, FaDoorOpen, FaGasPump } from 'react-icons/fa';
import ToyotaLandCruiser from '../../../assets/imgs/toyota-landcruser.jpg';
import NissanGTRTurbo from '../../../assets/imgs/nisan-turbo.jpg';
import MitsubishiPortan from '../../../assets/imgs/mitsubish.jpg';
import BMW740LSeries from '../../../assets/imgs/bmwcar.jpg';
import BMW5Competition from '../../../assets/imgs/bmw-competition.jpg';
import ToyotaLandCruiser2 from '../../../assets/imgs/landCruser.jpg';
const PopularCars = () => {
  return (
    <div className="containerP">
      <button className="brand-btn">POPULAR CARS</button>
      <h2>Most Popular Cars</h2>
      <div className="cards-container">
        <div className="card">
          <img src={ToyotaLandCruiser} alt="Toyota Land Cruiser" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>Toyota Land Cruiser</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
         <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>

            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
        <div className="card">
          <img src={NissanGTRTurbo} alt="Nissan GTR Turbo" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>Nissan GTR Turbo</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
             <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>
            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
        <div className="card">
          <img src={MitsubishiPortan} alt="Mitsubishi Portan" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>Mitsubishi Portan</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
             <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>
            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
        <div className="card">
          <img src={BMW740LSeries} alt="BMW 740L Series" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>BMW 740L Series</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
             <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>
            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
        <div className="card">
          <img src={BMW5Competition} alt="BMW M5 Competition" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>BMW M5 Competition</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
             <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>
            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
        <div className="card">
          <img src={ToyotaLandCruiser2} alt="Toyota Land Cruiser" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h4>Toyota Land Cruiser</h4>
            <p>Komodo Island is one of the only places in the world where you can spot...</p>
             <div className="specs">
  <p><FaUserFriends className="icon-red" /> Seat Capacity: 4 People</p>
  <p><FaDoorOpen className="icon-red" /> Total Doors: 4 Doors</p>
  <p><FaGasPump className="icon-red" /> Fuel Tank: 450 Liters</p>
</div>
            <div className="price">$49/Day</div>
            <button className="popular-btn">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCars;