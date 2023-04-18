import React from 'react';
import { Aboutus } from '../Database/Database';
function AboutUs() {
  return (
    <div className="AboutUs-Components">
      <div className="about-container">
        <h3 className="about-head">About Us</h3>

        <div className="about-items">
          <div className="left">
            <img src={Aboutus.img} alt="Image" />
          </div>
          <div className="right">
              <h4>{Aboutus.we_are}</h4>
              <h3>{Aboutus.tag}</h3>
              <p>{Aboutus.pera}</p>
              <p>{Aboutus.pera2}</p>
              <button>Lern More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs