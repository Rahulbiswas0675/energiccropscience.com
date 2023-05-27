import React, { useState, useEffect, useContext } from "react";
import { Global } from "../../../App";
import logo from "../../../Image/Logos/LOGO.png";
import { CgMenuLeftAlt } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

function HomeNavbar() {
  const {postClsName, getClsName} = useContext(Global);
  const navigate = useNavigate();
  return (
    <div className="home-nav-container">

      <div className="menu-btn">
        <CgMenuLeftAlt className="icons" onClick={()=>{
          if(postClsName === "slider-menu-bar"){
            getClsName("display-hide");
          }else{
            getClsName("slider-menu-bar")
          }
        }}/>
        <img src={logo} alt="logo" className="logo-img"/>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" onClick={() => {
          navigate('/');
          getClsName("slider-menu-bar");
        }}/>
      </div>
      <div className="contact-btn">
        <button className="button" onClick={() => {
          navigate('/contact');
          getClsName("display-hide");
        }}>
          Contact us
        </button>
      </div>
      
    </div>
  )
}

export default HomeNavbar