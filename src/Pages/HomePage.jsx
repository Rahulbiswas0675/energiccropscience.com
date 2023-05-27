import React, {useContext} from 'react';
import { Global } from '../App';
import Home from '../Components/Home/Home';
import '../Scss/HomePage.scss';


function HomePage() {

  return (
    <div className='home-components'>
      <Home/>
    </div>
  )
}

export default HomePage;