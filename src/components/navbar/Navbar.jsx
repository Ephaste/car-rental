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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        <li className="dropdown">
          <Link to="#">Cars <i className="fas fa-chevron-down"></i></Link>
          <ul className="dropdown-menu">
            <li><Link to="/cars/rental">Cars for Rental</Link></li>
            <li><Link to="/cars/selling">Cars for Selling</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="#">Services <i className="fas fa-chevron-down"></i></Link>
          <ul className="dropdown-menu">
            <li><Link to="/services/insurance">Car Insurance</Link></li>
            <li><Link to="/services/support">Driver Support</Link></li>
          </ul>
        </li>

        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
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
