import React from "react";
import { useParams } from 'react-router-dom';
import IndivisualMovie from "./indivisual-movie/indivisual-movie";
import IndivisualTV from "./indivisual-tv/indivisual-tv";

function IndivisualDetail() {
    const { id, isMovie } = useParams();
    if (isMovie == 'true') {
        return <IndivisualMovie props={id} />
    }
    else {
        return <IndivisualTV props={id} />
    }
}

export default IndivisualDetail;