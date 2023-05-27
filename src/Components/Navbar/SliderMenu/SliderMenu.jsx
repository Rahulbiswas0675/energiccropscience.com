import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "../../../App";
import { RiArrowDownSLine } from "react-icons/ri";

function SliderMenu() {
  const { getProductName, getPageName, postClsName, getClsName } =
    useContext(Global);

  return (
    <div className={postClsName}>
      <div className="menus-items">
        <div className="item">
          <Link
            to="/"
            className="links"
            onClick={() => {
              getPageName("home");
              getClsName("slider-menu-bar");
            }}
          >
            Home
          </Link>
        </div>
        <div className="product-div item">
          <div className="products">
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              Products
            </Link>
            <RiArrowDownSLine className="pro-icon" />
          </div>
          <div className="products-menu">
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getProductName("All-Products");
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              All Products
            </Link>
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getProductName("Insecticide");
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              Insecticide
            </Link>
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getProductName("Fungicide");
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              Fungicide
            </Link>
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getProductName("Herbicide");
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              Herbicide
            </Link>
            <Link
              to="/products"
              className="links"
              onClick={() => {
                getProductName("Pgr");
                getPageName("products");
                getClsName("display-hide");
              }}
            >
              Pgr
            </Link>
          </div>
        </div>
        <div className="item">
          <Link
            to="/about"
            className="links"
            onClick={() => {
              getPageName("about");
              getClsName("display-hide");
            }}
          >
            About
          </Link>
        </div>
        <div className="item">
          <Link
            to="/certificates"
            className="links"
            onClick={() => {
              getPageName("certificates");
              getClsName("display-hide");
            }}
          >
            Certificates
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SliderMenu;
