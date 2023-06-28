import React from "react";
import "../../Scss/About.scss";
import { AiOutlineHome } from "react-icons/ai";
import productimg from "../../Image/SectionImage/aboutus-page.png";
import backgroundimg from "../../Image/SectionImage/about-backgroud.png";
import Footer from "../Footer/Footer";
import vision from "../../Image/Logos/Eyes.png";
import mission from "../../Image/Logos/target.png";
import client from "../../Image/Logos/group.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="aboutus-components" id="about">
      <div className="about-container">
        <div className="top-div">
          <div className="header-container">
            <div className="left">
              <div className="items">
                <h3>About Us</h3>
                <div className="links">
                  <AiOutlineHome className="icons" />
                  <p>Home / About Us</p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={productimg} alt="About US" className="aboutus" />
            </div>
          </div>
        </div>

        <div className="mid-div">
          <img src={backgroundimg} alt="" className="background" />
          <div className="mid-containet">
            <div className="left">
              <h3 className="heading">We Are The Leader In</h3>
              <h4 className="tags">Manufacturer of Pesticides & Fertilizer</h4>
              <p className="para para">
                Energic Crop Science was well-established in the year 2022 with
                more than 20 years of experience in agro chemical industries
                with energetic people, the company is dealing in all kinds of
                chemicals and PGR products which are used in major agriculture
                crops.
              </p>
              <p className="para">
                .We are committed to maintain industry standards and best
                practices for a pollution-free production activity and make sure
                that our products are environmentally safe and secure.
              </p>
              <button className="button" onClick={() => {
                navigate('/contact')
              }}>Contact Us</button>
            </div>
            <div className="right"></div>
          </div>
        </div>

        <div className="last-container">
          <div className="container-box">
            <div className="item">
              <div className="header">
                <img src={vision} alt="vision" className="Vision" />
                <h3>Our Vision</h3>
              </div>
              <p className="para">
                To be peerless among the stalwarts of the agrochemical and
                fertilizer industry.Energic Crop Science will make available the
                very best of agro-inputs of world class quality in the
                reasonable price for the enhancement of agricultural production
                and farmer's wellness.
              </p>
            </div>

            <div className="item">
              <div className="header">
                <img src={mission} alt="vision" className="Mission" />
                <h3>Our Mission</h3>
              </div>
              <p className="para">
                To provide the best quality of products to the farmers through
                constant innovation and tailor made and the development of
                agriculture's positions as one of the most benefited in the
                future.
              </p>
            </div>

            <div className="item">
              <div className="header">
                <img src={client} alt="vision" className="Client" />
                <h3>Client Satisfaction</h3>
              </div>
              <p className="para">We work passionately with all focus to meet the exact requirement of our clients/farmers to provide the highest level of customer satisfaction.   </p>
            </div>
          </div>
        </div>

        <Footer top={"#about"}/>
      </div>
    </div>
  );
}

export default About;
