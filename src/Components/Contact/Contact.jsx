import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "../../Scss/Contact.scss";
import call from "../../Image/Logos/call.png";
import contactinfo from "../../Image/SectionImage/contactus.png";
import topbackground from "../../Image/SectionImage/contact-top.png";
import Footer from "../Footer/Footer";
import email from "../../Image/Logos/email.png";
import address from "../../Image/Logos/address.png";
import starts from "../../Image/Logos/Star nimation.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field"),
    number: yup.string().required("Number is a required field"),
    message: yup.string().required("Message is a required field"),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const body = `Name: ${data.name}\nNumber: ${data.number}\nEmail: ${data.email}\nMessage: ${data.message}`;
    const config = {
      SecureToken: "8e07b459-b6d4-46a6-9f08-9d11e2dfab18",
      To: "energiccropscience@gmail.com",
      From: "support@energiccropscience.com",
      Subject: "New Contact from Website",
      Body: body,
    };
    const formIs = document.getElementById("form");
    if (window.Email) {
      window.Email.send(config)
        .then(() => {
          alert("Message Send Success");
          formIs.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
                <img src={starts} alt="start" /> on details?
              </div>

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
                  Have a question? Just fill in the form and our representative
                  will answer your query in 10 hours
                </p>
                <form
                  action=""
                  className="form"
                  id="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="input-grup">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        {...register("name")}
                        required
                      />
                    </div>

                    <div className="input-box">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        {...register("email")}
                        required
                      />
                    </div>
                  </div>

                  <div className="input-box-outer">
                    <input
                      type="number"
                      placeholder="Your Number"
                      className="number"
                      name="number"
                      {...register("number")}
                      required
                    />
                  </div>

                  <div className="textarea-box">
                    <textarea
                      name="message"
                      placeholder="How can we help ?"
                      {...register("message")}
                      required
                    ></textarea>
                  </div>

                  <button type="submit">SEND MESSAGE</button>
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
