import React from 'react';
import './Brands.scss';

import audiImg from '../../../assets/imgs/audi.jpg';
import bmwImg from '../../../assets/imgs/bmw.jpg';
import mercedesImg from '../../../assets/imgs/benz.jpg';
import teslaImg from '../../../assets/imgs/tesla.png';
import volkswagenImg from '../../../assets/imgs/volkswagen.jpg';
import porscheImg from '../../../assets/imgs/porsche.jpg';

const brandData = [
  { name: 'Audi', image: audiImg },
  { name: 'BMW', image: bmwImg },
  { name: 'Mercedes Benz', image: mercedesImg },
  { name: 'Tesla Motors', image: teslaImg },
  { name: 'Volkswagen', image: volkswagenImg },
  { name: 'Porsche', image: porscheImg },
];

const Brands = () => {
  return (
    <div className="brands-section">
      <div className="container">
        <button className="brand-btn">BRANDS</button>
        <h2>Explore premium Car brands</h2>
        <div className="cards">
          {brandData.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.image} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
