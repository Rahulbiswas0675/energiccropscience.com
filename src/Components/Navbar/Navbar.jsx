// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Global } from "../../App";
// import logo from "../../Image/Logos/LOGO.png";
// import { CgMenuLeftAlt } from "react-icons/cg";
// import '../../Scss/Navbar.scss';

// function Navbar() {
//   const navigate = useNavigate();
//   const { getProductName, getPageName, postClsName, getClsName } =
//     useContext(Global);

//   return (
//     <div className="navbar-components">
//       <div className="navbar-container">

//         <div className="menu-brand">
//           <CgMenuLeftAlt
//             className="icons"
//             onClick={() => {
//               if (postClsName === "slider-menu-bar") {
//                 getClsName("display-hide");
//               } else {
//                 getClsName("slider-menu-bar");
//               }
//             }}
//           />
//           <img src={logo} alt="logo" className="logo-img" />
//         </div>
        
//         <div className="menus-items">
//           <div className="item">
//             <Link
//               to="/"
//               className="links"
//               onClick={() => {
//                 getPageName("home");
//                 getClsName("slider-menu-bar");
//               }}
//             >
//               Home
//             </Link>
//           </div>
//           <div className="product-div item">
//             <div className="products">
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 Products
//               </Link>
//               <RiArrowDownSLine className="pro-icon" />
//             </div>
//             <div className="products-menu">
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getProductName("All-Products");
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 All Products
//               </Link>
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getProductName("Insecticide");
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 Insecticide
//               </Link>
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getProductName("Fungicide");
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 Fungicide
//               </Link>
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getProductName("Herbicide");
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 Herbicide
//               </Link>
//               <Link
//                 to="/products"
//                 className="links"
//                 onClick={() => {
//                   getProductName("Pgr");
//                   getPageName("products");
//                   getClsName("display-hide");
//                 }}
//               >
//                 Pgr
//               </Link>
//             </div>
//           </div>
//           <div className="item">
//             <Link
//               to="/about"
//               className="links"
//               onClick={() => {
//                 getPageName("about");
//                 getClsName("display-hide");
//               }}
//             >
//               About
//             </Link>
//           </div>
//           <div className="item">
//             <Link
//               to="/certificates"
//               className="links"
//               onClick={() => {
//                 getPageName("certificates");
//                 getClsName("display-hide");
//               }}
//             >
//               Certificates
//             </Link>
//           </div>
//         </div>
//         <div className="contact-btn">
//           <button
//             className="button"
//             onClick={() => {
//               navigate("./contact");
//               getPageName("contact");
//               getClsName("display-hide");
//             }}
//           >
//             Contact us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
