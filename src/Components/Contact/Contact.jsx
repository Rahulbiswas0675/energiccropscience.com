import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "../../Scss/Contact.scss";
import call from "../../Image/Logos/call.png";
import contactinfo from '../../Image/SectionImage/contactus.png';
import topbackground from "../../Image/SectionImage/contact-top.png";
import Footer from "../Footer/Footer";
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

              <h3 className="heading">
                Need to know more
                <br />
                on details?
              </h3>

              <div className="contact-details">
                <div className="item">
                  <img src={call} alt="call" />
                  <div className="details">
                    <h3>Call Us</h3>
                    <p>Office : +91 6292006000</p>
                    <p>Support : +91 6292007000</p>
                    <p>Helpline : +91 6292009000</p>
                  </div>
                </div>

                <div className="item">
                  <img src={call} alt="call" />
                  <div className="details">
                    <h3>Call Us</h3>
                    <p>Office : +91 6292006000</p>
                    <p>Support : +91 6292007000</p>
                    <p>Helpline : +91 6292009000</p>
                  </div>
                </div>

                <div className="item">
                  <img src={call} alt="call" />
                  <div className="details">
                    <h3>Call Us</h3>
                    <p>Office : +91 6292006000</p>
                    <p>Support : +91 6292007000</p>
                    <p>Helpline : +91 6292009000</p>
                  </div>
                </div>
              </div>

              <img src={contactinfo} alt="contact-info" className="contactus"/>
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
                      <p>error</p>
                    </div>

                    <div className="input-box">
                      <input type="text" />
                      <p>error</p>
                    </div>

                  </div>

                  <div className="input-box-outer">
                    <input type="text" name="" id="" />
                    <p>error</p>
                  </div>

                  <div className="textarea-box">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p>error</p>
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
