import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Scss/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../Image/Logos/LOGO.png";
import Button from "react-bootstrap/Button";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Global } from "../../App";

function AppBar() {
  const navigate = useNavigate();
  const { getProductPage, getPopup, postPopup } = useContext(Global);

  const popup_handler = () => {
    if (postPopup) {
      getPopup(false);
    } else {
      getPopup(true);
    }
  };
  return (
    <Navbar expand="lg" className="user-navbar">
      <div className="nav-container-for-web for-web">
        <a href="/" className="brand">
          <img src={image} alt="Logo" className="brand-logo" />
        </a>
        <div className="menus">
          <Link to="/" className="links">
            Home
          </Link>
          <div className="products">
            <Link to="/products" className="links">
              Products <RiArrowDownSLine className="icons" />
            </Link>
            <div className="options">
              <Link
                to="/products"
                className="links"
                onClick={() => {
                  getProductPage("All-Products");
                }}
              >
                All Products
              </Link>
              <Link
                to="/products"
                className="links"
                onClick={() => {
                  getProductPage("Insecticide");
                }}
              >
                Insecticide
              </Link>
              <Link
                to="/products"
                className="links"
                onClick={() => {
                  getProductPage("Fungicide");
                }}
              >
                Fungicide
              </Link>
              <Link
                to="/products"
                className="links"
                onClick={() => {
                  getProductPage("Herbicide");
                }}
              >
                Herbicide
              </Link>
              <Link
                to="/products"
                className="links"
                onClick={() => {
                  getProductPage("PGR");
                }}
              >
                PGR
              </Link>
            </div>
          </div>

          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </div>
        <div className="btns">
          <Button className="contact-btn" onClick={popup_handler}>
            Contact Us
          </Button>
        </div>
      </div>
      <div className="blank"></div>
      <Container fluid className="nav-container-for-mobile for-mobile">
        <Navbar.Brand href="/" className="brand">
          <img src={image} alt="Logo" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggole" />
        <Navbar.Collapse id="navbarScroll" className="content2">
          <Nav className="me-auto my-2 my-lg-0 2 menus-item" navbarScroll>
            <Link to="/" className="links">
              Home
            </Link>
            <div className="products">
              <p className="links">
                Products <RiArrowDownSLine className="icons" />
              </p>
              <div className="options">
                <Link to="/products" className="links">
                  All Products
                </Link>
                <Link to="/products" className="links">
                  Insecticide
                </Link>
                <Link to="/products" className="links">
                  Fungicide
                </Link>
                <Link to="/products" className="links">
                  Herbicide
                </Link>
                <Link to="/products" className="links">
                  PGR
                </Link>
              </div>
            </div>
            <Link to="/about" className="links">
              About
            </Link>
            {/* <Link to="/certificates" className="links">
              Certificates
            </Link> */}

            <Link to="/contact" className="links">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppBar;
