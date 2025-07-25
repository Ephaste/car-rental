import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="containerC">
      <section className="contact-hero">
        <h2>Contact</h2>
      </section>
      <section className='contact-info'>
         <button className="contact-btn">CONTACT DETAILS</button>
        <h2>Contact Informations</h2>
        <div className="contact-cards">
  {/* Location */}
  <div className="contact-card">
    <div className="icon-box">
      <i className="fas fa-map-marker-alt"></i>
    </div>
    <h3>Our Location</h3>
    <p>1901 Thornridge Cir. Shiloh, Hawaii</p>
    <p>81063</p>
  </div>

  {/* Email */}
  <div className="contact-card">
    <div className="icon-box">
      <i className="fas fa-envelope"></i>
    </div>
    <h3>Email Address</h3>
    <p>carrental@gmail.com</p>
    <p>admin@carrental.com</p>
  </div>

  {/* Phone */}
  <div className="contact-card">
    <div className="icon-box">
      <i className="fas fa-phone-alt"></i>
    </div>
    <h3>Phone Number</h3>
    <p>Emergency Cases</p>
    <p>+(250) 788 891 625 (24/7)</p>
  </div>
</div>

      </section>
      <section className='from'>
 <button className="contact-btn">GET IN TOUCH</button>
        <h2>Send A Message</h2>
        <form className="contact-form">
  <div className="input-group">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your email" required />
  </div>
  <textarea placeholder="Type message" rows="6" required></textarea>

  <div className="form-checkbox">
    <input type="checkbox" id="save" />
    <label htmlFor="save">
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  <button type="submit" className="submit-btn">Post Comment</button>
</form>

      </section>
    </div>
  );
};

export default Contact;
