import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = ()=> {
  return (
    <div className="App">
      <div className="hero">
      {/* <Navbar/> */}
      <Home/>
      </div>

    </div>
  );
}

export default App;
