import React from "react";
import './MovieSnippet.css'

function MovieSnippet() {
    return (
        <div className="homepage-poster">
            <div className="cover-page">
                 <div className="cover-page-image"> <img src="/Images/home-page-cover2.webp" alt='cover-page'/>
                 </div>
                 <video src="https://mb0netflix.blob.core.windows.net/movies/Wonder%20Woman%201984%20%E2%80%93%20Official%20Trailer-(1080p).mp4?sp=r&st=2022-05-18T07:55:19Z&se=2022-06-18T15:55:19Z&sv=2020-08-04&sr=b&sig=JQzhZJ1gCGDZERnOfJr7oSwm0NKDxfjxxIeM2yCtbes%3D"  
                    style={{transform: "translateY(-200px)"}} autoPlay muted loop></video>;
        </div>
        </div>
    )
}

export default MovieSnippet;