import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import AboutUsPage from './Pages/AboutUsPage';
import ReviewsPage from './Pages/ReviewsPage.jsx';
import CertificatesPage from './Pages/CertificatesPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer/Footer';
import WpImg from './Image/Icon/whatsapp.png';




function App() {

  return (
    <div className="App">
      <AppBar />
      <HomePage/>
      <AboutUsPage/>
      <ProductPage/>
      <ReviewsPage/>
      <CertificatesPage/>
      <ContactPage/>
      <Footer/>
      <a href=""><img src={WpImg} alt="Whatsapp" className="whatsapp"/></a>
      
    </div>
  );
}

export default App;
