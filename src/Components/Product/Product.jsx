import React, { useContext, useState, useEffect } from "react";
import "../../Scss/Product.scss";
import Footer from "../Footer/Footer";
import productimg from "../../Image/SectionImage/productimg.png";
import { AiOutlineHome } from "react-icons/ai";
import {
  allproducts,
  Insecticideproducts,
  Fungicideproducts,
  Herbicideproducts,
  PGRproducts,
} from "../../AllDatas/Products";
import { Link } from "react-router-dom";
import { Global } from "../../App";

function Product() {
  const { getProductPage, postProductPage, getProductItem } = useContext(Global);
  const [productItem, setProductItem] = useState(allproducts);

  useEffect(() => {
    if (postProductPage === "Insecticide") {
      setProductItem(Insecticideproducts);
    } else if (postProductPage === "Fungicide") {
      setProductItem(Fungicideproducts);
    } else if (postProductPage === "Herbicide") {
      setProductItem(Herbicideproducts);
    } else if (postProductPage === "PGR") {
      setProductItem(PGRproducts);
    } else {
      setProductItem(allproducts);
    }
  }, [postProductPage]);

  return (
    <div className="product-components" id="product">
      <div className="product-containerr">
        <div className="top-div">
          <div className="header-container">
            <div className="left">
              <div className="items">
                <h3>Products</h3>
                <div className="links">
                  <AiOutlineHome className="icons" />
                  <p>Home / Products</p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={productimg} alt="About US" className="aboutus" />
            </div>
          </div>
        </div>

        <div className="product-list">
          <div className="list-head">
            <h3>Products</h3>
            <div className="sort-box"></div>
          </div>

          <div className="devider"></div>

          <div className="tabs">
            <p
              className={postProductPage === "All-Products" ? "active" : "deactive"}
              onClick={() => {
                getProductPage("All-Products");
              }}
            >
              All Products
            </p>
            <p
              className={postProductPage === "Insecticide" ? "active" : "deactive"}
              onClick={() => {
                getProductPage("Insecticide");
              }}
            >
              Insecticide
            </p>
            <p
              className={postProductPage === "Fungicide" ? "active" : "deactive"}
              onClick={() => {
                getProductPage("Fungicide");
              }}
            >
              Fungicide
            </p>
            <p
              className={postProductPage === "Herbicide" ? "active" : "deactive"}
              onClick={() => {
                getProductPage("Herbicide");
              }}
            >
              Herbicide
            </p>
            <p
              className={postProductPage === "PGR" ? "active" : "deactive"}
              onClick={() => {
                getProductPage("PGR");
              }}
            >
              Plant growth regulators
            </p>
          </div>

          <div className="list-items">
            {productItem.map((item) => (
              <div className="item" key={item.id}>
                <div className="img-box">
                  <img src={item.product_img} alt={item.product_name} />
                </div>
                <div className="details">
                  <h5>{item.product_name}</h5>
                  <h6>{item.product_name}</h6>
                </div>
                <p>{item.product_tag}</p>
                <Link to="/product/details" className="button" onClick={() => {
                  getProductItem(item);
                }}> 
                  VIEW DETAILS
                </Link>
              </div>
            ))}
          </div>

          {/* <button className="load-more">Load more</button> */}
        </div>

        <Footer top={"#product"} />
      </div>
    </div>
  );
}

export default Product;
