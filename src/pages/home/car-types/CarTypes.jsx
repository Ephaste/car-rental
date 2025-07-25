import React from 'react';
import './CarTypes.scss';

import TruckImg from '../../../assets/imgs/truck.jpg';
import LuxurySedanImg from '../../../assets/imgs/sedan.jpg';
import SedanImg from '../../../assets/imgs/sedan2.jpg';
import SportsCarImg from '../../../assets/imgs/sports.jpg';
import HatchbackImg from '../../../assets/imgs/hatch.jpg';
import SUVImg from '../../../assets/imgs/suv.jpg';

const carData = [
  { name: 'Truck', image: TruckImg },
  { name: 'Luxury Sedan', image: LuxurySedanImg },
  { name: 'Sedan', image: SedanImg },
  { name: 'Sports Car', image: SportsCarImg },
  { name: 'Hatchback', image: HatchbackImg },
  { name: 'SUV', image: SUVImg },
];

const CarTypes = () => {
  return (
    <div className="containerT">
      <button className="brand-btn">CAR TYPES</button>
      <h2>Explore Car Types</h2>
      <div className="car-cards">
        {carData.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTypes;
