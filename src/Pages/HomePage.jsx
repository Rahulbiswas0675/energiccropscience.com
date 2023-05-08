import React from 'react';
import CarouselsSlider from '../Components/Home/CarouselsSlider';
import Home from '../Components/Home/Home';
function HomePage() {
  return (
    <div className="Home-Components" id="home">
      <CarouselsSlider />
      <Home/>
    </div>
  )
}

export default HomePage;