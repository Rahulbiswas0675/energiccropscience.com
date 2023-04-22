import React from 'react';
import { ReviewsItem } from '../../Database/Database';
function Reviews() {
    return (
        <div className="box-container">
            <div className="container-items">
                {
                    ReviewsItem.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.icon} alt={item.icon} />
                            <div className="details">
                                <h3>{item.count}</h3>
                                <p>{item.head}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews;