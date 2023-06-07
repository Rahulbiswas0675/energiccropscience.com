import React, { useContext } from "react";
import background from "../../Image/SectionImage/footerimg.png";
import logo from "../../Image/Logos/LOGO.png";
import backL from "../../Image/Logos/backleft.png";
import bacKR from "../../Image/Logos/backright.png";
import '../../Scss/Footer.scss';
import { Global } from "../../App";
import { Link } from "react-router-dom";
function Footer(props) {
  const { getProductPage } = useContext(Global);
  return (
    <div className="footer-components">
      <div className="footer-container">
        <img src={background} alt="background" className="background-img" />
        <div className="footer-items">
          <div className="box-1">
            <img src={logo} alt="logo" className="logos" />
            <p className="address">
              117/B, Hem Chandra Naskar Road <br /> Kolkata, West Benagal <br />
              India, 700010
            </p>
          </div>
          <div className="box-2">
            <div className="box-item">
              <h3 className="head">Navigation</h3>
              <div className="body">
                <a href="/" className="links">
                  Home
                </a>
                <a href="/about" className="links">
                  About Us
                </a>
                <a href="/products" className="links">
                  Products
                </a>
                <a href="/contact" className="links">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="box-item">
              <h3 className="head">Our Products</h3>
              <div className="body">
                <Link to="/products" className="links" onClick={()=>{
                  getProductPage("Insecticide");
                }}>
                  Insecticide
                </Link>
                <Link to="/products" className="links" onClick={()=>{
                  getProductPage("Fungicide");
                }}>
                  Fungicide
                </Link>
                <Link to="/products" className="links" onClick={()=>{
                  getProductPage("Herbicide");
                }}>
                  Herbicide
                </Link>
                <Link to="/products" className="links" onClick={()=>{
                  getProductPage("PGR");
                }}>
                  Pgr
                </Link>
              </div>
            </div>

            <div className="box-item">
              <h3 className="head">Call Us</h3>
              <div className="body">
                <a href="tel:6292006000" className="links">
                  Office : +91 6292006000
                </a>
                <a href="tel:6292007000" className="links">
                  Support : +91 6292007000
                </a>
                <a href="tel:6292009000" className="links">
                  Helpline : +91 6292009000
                </a>
              </div>
            </div>

            <div className="box-item">
              <h3 className="head">Email</h3>
              <div className="body">
                <a href="mailto:energiccropscience@gmail.com" className="links">
                  Energiccropscience@gmail.com
                </a>
                <a href="mailto:support@energiccropscience.com" className="links">
                  Support@energiccropscience.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-tag-line">
          <p className="tag">
            @ {new Date().getFullYear()} Energic Crop Science
          </p>
          <p className="tag">
            Created by <a
              href="http://www.techaquarius.com"
              target="_blank"
              className="made-by"
              rel="noreferrer"> techaquarius.com</a>
          </p>
        </div>
        <div className="back-to-top">
            <img src={backL} alt="back-left" className="arrow-icon"/>
            <a href={props.top} className="top-btn">Back To Top</a>
            <img src={bacKR} alt="back-left" className="arrow-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
