import React from "react";
import imgs from "../../Image/SectionImage/heroimg.png";
import scroolimg from "../../Image/Logos/scrool.png";
import { HiArrowLongDown } from "react-icons/hi2";
import { HiArrowLongUp } from "react-icons/hi2";

function Home() {
  return (
    <div className="home-container">
      <img src={imgs} alt="background-image" className="background-image" />

      <div className="body-section">

        <div className="heading-box">
          <h1 className="header">Enhance Crop Health with</h1>
          <h3 className="tag">INSECTICIDE</h3>
          <button className="knomore-btn">Know More</button>
        </div>

        <div className="page-counter-box">
          <div className="counter-container">
            <HiArrowLongUp className="icons" />
            <h3 className="page">
              01<span className="count">/05</span>
            </h3>
            <HiArrowLongDown className="icons" />
          </div>
        </div>

        <div className="scroolimg">
          <HiArrowLongDown className="icons" />
          <div className="bg-div">
            <img src={scroolimg} alt="rotating" className="scroll-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
