import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./Components/Navbar/AppBar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CertificatePage from "./Pages/CertificatePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import PageNotFound from "./Container/PageNotFound";
import "./App.scss";
import ContactPopup from "./Container/ContactPopup";
export const Global = createContext();

function App() {
  const [pageName, setPageName] = useState("home");
  const [productName, setProductName] = useState("All-Products");
  const [className, setclassName] = useState("slider-menu-bar");
  const [productpage, setProductpage] = useState("All-Products");
  const [productItem, setProductItem] = useState();
  const [popup, setPopus] = useState(false);

  useEffect(() => {
    const message = localStorage.getItem("message");
    if (!message) {
      setTimeout(() => {
        setPopus(true);
      }, 10000);
    }
  }, []);

  const getPageName_handler = (value) => {
    setPageName(value);
  };
  const getProductName_handler = (value) => {
    setProductName(value);
  };
  const className_handler = (value) => {
    setclassName(value);
  };
  const productpage_haldler = (value) => {
    setProductpage(value);
  };
  const productId_handler = (value) => {
    setProductItem(value);
  };

  const popup_handler = (value) => {
    setPopus(value);
  };
  return (
    <div className="App">
      <Global.Provider
        value={{
          postpageName: pageName,
          postproductName: productName,
          postClsName: className,
          postProductPage: productpage,
          postproductItem: productItem,
          postPopup: popup,

          getPageName: getPageName_handler,
          getProductName: getProductName_handler,
          getClsName: className_handler,
          getProductPage: productpage_haldler,
          getProductItem: productId_handler,
          getPopup: popup_handler,
        }}
      >
        <BrowserRouter>
          <AppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certificates" element={<CertificatePage />} />
            <Route path="/product/details" element={<ProductDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {popup ? <ContactPopup /> : null}
        </BrowserRouter>
      </Global.Provider>
    </div>
  );
}

export default App;
