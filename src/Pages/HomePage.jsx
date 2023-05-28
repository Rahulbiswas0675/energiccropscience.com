import React, {useContext} from 'react';
import { Global } from '../App';
import Home from '../Components/Home/Home';

import Footer from '../Components/Navbar/Footer/Footer';
import '../Scss/HomePage.scss';


function HomePage() {

  return (
    <div className='home-components'>
      <Home/>
      <Footer/>
    </div>
  )
}

export default HomePage;