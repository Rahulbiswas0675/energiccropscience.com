import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Footer from './Pages/Footer';
function App() {

  return (
    <div className="App">
      <AppBar/>
      <HomePage/>
      <PageUnderCon />
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
