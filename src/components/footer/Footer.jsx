import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <span role="img" aria-label="Carola Logo">🚗FGS</span> Car rental
          </div>
          <p>57 Heol Isaf Station Road, Cardiff, UK</p>
          <p>info@example.com</p>
          <p>029-2021-4012</p>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Our Team</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Area Details</li>
            <li>Blog Grid</li>
            <li>Faq</li>
            <li>Service Areas</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe Newsletter</h4>
          <p>Our estimated global carbon emissions by investing in greenhouse</p>
          <div className="subscribe">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 CarRental, Inc. All Rights Reserved</p>
        <div className="social-links">
          <span>Follow Us On:</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;