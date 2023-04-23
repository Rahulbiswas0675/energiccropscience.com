import React from 'react'
import ImageSlider from './ImageSlider'
import { ProductsItems } from '../../Database/Database'
function Products() {
  return (
    <div className="Product-Components">
      <h3 className="product-header">
        Our Products
      </h3>
      <div className="product-container">
        
        <div className="products">
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