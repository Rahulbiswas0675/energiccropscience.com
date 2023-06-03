import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import AppBar from "./Components/Navbar/AppBar";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CertificatePage from "./Pages/CertificatePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

export const Global = createContext();

function App() {

  const[pageName, setPageName] = useState("home");
  const[productName, setProductName] = useState("All-Products");
  const[className, setclassName] = useState('slider-menu-bar');

  const getPageName_handler=(value) => {
    setPageName(value);
  }
  const getProductName_handler=(value) => {
    setProductName(value);
  }
  const className_handler = (value) => {
    setclassName(value);
  }
  return (
    <div className="App">
      <Global.Provider
        value={{
          postpageName: pageName,
          postproductName : productName,
          postClsName : className,

          getPageName : getPageName_handler,
          getProductName : getProductName_handler,
          getClsName : className_handler,
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
