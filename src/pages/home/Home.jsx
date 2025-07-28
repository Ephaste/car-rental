import React from 'react';
import Slide from './slide/Slide';
import SearchForm from './searchForm/SearchForm';
import Brands from './brands/Brands';
import PopularCars from './popular-cars/PopularCars'
import CarTypes from './car-types/CarTypes';
import Explore from './explore/Explore';
import Footer from '../../components/footer/Footer';
import Latest from './latest/Latest';

const Home = () => {
  return (
    <div className="home-container">
      <Slide />
      <SearchForm />
      <PopularCars />
      <CarTypes />
      <Explore />
      <Latest />
    </div>
  );
};

export default Home;
