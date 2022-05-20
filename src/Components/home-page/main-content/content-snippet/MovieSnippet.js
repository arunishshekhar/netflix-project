import React from "react";
import './MovieSnippet.css'

function MovieSnippet() {
    return (
        <div className="homepage-poster">
            <video src="/Images/top-gun.mp4"
             autoPlay muted loop/>;
        </div>
    )
}

export default MovieSnippet;