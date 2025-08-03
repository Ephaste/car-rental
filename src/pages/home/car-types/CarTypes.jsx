import React from 'react';
import './CarTypes.scss';

import HybridImg from '../../../assets/imgs/hybrid.jpg';
import CoasterImg from '../../../assets/imgs/coaster.jpg';
import minibusImg from '../../../assets/imgs/minibus.jpg';
import ElectricCarImg from '../../../assets/imgs/electric.jpg';
import V8Img from '../../../assets/imgs/v8.jpg';
import TXLImg from '../../../assets/imgs/TXL.jpg';

const carData = [
  { name: 'Hybrid', image: HybridImg },
  { name: 'Coaster', image: CoasterImg },
  { name: 'Mini bus', image: minibusImg },
  { name: 'Electric', image: ElectricCarImg },
  { name: 'V8', image: V8Img },
  { name: 'TXL', image: TXLImg },
];

const CarTypes = () => {
  return (
    <div className="containerT">
      <button className="brand-btnp">CAR TYPES</button>
      <h2 className='title'>Explore Car Types</h2>
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
