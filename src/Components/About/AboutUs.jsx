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

          <div className="about-footer">

            <div className="footer-container">
              <div className="box">
                <h4>Our Vision</h4>
                <p>{Aboutus.ourVision}</p>
              </div>
              <div className="box">
                <h4>Our Mission</h4>
                <p>{Aboutus.ourMission}</p>
              </div>

              <div className="box">
                <h4>Client Satifaction</h4>
                <p>{Aboutus.clientSatifaction}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs