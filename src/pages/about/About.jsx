import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <div className="intro">
          <p>FGS Your Trusted Car Rental Partner!</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Welcome to FGS Car Rentals</h2>
          <p>
            At FGS Car Rentals, we are passionate about providing top-quality car rental services across the globe.
            Founded in 2015, our mission is to make car rentals accessible, affordable, and enjoyable for everyone.
            With a fleet of luxurious and reliable vehicles, we cater to all your travel needs, whether it's a
            business trip or a family vacation.
          </p>
          <p>
            Our team of dedicated professionals works tirelessly to ensure your experience is seamless. From easy
            booking to excellent customer support, we’ve got you covered. Join thousands of satisfied customers who
            trust us for their mobility needs.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>10+ Years</h3>
            <p>Of Experience</p>
          </div>
          <div className="highlight-card">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="highlight-card">
            <h3>100+</h3>
            <p>Vehicles Available</p>
          </div>
        </div>
      </section>

      {/* Remove served-clients section based on your direction */}
      {/* <section className="served-clients">
        <h2>Served Clients</h2>
        <p>We proudly serve a diverse range of clients, from individual travelers to large corporations. Our commitment to excellence has earned us the trust of businesses and families alike.</p>
        <div className="client-logos">
          <div className="client-logo">Client 1</div>
          <div className="client-logo">Client 2</div>
          <div className="client-logo">Client 3</div>
          <div className="client-logo">Client 4</div>
        </div>
      </section> */}

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Amazing service and a wide selection of cars! Highly recommend FGS Rentals."</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-card">
            <p>"The booking process was smooth, and the car was in perfect condition."</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial-card">
            <p>"FGS made our family trip so convenient and stress-free."</p>
            <span>- Ali Kamara</span>
          </div>
          <div className="testimonial-card">
            <p>"Affordable prices and fantastic support. Will definitely use FGS again."</p>
            <span>- Lillian M.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
