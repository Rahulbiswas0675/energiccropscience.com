import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import InfrastructurePage from './Pages/InfrastructurePage';
import AboutUsPage from './Pages/AboutUsPage';
import ReviewsPage from './Pages/ReviewsPage.jsx';
import CertificatesPage from './Pages/CertificatesPage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer/Footer';





function App() {

  return (
    <div className="App">
      <AppBar />
      <HomePage/>
      <ProductPage/>
      <InfrastructurePage/>
      <AboutUsPage/>
      <ReviewsPage/>
      <CertificatesPage/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
