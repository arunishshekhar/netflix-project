import React from "react";
import { useParams } from 'react-router-dom';
import IndivisualMovie from "./indivisual-movie/indivisual-movie";
import IndivisualTV from "./indivisual-tv/indivisual-tv";

function IndivisualDetail() {
    
    const { id, isMovie } = useParams();
    
    (isMovie == 'true')
    ?
    return <IndivisualMovie props={id} />
    :
    return <IndivisualTV props={id} />
}

export default IndivisualDetail;