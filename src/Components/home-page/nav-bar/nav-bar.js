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
    function handleClick() {
        logOut();
        removeCookie('loggedUser');
        history.push('/');
        window.location.reload(false);
    }

    return (
            <div className="navbar">
                <img className="logo" src="/Images/logo.svg" alt="logo" />
                <p>{(user)? user:''}</p>
                {/* {console.log(user)} */}
                <button className="login-sigin-btn" onClick={handleClick}>Sign Out</button>
            </div>
    )
}

export default NavBar;