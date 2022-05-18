import React from "react";
import { Link } from "react-router-dom"
import "./fall-back.css"

function FallbackVideo() {
    return (
        < div className='fallback' >
            <img className="logo" src="/Images/logo.svg" alt="logo" />
            <div className="fallback_bg">
                <Link to="/browse">
                    <img src="https://ik.imagekit.io/arunishshekhar/Brazuca_-_UI_Design_qP4MxOKNL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652857250222" />
                </Link>
            </div>
        </div>
    )
}

export default FallbackVideo