import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import farma from "../../Image/SectionImage/farmer-contact.png";
import sideImg from '../../Image/SectionImage/Connectus-side-text.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required('Name is a required field'),
    email: yup.string().required('Email is a required field'),
    number: yup.string().required('Number is a required field'),
    message: yup.string().required('Message is a required field'),
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

  const onSubmit = (data) => console.log(data);
  return (
    <div className="contact-components">
      <div className="contact-container">
        <div className="left">
          <h3 className="head">Contact us</h3>
          <h3 className="tag">Need to know more on details?</h3>

          <div className="item">
            <div className="logo">
              <FiPhoneCall className="icon" />
            </div>
            <div className="details">
              <h4>Call Us</h4>
              <p>6292009000</p>
            </div>
          </div>

          <div className="item">
            <div className="logo">
              <FaWhatsapp className="icon" />
            </div>
            <div className="details">
              <h4>WhatsApp</h4>
              <p>6292006000</p>
            </div>
          </div>

          <div className="item">
            <div className="logo">
              <FiMail className="icon" />
            </div>
            <div className="details">
              <h4>Email</h4>
              <p>support@energiccropscience.com</p>
            </div>
          </div>

          <p className="para">
            To get in touch with them, you can contact us for any inquiries or
            assistance.
          </p>

          <div className="social-network">
            <h4 className="follow">Follow us</h4>

            <div className="medias">
              <a href="https://www.facebook.com/profile.php?id=100093678292420" target="_blank">
                <BsFacebook className="fb" />
              </a>
              <a href="https://www.instagram.com/energiccropscience" target="_blank">
                <BsInstagram className="in" />
              </a>
              <a href="https://twitter.com/Energiccrop" target="_blank">
                <BsTwitter className="tw" />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="form-container">
            <h3 className="head">Let’s Connect</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="form-box">
              <div className="input-group">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input"
                    name="name"
                    {...register("name")}
                  />
                  <p>{errors.name?.message}</p>
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input"
                    name="email"
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                </div>
              </div>
              <div className="input-box">
                <input
                  type="number"
                  placeholder="Your Number"
                  className="input number"
                  name="number"
                  {...register("number")}
                />
                <p>{errors.number?.message}</p>
              </div>
              <div className="textarea-box">
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="How can we help ?"
                  {...register("message")}
                ></textarea>
                <p>{errors.message?.message}</p>
              </div>

              <button className="send-btn" type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <img src={farma} alt="contactus" className="contact-farma" />
      </div>
      <img src={sideImg} alt="Contact Us" className="Side-text"/>
    </div>
  );
}

export default Contact;
