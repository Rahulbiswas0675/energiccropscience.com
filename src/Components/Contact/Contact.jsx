import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CompanyInfo } from '../../Database/Database';

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
        <div className="left-container">
          <div className="items">
            <h3>Need to know more on details?</h3>
            <div className="details">
              <h6>Call Us</h6>
              <div className="item">
                <p>Office : {CompanyInfo.company_phn_no}</p>
                <p>Or {CompanyInfo.company_sec_phn_no}</p>
                <p>Helpline : {CompanyInfo.company_helpline}</p>
              </div>

              <h6>Email</h6>
              <div className="item">
                <p>{CompanyInfo.company_email}</p>
                <p>{CompanyInfo.support_mail}</p>
              </div>

              <h6>Address</h6>
              <div className="item">
                <p>{CompanyInfo.company_address.floor}, {CompanyInfo.company_address.city}</p>
                <p>{CompanyInfo.company_address.dist}, {CompanyInfo.company_address.state}</p>
                <p> {CompanyInfo.company_address.country}, {CompanyInfo.company_address.pin}</p>
              </div>



            </div>
          </div>
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form">

            <div className="item">
              <input type="text" placeholder="Your Name" name="name" {...register("name")} className="input-fild" />
              <p className="errors">{errors.name?.message}</p>
            </div>

            <div className="item">
              <input type="number" placeholder="Your Mobile Number" name="mobile_no" {...register("mobile_no")} className="input-fild number" />
              <p className="errors">{errors.mobile_no?.message}</p>
            </div>

            <div className="item">
              <input type="email" placeholder="Your Email" name="email" {...register("email")} className="input-fild" />
              <p className="errors">{errors.email?.message}</p>
            </div>

            <div className="item-text">
              <textarea type="text" placeholder="Your Message" name="message" {...register("message")} className="input-fild-textarea" />
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
