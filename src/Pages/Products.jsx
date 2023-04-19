import React from 'react'
import ImageSlider from '../Components/Product/ImageSlider'
import bgimg from '../Image/background.jpg';
import { ProductsItems } from '../Database/Database';
function Products() {
  return (
    <div className="Product-Components">

      <h3 className="product-header">
        Our Products
      </h3>

      <div className="product-container">
        <div className="products">
          <img src={bgimg} alt="Image" />
          <div className="product-cat">
            <h4>{ProductsItems.product_head}</h4>
            <p>{ProductsItems.product_pera}</p>
          </div>
          <ImageSlider/>
        </div>
      </div>

    </div>
  )
}

export default Products