import React from 'react';
import './Home.css'

const imagesPath = `${process.env.PUBLIC_URL}/images/`;

const Home = () => {
    return ( 
        <div className="hero">
      
        <div className="navbar">
            <div className="logo">E<span className="b">D</span><span className="d">S</span></div>
            <button type="button" className="sign-up">Sign up</button>
        </div>
      
        <div className="home">
            
                <p className="bright-design">A Bright Designs production</p>
                <h1>Epic Designers<br/> Society</h1>
                <p>Discover merchadise made by the best designers</p>
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
       
        <div className="footer">
            <small>&#169; Bright Designs | <span id="year"></span></small>
        </div>
        </div>
     );
}
 
export default Home;

