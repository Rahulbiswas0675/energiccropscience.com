import './App.scss';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
function App() {

  return (
    <div className="App">
      <AppBar/>
      <Home/>
      <PageUnderCon />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
