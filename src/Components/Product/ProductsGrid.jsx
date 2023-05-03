import React from 'react';
import { ProductCatCount } from '../../Database/Database';

function ProductsGrid() {
    return (
        <div className="parallax-effect">
            <div class="wrapper">
                <section class="section parallax bg1">
                </section>
                <section class="section2 static">
                    <h1>{ProductCatCount.productsA.head}</h1>
                    <h3>{ProductCatCount.productsA.count}</h3>
                </section>
                <section class="section parallax bg2">

                </section>
                <section class="section2 static">
                    <h1>{ProductCatCount.productsB.head}</h1>
                    <h3>{ProductCatCount.productsB.count}</h3>
                </section>
                <section class="section parallax bg3">

                </section>
                <section class="section2 static">
                    <h1>{ProductCatCount.productsC.head}</h1>
                    <h3>{ProductCatCount.productsC.count}</h3>
                </section>
                <section class="section parallax bg4">

                </section>
                <section class="section2 static">
                    <h1>{ProductCatCount.productsD.head}</h1>
                    <h3>{ProductCatCount.productsD.count}</h3>
                </section>
            </div>
        </div>
    )
}

export default ProductsGrid;