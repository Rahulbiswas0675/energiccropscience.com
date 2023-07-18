import React, { useEffect } from 'react';
// import { Global } from '../App';
import Home from '../Components/Home/Home';
import About from '../Components/Home/About';
import Product from '../Components/Home/Product';
import Review from '../Components/Home/Review';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Footer/Footer';
import '../Scss/HomePage.scss';


function HomePage() {
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div className='home-components' id='home'>
      <Home/>
      <About/>
      <Product/>
      <Review/>
      <Contact/>
      <Footer top={"#home"}/>
    </div>
  )
}

export default HomePage;