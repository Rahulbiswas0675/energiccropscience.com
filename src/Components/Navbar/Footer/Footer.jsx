import React from "react";
import background from "../../../Image/SectionImage/footerimg.png";

function Footer() {
  return (
    <div className="footer-components">
      <img src={background} alt="background" className="background-img" />
      <div className="footer-container">
        <div className="box-1">Company Details</div>
        <div className="box-2">I'm Worked on this Section</div>
      </div>
    </div>
  );
}

export default Footer;
