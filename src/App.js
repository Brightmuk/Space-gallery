import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Footer from './components/Footer';

const App = ()=> {
  return (
    <div className="app">
     
      <Navbar/>
      <Home/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
