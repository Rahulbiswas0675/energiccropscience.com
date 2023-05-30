import React from 'react';
// import { Global } from '../App';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import '../Scss/HomePage.scss';


function HomePage() {

  return (
    <div className='home-components' id='home'>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HomePage;