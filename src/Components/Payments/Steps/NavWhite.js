import React from "react";
import { Link } from "react-router-dom";
import './NavWhite.css'
function NavWhite() {
  return (
    <nav className="nav-signup">
      <Link to='/'>
        <img id="logo" src="/Images/logo.svg" alt="logo" />
      </Link>
      <Link to="/login">
        <button className="login-sigin-btn">Sign In</button>
      </Link>
    </nav>
  );
}

export default NavWhite;
