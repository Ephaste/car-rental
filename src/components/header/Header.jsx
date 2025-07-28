import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      {/* Left: Opening Hours */}
      <div className="opening-hours">
        <i className="far fa-clock"></i>  Working, 24hrs /7 days
      </div>

      {/* Center: Phone */}
      <div className="phone">
        <i className="fas fa-phone-alt"></i> +250 788 891 625 / +250 788 212 648
      </div>

      {/* Right: Socials */}
      <div className="right-section">
        <div className="social-label">On social:</div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
