import React from 'react';
import { Aboutus } from '../../Database/Database';
import Reviews from '../Review/Reviews';
function AboutUs() {
  return (
    <div className="AboutUs-Components">
      <h3 className="about-head">About Us</h3>
      <div className="about-container">
        <div className="back-box">

          <div className="about-items">
            <div className="left">
              <img src={Aboutus.img} alt="About-Img"/>
            </div>
            <div className="right">
              <h4>{Aboutus.we_are}</h4>
              <h3>{Aboutus.tag}</h3>
              <p>{Aboutus.pera}</p>
              <p>{Aboutus.pera2}</p>
              <button>Lern More</button>
            </div>
          </div>
          <Reviews/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs