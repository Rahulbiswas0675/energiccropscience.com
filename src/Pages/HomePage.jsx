import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Home from '../Components/Home/Home';
import About from '../Components/Home/About';
import Product from '../Components/Home/Product';
import Review from '../Components/Home/Review';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Footer/Footer';
import '../Scss/HomePage.scss';


function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className='home-components' id='home'>
      <Helmet>
        <title>Energic Crop Science - Top Pesticides & Fertilizers in India</title>
        <meta name="description" content="Energic Crop Science is a leading provider of high-quality pesticides and fertilizers. We offer a wide range of products to enhance crop yield and protect against pests. Explore our offerings and boost your agricultural productivity." />
        <meta name="keywords" content="pesticides, fertilizers, top products, India, agricultural solutions" />
        <meta name="description" content='Explore the best pesticides and fertilizers at Energic Crop Science, your trusted source for top-quality agricultural products in India.' />
        
        <meta name="topic" content="Pesticides and Fertilizers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Pesticides & Fertilizers | Energic Crop Science" />
        <meta name="twitter:description" content="Explore our top-rated pesticides and fertilizers at Energic Crop Science. Elevate your crop yield with West Bengal's #1 agricultural solutions, trusted across all of India." />
        <meta name="twitter:image" content="https://www.energiccropscience.com/static/media/productbackground.736e0c606d9b0dfb211a.png" />
        <meta property="og:title" content="Best Pesticides & Fertilizers | Energic Crop Science" />
        <meta property="og:description" content="Explore our top-rated pesticides and fertilizers at Energic Crop Science. Elevate your crop yield with West Bengal's #1 agricultural solutions, trusted across all of India." />
        <meta property="og:image" content="https://www.energiccropscience.com/static/media/productbackground.736e0c606d9b0dfb211a.png" />
        <meta property="og:url" content="https://www.energiccropscience.com/product-details" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="West Bengal" />
        <meta name="geo.position" content="latitude;longitude" />
        <meta name="ICBM" content="latitude, longitude" />
        <meta name="Author" content='Energic Crop Science' />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="sitemap" content="https://www.energiccropscience.com/sitemap.xml" />
        <meta itemprop="description" content="Searching for Local Road Assistance Service Near Me Mumbai? So you're in the proper spot. We provide a variety of auto repair services to our clients and treat your car." />
        <meta itemprop="url" content="https://energiccropscience.com" />
        <meta name="serp-rank" position="1" />
        <meta name="description" content="Ridcor" />
        <meta name="keywords" content="Ridcor" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="5 stars" />
        <meta name="availability" content="in stock" />
        <meta name="author" content="Energic Crop Science" />
        <meta name="publisher" content="Energic Crop Science" />
        <meta name="copyright" content="© 2023 Energic Crop Science" />
        <meta name="og:type" content="product" />
        <meta name="msvalidate.01" content="Bing_verification_code" />
        <meta name="google-site-verification" content="Google_verification_code" />
        <meta name="referrer" content="origin" />
        <meta name="pageid" content="product-details" />
        <meta name="classification" content="Pesticides and Fertilizers" />
        <meta name="pagelanguage" content="en-US" />
        <meta name="target" content="all" />
        <meta name="rating" content="5" />
        <meta name="category" content="Agriculture" />
        <meta name='distribution' content="global" />
        <link rel="canonical" href="https://www.energiccropscience.com" />
      </Helmet>
      <Home />
      <About />
      <Product />
      <Review />
      <Contact />
      <Footer top={"#home"} />
    </div>
  )
}

export default HomePage;