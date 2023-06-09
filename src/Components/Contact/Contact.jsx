import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "../../Scss/Contact.scss";
import call from "../../Image/Logos/call.png";
import contactinfo from "../../Image/SectionImage/contactus.png";
import topbackground from "../../Image/SectionImage/contact-top.png";
import Footer from "../Footer/Footer";
import email from '../../Image/Logos/email.png';
import address from '../../Image/Logos/address.png';
import starts from '../../Image/Logos/Star nimation.png';

function Contact() {
  return (
    <div className="contact-components" id="contact">
      <div className="contact-container">
        <div className="top-div">
          <img
            src={topbackground}
            alt="background"
            className="background-top"
          />
          <div className="header-container">
            <div className="left">
              <div className="items">
                <h3>Contact Us</h3>
                <div className="links">
                  <AiOutlineHome className="icons" />
                  <p>Home / Contact Us</p>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>

        <div className="contact-mid-div">
          <div className="content">
            <div className="left">
              <h3 className="heading">Need to know more</h3>
              <div className="heading">
                <img src={starts} alt="start" /> on details?</div>

              <div className="contact-details">
                <div className="item">
                  <img src={call} alt="call" />
                  <div className="details">
                    <h3>Call Us</h3>
                    <div className="point">
                      <p>Office : +91 6292006000</p>
                      <p>Support : +91 6292007000</p>
                      <p>Helpline : +91 6292009000</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img src={email} alt="call" />
                  <div className="details">
                    <h3>Email</h3>
                    <div className="point">
                      <p>energiccropscience@gmail.com</p>
                      <p>support@energiccropscience.com</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <img src={address} alt="call" />
                  <div className="details">
                    <h3>Address</h3>
                    <div className="point">
                      <p>
                        117/B, Hem Chandra Naskar Road <br />
                        Kolkata, West Benagal <br />
                        India, 700010
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <img src={contactinfo} alt="contact-info" className="contactus" />
            </div>

            <div className="right">
              <div className="form-container">
                <h3>Get In Touch</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <form action="" className="form">
                  <div className="input-grup">
                    <div className="input-box">
                      <input type="text" />
                      <p></p>
                    </div>

                    <div className="input-box">
                      <input type="text" />
                      <p></p>
                    </div>
                  </div>

                  <div className="input-box-outer">
                    <input type="text" name="" id="" />
                    <p></p>
                  </div>

                  <div className="textarea-box">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p></p>
                  </div>

                  <button>SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer top={"#contact"} />
      </div>
    </div>
  );
}

export default Contact;
