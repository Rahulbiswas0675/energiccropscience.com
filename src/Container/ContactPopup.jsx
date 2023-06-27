import React from "react";
import "./ContactPopup.scss";
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

function ContactPopup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact-popup">
      <div className="right">
        <div className="form-container">
          <h3>Get In Touch</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
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
