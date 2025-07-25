import React from 'react';
import './SearchForm.scss';
import { FaMapMarkedAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const SearchForm = () => {
  return (
    <div className="search-form">
      {/* Destination */}
      <div className="form-group">
        <FaMapMarkedAlt className="icon" />
        <div className="input-wrapper">
          <label>Your Destination</label>
          <input type="text" placeholder="Enter Location Here ..." />
        </div>
      </div>

      {/* Start Date */}
      <div className="form-group">
        <FaCalendarAlt className="icon" />
        <div className="input-wrapper">
          <label>When to Start</label>
          <input type="text" placeholder="dd/mm/yyyy" />
        </div>
      </div>

      {/* End Date */}
      <div className="form-group">
        <FaCalendarAlt className="icon" />
        <div className="input-wrapper">
          <label>When to Finish</label>
          <input type="text" placeholder="dd/mm/yyyy" />
        </div>
      </div>

      {/* Passengers */}
      <div className="form-group">
        <FaUsers className="icon" />
        <div className="input-wrapper">
          <label>No. Of Peoples</label>
          <input type="text" placeholder="Number of Passengers" />
        </div>
      </div>

      {/* Search Button */}
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchForm;
