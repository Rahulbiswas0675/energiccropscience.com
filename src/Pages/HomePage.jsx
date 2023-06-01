import React from 'react';
// import { Global } from '../App';
import Home from '../Components/Home/Home';
import About from '../Components/Home/About';
import Product from '../Components/Home/Product';
import Footer from '../Components/Footer/Footer';
import '../Scss/HomePage.scss';


function HomePage() {

  return (
    <div className='home-components' id='home'>
      <Home/>
      <About/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default HomePage;