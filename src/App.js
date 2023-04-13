import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';
import HomePage from './Pages/HomePage';
function App() {

  return (
    <div className="App">
      <AppBar/>
      <HomePage/>
      <PageUnderCon />
    </div>
  );
}

export default App;
