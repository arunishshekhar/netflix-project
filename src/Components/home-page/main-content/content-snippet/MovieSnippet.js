import React from "react";
import './MovieSnippet.css'

function MovieSnippet() {
    return (
        <div className="homepage-poster">
            <div className="cover-page">
                 <div className="cover-page-image"> <img src="/Images/home-page-cover2.webp" alt='cover-page'/>
                 </div>
                 <video src="/Images/Wonder Woman 1984 – Official Trailer-(1080p).mp4"  style={{transform: "translateY(-200px)"}} autoPlay muted loop></video>;
        </div>
        </div>
    )
}

export default MovieSnippet;