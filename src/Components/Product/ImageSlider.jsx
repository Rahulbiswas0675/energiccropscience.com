import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ProductsItems } from '../../Database/Database';
function ImageSlider() {
    return (
        <div className="Product-imageslider">
            <Carousel variant="white" className="product-slide">
                {
                    ProductsItems.productsA.map(product => (
                        <Carousel.Item key={product.id} className="slider-item">
                            <div className="item-cont">
                                <img className="product-img" src={product.product_img} alt={product.product_name} />
                                <div className="details">
                                    <h4>{product.product_name}</h4>
                                    <h5>{product.product_tag}</h5>
                                    <p>{product.product_about}</p>
                                </div>

                            </div>

                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ImageSlider
