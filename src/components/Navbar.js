import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">E<span className="b">S</span><span className="d">G</span></div>
            <button type="button" className="sign-up">Sign up</button>
        </div>
     );
}
 
export default Navbar;