import React from 'react'
import { LuUsers } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./Explore.scss"

const Explore = () => {
  return (
    <div>
      <div className="line"></div>
      <div className='containerE'>
        <div className='carde one'>
          <button className="brand-btnp">WE ARE THE BEST</button>
          <h2 className='title'>Explore The world with your own way of driving.</h2>
        </div>

        <div className='carde two'>
            <div className='icon-div'>
          <HiOutlineLocationMarker  className="icon" />
          </div>
          <h3>Free Pick Up & Drop</h3>
          <p>
            Your convenience matters. Complimentary pick-up and drop-off service for your vehicle —
            a truly stress-free experience.
          </p>
        </div>

        <div className='carde two'>
         <div className='icon-div'>
          <LuUsers className="icon" />
          </div>
          <h3>24/7 Road Assistance</h3>
          <p>
            No matter the time or place, our 24/7 roadside assistance ensures you're never stranded.
            Drive confidently with support always available.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Explore
