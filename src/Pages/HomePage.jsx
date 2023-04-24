import React from 'react';
import CarouselsSlider from '../Components/Home/CarouselsSlider';
import Products from '../Components/Product/Products';
import AboutUs from '../Components/About/AboutUs';
import ReviewsPage from './ReviewsPage';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

function HomePage() {
  return (
    <div className="Home-Components">
      <CarouselsSlider />
      <Products/>
      <AboutUs />
      <ReviewsPage/>
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;