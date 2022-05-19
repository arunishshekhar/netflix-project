import React from "react";
import { useParams } from 'react-router-dom';
import IndivisualMovie from "./indivisual-movie/indivisual-movie";
import IndivisualTV from "./indivisual-tv/indivisual-tv";

function IndivisualDetail() {

    const { id, isMovie } = useParams();
    
    return (
        (isMovie == 'true')
            ?
            <IndivisualMovie props={id} />
            :
            <IndivisualTV props={id} />
    )
}

export default IndivisualDetail;