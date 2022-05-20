import React, { useState } from "react";
import './Navbar.css'
import { useCookies } from 'react-cookie';
import { useUserAuth } from "../../../Context/UserAuthContext";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function NavBar() {
    const [cookie, removeCookie] = useCookies(['cookie-name']);
    const { logOut } = useUserAuth();
    const history = useHistory();

    const myNav = document.querySelector('.navbar');
    window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
          myNav.classList.add("scroll");
        } else {
          myNav.classList.remove("scroll");
        }
      };

    function handleSignOut() {
        removeCookie('loggedUser');
        logOut();
        history.push('/');
        window.location.reload();
        console.log(cookie);
    }

    const [value, setValue] = useState('');

    function onChangeHandler(event) {
        setValue(event.target.value)
        if (value.length >= 2) {
            history.push("/browse/search");
        }
        else {
            history.push("/browse")
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link id='navbar-logo' to="/browse"><img className="navbar-logo" src="/Images/logo.svg" /></Link>
                <div className="navbar-categories">
                    <Link to="/browse">Home</Link>
                    <Link to="/browse/movies">Movies</Link>
                    <Link to="/browse/tv">TV Shows</Link>
                </div>
            </div>

            <div className="navbar-right">
                <input className='search-bar' type="text" id="searchID" placeholder='Search' onChange={onChangeHandler} value={value} /><br />
                <div class="popover__wrapper">
                    <button className="dropbtn">{cookie[cookie['loggedUser']] ? cookie[cookie['loggedUser']] : 'Profile'}</button>
                    <div class="popover__content" onClick={handleSignOut}>
                        Sign Out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;