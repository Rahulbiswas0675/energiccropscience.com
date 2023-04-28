import React from 'react';
import Products from '../Components/Product/Products';
import ProductIndex from '../Components/Product/ProductIndex';
function ProductPage() {
  return (
    <div id="products">
      <Products/>
      <ProductIndex/>
    </div>
  )
}

export default ProductPage