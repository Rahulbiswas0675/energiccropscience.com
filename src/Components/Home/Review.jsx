import React from "react";
import background from "../../Image/SectionImage/reviewback.png";
import r1 from "../../Image/Logos/r1.png";
import r2 from "../../Image/Logos/r2.png";
import r3 from "../../Image/Logos/r3.png";
import r4 from "../../Image/Logos/r4.png";

function Review() {
  return (
    <div className="review-components">
      <img src={background} alt="img" className="background" />

      <div className="review-container">
        <div className="container-div">

          <div className="item">
            <img src={r1} alt="r1" />
            <h3>60+</h3>
            <p>Quality Products</p>
          </div>

          <div className="item">
            <img src={r2} alt="r1" />
            <h3>1600+</h3>
            <p>Satisfied Customers</p>
          </div>

          <div className="item">
            <img src={r1} alt="r1" />
            <h3>200+</h3>
            <p>Dedicated Team</p>
          </div>

          <div className="item">
            <img src={r1} alt="r1" />
            <h3>100+</h3>
            <p>Dealer Outlets</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Review;
