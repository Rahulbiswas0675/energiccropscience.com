import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./Components/Navbar/AppBar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CertificatePage from "./Pages/CertificatePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import "./App.scss";

export const Global = createContext();

function App() {
  const [pageName, setPageName] = useState("home");
  const [productName, setProductName] = useState("All-Products");
  const [className, setclassName] = useState("slider-menu-bar");
  const [productpage, setProductpage] = useState("All-Products");
  const [productItem, setProductItem] = useState();

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

  return (
    <div className="App">
      <Global.Provider
        value={{
          postpageName: pageName,
          postproductName: productName,
          postClsName: className,
          postProductPage: productpage,
          postproductItem: productItem,

          getPageName: getPageName_handler,
          getProductName: getProductName_handler,
          getClsName: className_handler,
          getProductPage: productpage_haldler,
          getProductItem: productId_handler,
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
          </Routes>

          {/* Page Not Found Page Add */}
        </BrowserRouter>
      </Global.Provider>
    </div>
  );
}

export default App;
