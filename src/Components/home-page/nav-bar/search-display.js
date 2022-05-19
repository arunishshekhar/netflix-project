import React, { useEffect, useState } from "react";
import ArrayOfContent from "../main-content/content-list/components/array-of-content";
import Spinner2 from "../../Spinner/Spinner2";
import axios from "axios";

function SearchDisplay () {
    const searchKey = document.getElementById("searchID").value;

    const [dataToDisplay, setSearchValue] = useState("");

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=699d72b2d0f1ce6766155aaf0e374b66&query=${searchKey}&page=1&include_adult=false`)
                .then((valueFromAPI) => valueFromAPI.data["results"])
                .then(value => setSearchValue(value))   
    })


    return (<div>
        {!dataToDisplay.length?<Spinner2/>:<ArrayOfContent para={dataToDisplay} arrayOf="SearchRes"/>}
    </div>
    )
}

export default SearchDisplay;