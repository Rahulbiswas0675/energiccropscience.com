import React from "react";
import backgroud from "../../Image/SectionImage/aboutus.png";
import treeimg from '../../Image/SectionImage/tree.png';
import aboutus from '../../Image/SectionImage/About-Us-text.png';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-components">
      <img src={backgroud} alt="Background" className="background" />
      <div className="about-container">
        <div className="left">
          <div className="subject">
            <h3>About Us</h3>
            <h2>We Are The Leader In</h2>
            <p className="tags">Manufacturer of Pesticides & Fertilizer</p>
            <p className="p-tag p">
              Energic Crop Science was well-established in the year 2022 with
              more than 20 years of experience in agro chemical industries with
              energetic people, the company is dealing in all kinds of chemicals
              and PGR products which are used in major agriculture crops.
            </p>
            <p className="p-tag">
              We are committed to maintain industry standards and best practices
              for a pollution-free production activity and make sure that our
              products are environmentally safe and secure.
            </p>
            <button onClick={() => {
              navigate('/about')
            }}>READ MORE</button>
          </div>
        </div>
        <div className="right">
            <div className="item item1">
                <h3>Vision</h3>
                <p>To be peerless among the stalwarts of the agrochemical and fertilizer industry.</p>
            </div>
            <div className="item item2">
                <h3>Mission</h3>
                <p>To provide the best quality of products to the farmers through constant innovation.</p>
            </div>
            <div className="item item3">
                <h3>Client Satisfaction</h3>
                <p>We work passionately with all focus to meet the exact requirement of our clients/farmers to provide the highest level of customer satisfaction.</p>
            </div>
        </div>
      </div>
        <img src={treeimg} alt="Plant" className="treeimg"/>
        <img src={aboutus} alt="Text" className="aboutus-text" />
    </div>
  );
}

export default About;
