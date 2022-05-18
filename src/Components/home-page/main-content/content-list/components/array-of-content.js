import React, { useState,useEffect} from "react";
import IndivisualContent from "./indivisual-content";
import "./array-of-content.css"
import "./carausal.css"

import { Link } from "react-router-dom";



function ArrayOfContent(props) {
    const [pixel, transformPixel] = useState(0);

    const updatePixel=(pixel)=>{
        const track = document.getElementById(`${props.arrayOf}`)
        track.style.transform = `translateX(-${pixel}vw)`

    }
    
    useEffect(()=>{
        updatePixel(pixel)
    })
    return (
        <div className="array-of-content carausal-container" >
            <div className="carausal-container-inner">
                <div className="track" id={props.arrayOf}>
                    {props.para.map((indiContent) => (indiContent.backdrop_path) ?

                        <Link to = { `/browse/${indiContent.id}`}><IndivisualContent para={indiContent} key={indiContent.id} /></Link> : null)}

                </div>
            </div>
            <div className="nav">
                <button className="prev" onClick={() => {
                    if (pixel >0) {
                        transformPixel((prevPixel)=>prevPixel- 50)
                        
                    }
                    
                }}>
                     <svg viewBox="0 0 24 24">
              <path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path>
            </svg>
                </button>
                <button className="next" onClick={() => {
                    if(pixel<500){
                    transformPixel((prevPixel)=>prevPixel+50)
                    console.log(pixel);
                         }
                }}>
                    <svg viewBox="0 0 24 24"><path d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"></path></svg>
                    
                </button>
            </div>
        </div>
    )

}

export default ArrayOfContent