import React from 'react';
import { Aboutus } from '../../Database/Database';
import { useNavigate } from 'react-router-dom';
import { ProductsItems } from '../../Database/Database';
function Home() {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="about">
                <div className="left">
                    <img src={Aboutus.img} alt="About Image" />
                </div>
                <div className="right">
                    <h3>About Us</h3>
                    <div className="details">
                        <h4>{Aboutus.we_are}</h4>
                        <h5>{Aboutus.tag}</h5>
                        <p>{Aboutus.pera}</p>
                        <p>{Aboutus.pera2}</p>
                        <button onClick={() => navigate('./about')}>Read More</button>
                    </div>
                </div>
            </div>

            <div className="products">
                <div className="products-div">
                    <div className="box">
                        <h4>{ProductsItems.product_head}</h4>
                        <p>{ProductsItems.product_pera}</p>
                    </div>
                    <div className="products">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;