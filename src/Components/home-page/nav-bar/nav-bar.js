import React from "react";
import './Navbar.css'
import { useCookies } from 'react-cookie';
import { useUserAuth } from "../../../Context/UserAuthContext";
import { useHistory } from 'react-router-dom';

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

    return (
        <div className="navbar">
            <img className="navbar-logo" src="/Images/logo.svg" alt="logo" />
            <div className="userDropdown-container">
                {console.log(cookie)}
                <button onClick={myFunction} className="dropbtn">{cookie[cookie['loggedUser']]}</button>
                <div className="userDropdown">
                    <div className="userDropdown-content" onClick={handleSignOut}>Sign Out</div>
                </div>
            </div>


        </div>
    )
}

export default NavBar;