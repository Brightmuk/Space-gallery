import React from 'react';
import './Footer.css';

var date = new Date();
var year = date.getFullYear();

const Footer = () => {

    return ( 
         <div className="footer">
            <small>&#169; Bright Designs | <span id="year">{year}</span> | Powered by <a target="blank" href="https://api.nasa.gov/">NASA</a> API</small>
        </div> 
     );
}
 
export default Footer;