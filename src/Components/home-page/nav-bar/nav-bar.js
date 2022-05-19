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
    const user = cookie['loggedUser'];
    function handleSignOut() {
        logOut();
        removeCookie('loggedUser');
        history.push('/');
        window.location.reload(false);
    }

    function myFunction() {
        document.querySelector(".userDropdown").classList.toggle("show");
    }

    const [value, setValue] = useState('');

    function onChangeHandler(event) {
        setValue(event.target.value)
        if (value.length >= 2) {
            history.push("/browse/search");
        }
        else {
            history.push("/browse/home")
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/browse/home"><img className="navbar-logo" src="/Images/logo.svg" /></Link>
                <Link to="/browse/home">Home</Link>
                <Link to="/browse/movies">Movies</Link>
                <Link to="/browse/tv">TV Shows</Link>
            </div>

            <div className="navbar-right">
                <input className= 'search-bar'type="text" id="searchID" placeholder='Search' onChange={onChangeHandler} value={value} /><br/>
                <div className="userDropdown-container">
                    <button onClick={myFunction} className="dropbtn">{cookie[cookie['loggedUser']]?cookie[cookie['loggedUser']]:'Profile'}</button>
                    <div className="userDropdown">
                        <div className="userDropdown-content" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;