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

    function handleSignOut() {
        removeCookie('loggedUser');
        logOut();
        setTimeout(() => {
            history.push('/');
            window.location.reload();
        },2000)
        console.log(cookie);
    }

    function drop() {
        document.querySelector(".userDropdown").classList.toggle("show");
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
                <Link id = 'navbar-logo'to="/browse"><img className="navbar-logo" src="/Images/logo.svg" /></Link>
                <div className="navbar-categories">
                <Link to="/browse">Home</Link>
                <Link to="/browse/movies">Movies</Link>
                <Link to="/browse/tv">TV Shows</Link>
                </div>
            </div>

            <div className="navbar-right">
                <input className= 'search-bar'type="text" id="searchID" placeholder='Search' onChange={onChangeHandler} value={value} /><br/>
                <div className="userDropdown-container">
                    <button onClick={drop} className="dropbtn">{cookie[cookie['loggedUser']]?cookie[cookie['loggedUser']]:'Profile'}</button>
                    <div className="userDropdown">
                        <div className="userDropdown-content" onClick={handleSignOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;