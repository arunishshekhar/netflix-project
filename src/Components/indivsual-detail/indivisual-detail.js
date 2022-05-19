import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Redirect } from 'react-router-dom';
import IndivisualMovie from "./indivisual-movie/indivisual-movie";
import IndivisualTV from "./indivisual-tv/indivisual-tv";

function IndivisualDetail() {
    console.log(useParams());
    const { id, isMovie } = useParams();
    console.log(isMovie)
    if (isMovie == 'true') {
        return <IndivisualMovie props={id} />
    }
    else {
        return <IndivisualTV props={id} />
    }


}

export default IndivisualDetail;