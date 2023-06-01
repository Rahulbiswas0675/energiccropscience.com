import React from "react";
import Background from "../../Image/SectionImage/products.png";
import producttext from '../../Image/SectionImage/Products-text.png';
function Product() {
  return (
    <div className="product-components">
      <img src={Background} alt="background" className="background" />
      <div className="products-container">
        <div className="heading">
          <h3 className="head">Products</h3>
          <p className="paragraph">
            Energic Crop Science is a trusted manufacturer of high-quality
            pesticides and fertilizers. Energic Crop Science is a reliable
            partner for farmers worldwide.
          </p>
        </div>

        <div className="products-items">

        </div>

      </div>
      <img src={producttext} alt="product-text" className="producttext" />
    </div>
  );
}

export default Product;
