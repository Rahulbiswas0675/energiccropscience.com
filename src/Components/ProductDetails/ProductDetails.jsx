import React, { useState, useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import {
  Insecticidesimilarpoduct,
  Fungicidesimilarpoduct,
  PGRsimilarpoduct,
  Herbicidesimilarpoduct,
} from "../../AllDatas/Products";
import { useNavigate } from "react-router-dom";
import { Global } from "../../App";

function ProductDetails() {
  const navigate = useNavigate();
  const [classN, setClassN] = useState("Dimensions");
  const { postproductItem, getProductItem, getProductPage } =
    useContext(Global);
  const [similar, setSimilar] = useState();

  useEffect(() => {
    if(!postproductItem){
      navigate('/product')
    }
  })

  useEffect(() => {
    if (postproductItem.type === "Insecticide") {
      setSimilar(Insecticidesimilarpoduct);
    } else if (postproductItem.type === "Fungicide") {
      setSimilar(Fungicidesimilarpoduct);
    } else if (postproductItem.type === "Herbicide") {
      setSimilar(Herbicidesimilarpoduct);
    } else if (postproductItem.type === "PGR") {
      setSimilar(PGRsimilarpoduct);
    }
  }, [postproductItem]);

  
  return (
    <div className="product-details-components" id="details">
      <div className="product-details-container">
        <div className="hero-section">
          <div className="left">
            <img
              src={postproductItem.product_img}
              alt="products"
              className="product-img"
            />
          </div>
          <div className="right">
            <div className="header">
              <h3>
                {postproductItem.product_name} <span>(250 gm)</span>
              </h3>
              <h6>{postproductItem.product_tag}</h6>
            </div>

            <div className="details">
              <div className="blank"></div>

              <div className="item">
                <p>Price</p>
                <h6>₹580.25</h6>
              </div>

              <div className="blank"></div>

              <div className="item">
                <p>Delivery time</p>
                <h6>4-5 days</h6>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Now
            </button>
          </div>
        </div>

        <div className="description">
          <div className="left">
            <h3>Products Description</h3>

            <div className="details">
              <p>Product Details:</p>
              <table>
                <ul>
                  <li>
                    Attractive orange colored grains fetching better market
                    price
                  </li>
                  <li>Early hybrid 95 to 100 days</li>
                  <li>
                    High per day productivity compared to late and mid late
                    hybrids
                  </li>
                  <li>Resistant to leaf blight</li>
                  <li>Moderately resistant to stem borer</li>
                  <li>Large seed size</li>
                  <li>Semi-erect growth habit</li>
                  <li>Non-lodging</li>
                  <li>
                    Yield potential 80 to 90 Q/ha depending upon the crop
                    management
                  </li>
                </ul>
              </table>
            </div>
          </div>
          <div className="blank-Y"></div>
          <div className="right">
            <div className="header">
              <h3
                className={classN === "Dimensions" ? "active" : "deactive"}
                onClick={() => {
                  setClassN("Dimensions");
                }}
              >
                Dimensions
              </h3>
              <h3
                className={classN === "Material" ? "active" : "deactive"}
                onClick={() => {
                  setClassN("Material");
                }}
              >
                Material & Finishes
              </h3>
            </div>

            {classN === "Dimensions" ? (
              <div className="details">
                <div className="blank"></div>

                <div className="item">
                  <h6>Length</h6>
                  <h6>40cm</h6>
                </div>
                <div className="blank"></div>

                <div className="item">
                  <h6>Depth</h6>
                  <h6>50cm</h6>
                </div>

                <div className="blank"></div>

                <div className="item">
                  <h6>Height</h6>
                  <h6>60cm</h6>
                </div>

                <div className="blank"></div>
              </div>
            ) : (
              <div className="details">
                <div className="blank"></div>
                <div className="items">
                  <h5>Details Demo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maiores dicta, odit, necessitatibus, quasi ab et id
                    nemo quam beatae consequatur tempora labore.
                  </p>
                </div>
                <div className="blank"></div>
                <div className="items">
                  <h5>Details Demo</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit maiores dicta, odit, necessitatibus, quasi ab et id
                    nemo quam beatae consequatur tempora labore possimus.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="similar-item">
          <h3>Similar products</h3>

          <div className="list-items">
            {similar
              ? similar.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="img-box">
                      <img src={item.product_img} alt={item.product_name} />
                    </div>
                    <div className="details">
                      <h5>{item.product_name}</h5>
                      <h6>{item.product_name}</h6>
                    </div>
                    <p>{item.product_tag}</p>
                    <a
                      href="#details"
                      className="button"
                      onClick={() => {
                        getProductItem(item);
                      }}
                    >
                      VIEW DETAILS
                    </a>
                  </div>
                ))
              : null}
          </div>

          <button
            className="load-more"
            onClick={() => {
              navigate("/products");
              getProductPage(postproductItem.type);
            }}
          >
            Load more
          </button>
        </div>
      </div>

      <Footer top={"#details"} />
    </div>
  );
}

export default ProductDetails;
