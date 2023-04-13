import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageUnderCon from './ByDefault/PageUnderCon';
import AppBar from './Components/Navbar/AppBar';

function App() {

  return (
    <div className="App">
      <AppBar/>
      <PageUnderCon />
    </div>
  );
}

export default App;
