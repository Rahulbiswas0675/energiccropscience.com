import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  name: yup.string().required("Please Enter Valid Name"),
  mobile_no: yup.string().required("Please Enter Valid Number"),
  email: yup.string().required("Please Enter Valid Email"),
  message: yup.string().required("Please Enter Your Message"),
}).required();

function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="Contact-Components">
      <div className="contact-head">
        <h3>Contact Us</h3>
      </div>
      <div className="contact-container">
        {/* <div className="left-container">

        </div> */}
        <div className="right-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">

            <div className="item">
              <input type="text" placeholder="Your Name" name="name" {...register("name")} className="input-fild"/>
              <p className="errors">{errors.name?.message}</p>
            </div>

            <div className="item">
              <input type="number" placeholder="Your Mobile Number" name="mobile_no" {...register("mobile_no")} className="input-fild number"/>
              <p className="errors">{errors.mobile_no?.message}</p>
            </div>

            <div className="item">
              <input type="email" placeholder="Your Email" name="email" {...register("email")} className="input-fild"/>
              <p className="errors">{errors.email?.message}</p>
            </div>

            <div className="item-text">
              <textarea type="text" placeholder="Your Message" name="message" {...register("message")} className="input-fild-textarea"/>
              <p className="errors">{errors.message?.message}</p>
            </div>
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
