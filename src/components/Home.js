import React from 'react';
import './Home.css'

const imagesPath = `${process.env.PUBLIC_URL}/images/`;


const Home = () => {
    return ( 
        <div className="hero">
      
      
        <div className="home">
            
                <p className="bright-design">A Bright Designs production</p>
                <h1>Epic Space<br/> Gallery</h1>
                <p>Explore space from where you are</p>
                <br/>
                <button type="button" className="discover">Discover <span className="fas fa-angle-right"></span></button>
    
        </div>
     
        <div className="nav-side-bar">
            <div className="nav-side-bar-content">
                <a href="" className="fas fa-home"></a>
                <a href="" className="fas fa-shopping-cart"></a>
                <a href="" className="fas fa-person"></a>
                <a href="" className="fas fa-home"></a>
            </div> 

        </div>
        <div className="links-side-bar">
            <img src={imagesPath+"fb.png"} className="socials"/>
            <img src={imagesPath+"tw.png"} className="socials"/>
            <img src={imagesPath+"ig.png"} className="socials"/>
        </div>
    
        <div className="asteroids">
            <img src={imagesPath+"asteroid1.png"} className="one"/>
            <img src={imagesPath+"asteroid2.png"} className="two"/>
            <img src={imagesPath+"asteroid3.png"} className="three"/>
            <img src={imagesPath+"asteroid4.png"} className="four"/>
            <img src={imagesPath+"asteroid1.png"} className="five"/>
            <img src={imagesPath+"asteroid2.png"} className="six"/>
            <img src={imagesPath+"asteroid3.png"} className="seven"/>
            <img src={imagesPath+"asteroid4.png"} className="eight"/>
        </div>
       

        </div>
     );
}
 
export default Home;

