import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

const App = ()=> {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <script src="./scripts.js" type="text/javascript" />
      </Helmet>
      {/* <Navbar/> */}
    <div className="app">
     <Home/>
     <Explore/>
     <Footer/>
   </div>
    </div>

  );
}

export default App;
