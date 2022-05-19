import React from "react";
import "./fall-back.css"

function FallbackVideo() {
    return (
        < div className='fallback' >
            <img className="logo" src="/Images/video-unavailable.png" alt="logo" />
        </div>
    )
}

export default FallbackVideo