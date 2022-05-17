import React, { useState } from "react";
import IndivisualContent from "./indivisual-content";
import "./array-of-content.css"
import "./carausal.css"


function ArrayOfContent(props) {
    const [pixel, transformPixel] = useState(0);
    return (
        <div className="array-of-content carausal-container" >
            <div className="carausal-container-inner">
                <div className="track" id={props.arrayOf}>
                    {props.para.map((indiContent) => (indiContent.backdrop_path) ?
                        <IndivisualContent para={indiContent} key={indiContent.id} /> : null)}
                </div>
            </div>
            <div className="nav">
                <button className="prev" onClick={() => {
                    if (pixel !== 0) {
                        const track = document.getElementById(`${props.arrayOf}`);
                        transformPixel((prevPixel)=>prevPixel===pixel - 50)
                        track.style.transform = `translateX(-${pixel}vw)`
                    }
                }}>
                    <span className="material-icons">
                        chevron_left
                    </span>
                </button>
                <button className="next" onClick={() => {
                    const track = document.getElementById(`${props.arrayOf}`);
                    transformPixel(pixel + 50)
                    track.style.transform = `translateX(-${pixel}vw)`
                }}>
                    <span className="material-icons">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )

}

export default ArrayOfContent