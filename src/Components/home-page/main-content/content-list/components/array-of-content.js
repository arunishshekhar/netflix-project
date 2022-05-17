import React from "react";
import IndivisualContent from "./indivisual-content";
import "./array-of-content.css"

function ArrayOfContent (props) {
    return (
        <div className="array-of-content">
            {props.para.map((indiContent) => (indiContent.backdrop_path) ?
            <IndivisualContent para={indiContent} key={indiContent.id} /> : null)}
        </div>
    )
    
}

export default ArrayOfContent