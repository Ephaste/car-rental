import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-car">FGS</span>
        <span className="logo-rental">Car rental</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>

        <li className="dropdown">
          <a href="#">Cars <i className="fas fa-chevron-down"></i></a>
          <ul className="dropdown-menu">
            <li><a href="#">Cars for Rental</a></li>
            <li><a href="#">Cars for Selling</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Services <i className="fas fa-chevron-down"></i></a>
          <ul className="dropdown-menu">
            <li><a href="#">Car Insurance</a></li>
            <li><a href="#">Driver Support</a></li>
          </ul>
        </li>

        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      {/* Right Actions */}
      <div className="nav-actions">
        <i className="fas fa-search"></i>
       <Link to="/book" className="book-btn">Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
