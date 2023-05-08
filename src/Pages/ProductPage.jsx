import React from 'react';
import Products from '../Components/Product/Products';
import ProductsGrid from '../Components/Product/ProductsGrid';
function ProductPage() {
  return (
    <div id="products">
      <Products/>
      <ProductsGrid/>
    </div>
  )
}

export default ProductPage;