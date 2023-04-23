import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import InfrastructurePage from './Pages/InfrastructurePage';
import AboutUsPage from './Pages/AboutUsPage';
import CertificatesPage from "./Pages/CertificatesPage";
import ContactPage from './Pages/ContactPage';
function App() {

  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<ProductPage />}/>
          <Route path="/infrastructure" element={<InfrastructurePage />}/>
          <Route path="/about-us" element={<AboutUsPage />}/>
          <Route path="/certificates" element={<CertificatesPage />}/>
          <Route path="/contact-us" element={<ContactPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
