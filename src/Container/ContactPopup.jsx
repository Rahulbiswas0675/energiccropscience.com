import React, { useContext } from "react";
import "./ContactPopup.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as yup from "yup";
import { Global } from "../App";
const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().required("Email is a required field"),
    number: yup.string().required("Number is a required field"),
    message: yup.string().required("Message is a required field"),
  })
  .required();

function ContactPopup() {
  const { getPopup } = useContext(Global);
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
    if (window.Email) {
      window.Email.send(config)
        .then(() => {
          alert("Message Send Success");
          localStorage.setItem("message", "Done")
          getPopup(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="contact-popup">
      <div className="right">
        <div className="form-container">
          <AiOutlineCloseCircle className="close_btn" onClick={()=> getPopup(false)}/>
          <h3>Get In Touch</h3>
          <p>
            Have a question? Just fill in the form and our representative will
            answer your query in 10 hours
          </p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-grup">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>
              </div>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </div>
            </div>

            <div className="input-box-outer">
              <input
                type="number"
                placeholder="Your Number"
                className="number"
                name="number"
                {...register("number")}
              />
              <p>{errors.number?.message}</p>
            </div>

            <div className="textarea-box">
              <textarea
                name="message"
                placeholder="How can we help ?"
                {...register("message")}
              ></textarea>
              <p>{errors.message?.message}</p>
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
