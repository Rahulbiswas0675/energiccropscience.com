import React, { useState } from 'react';
import { Aboutus } from '../../Database/Database';
import { useNavigate } from 'react-router-dom';
import { ProductsItems } from '../../Database/Database';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CompanyInfo, BrandData, ReviewsItem } from '../../Database/Database';
import { TbSend } from "react-icons/tb";
import imgabout from '../../Image/image/img1.png';

const schema = yup.object({
    name: yup.string().required("Please Enter Valid Name"),
    mobile_no: yup.string().required("Please Enter Valid Number"),
    email: yup.string().required("Please Enter Valid Email"),
    message: yup.string().required("Please Enter Your Message"),
}).required();
function Home() {
    
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <div className="Home">
            <div className="about">
                <div className="left">
                    <img src={imgabout} alt="About Image" />
                </div>
                <div className="right">
                    <h3>About Us</h3>
                    <div className="details">
                        <h4>{Aboutus.we_are}</h4>
                        <h5>{Aboutus.tag}</h5>
                        <p>{Aboutus.pera}</p>
                        <p>{Aboutus.pera2}</p>
                        <button onClick={() => navigate('./about')}>Read More</button>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="products-div">
                    <div className="box">
                        <h4>{ProductsItems.product_head}</h4>
                        <p>{ProductsItems.product_pera}</p>
                    </div>
                    <div className="products">
                        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
                            {
                                ProductsItems.productsA.map(items => (
                                    <Carousel.Item key={items.id} className="product-box">
                                        <div className="items-box">
                                            <img className="d-block w-100" src={items.product_img} alt={items.product_name} />
                                            <div className="details">
                                                <h3>{items.product_name}</h3>
                                                <p>{items.product_tag}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="border-blank">
                </div>
            </div>

            <div className="reviews">
                <div className="box-container">
                    <div className="container-items">
                        {
                            ReviewsItem.map((item) => (
                                <div className="item" key={item.id}>
                                    <img src={item.icon} alt={item.icon} />
                                    <div className="details">
                                        <h3>{item.count}</h3>
                                        <p>{item.head}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="contact">

                <div className="item-container">
                    <div className="left-container">
                        <div className="items">
                            <h3>Need to know more on details?</h3>
                        </div>
                        <div className="details">
                        </div>
                    </div>
                    <div className="right-container">
                        <h3 className="send-message">Send Message<TbSend /></h3>
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

                <div className="company">
                    <img src={BrandData.brand_logo} alt="log" />

                    <div className="details">

                        <div className="details-item">
                            <h6>Call Us</h6>
                            <div className="item">
                                <p>Office : {CompanyInfo.company_phn_no}</p>
                                <p>Support : {CompanyInfo.company_sec_phn_no}</p>
                                <p>Helpline : {CompanyInfo.company_helpline}</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <h6>Email</h6>
                            <div className="item">
                                <p>{CompanyInfo.company_email}</p>
                                <p>{CompanyInfo.support_mail}</p>
                            </div>
                        </div>

                        <div className="details-item">
                            <h6>Address</h6>
                            <div className="item">
                                <p>{CompanyInfo.company_address.floor}, {CompanyInfo.company_address.city}</p>
                                <p>{CompanyInfo.company_address.dist}, {CompanyInfo.company_address.state}</p>
                                <p> {CompanyInfo.company_address.country}, {CompanyInfo.company_address.pin}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;