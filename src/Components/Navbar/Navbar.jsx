import React, { useContext } from "react";
import "../../Scss/Navbar.scss";
import { Global } from "../../App";
import HomeNavbar from "./HomeNav/HomeNavbar";
import OtherNavbar from "./OthersNav/OtherNavbar";
import SliderMenu from "./SliderMenu/SliderMenu";

function Navbar() {
  const { postpageName } = useContext(Global);
  
  return (
    <>
      <div className="navbar-components">
        {postpageName === "home" ? <HomeNavbar /> : <OtherNavbar />}
      </div>
      <SliderMenu />
    </>
  );
}

export default Navbar;
