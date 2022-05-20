import React from "react";
import {Link} from "react-router";
import './NavWhite.css'
function NavWhite() {
  return (
    <nav className="nav-signup">
    
        <img id="logo" src="/Images/logo.svg" alt="logo" />
        {/* <Link to="/login"> */}
        <button className="login-signUp-btn">Sign In</button>
        {/* </Link> */}
   
    </nav>
  );
}

export default NavWhite;
