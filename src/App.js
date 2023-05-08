import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import CertificatesPage from './Pages/CertificatesPage';
import ContactPage from './Pages/ContactPage';
import WpImg from './Image/Icon/whatsapp.png';
import InsecticidePage from './Pages/Products/InsecticidePage';
import FungicidePage from './Pages/Products/FungicidePage';
import HerbicidePage from './Pages/Products/HerbicidePage';
import PgrPage from './Pages/Products/PgrPage';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/about" element={ <AboutUsPage /> }/>
        <Route path="/certificates" element={ <CertificatesPage /> }/>
        <Route path="/contacts" element={ <ContactPage /> }/>
        <Route path="/products/insecticide" element={ <InsecticidePage /> }/>
        <Route path="/products/fungicide" element={ <FungicidePage /> }/>
        <Route path="/products/herbicide" element={ <HerbicidePage /> }/>
        <Route path="/products/pgr" element={ <PgrPage /> }/>
      </Routes>
      </BrowserRouter>
      <a href="https://wa.me/916292006000"><img src={WpImg} alt="Whatsapp" className="whatsapp"/></a>
    </div>
  );
}

export default App;
