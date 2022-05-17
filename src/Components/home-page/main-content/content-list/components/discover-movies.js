import axios from "axios";
import React, { useState } from "react";
import ArrayOfContent from "./array-of-content";
import Spinner2 from "../../../../Spinner/Spinner2";


class DiscoverMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
          
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
            .then((fetchedData) => this.setState({
                movieList: (fetchedData.data.results) ? fetchedData.data.results : []
            })).then(()=>this.setState({loading:!this.state.loading}))
    }

    render() {

        return (
            <div>
                <h2>Discover Movies</h2>
                {!this.state.movieList.length?<Spinner2/>:<ArrayOfContent para={this.state.movieList} />}
            </div>)
    }

}




export default DiscoverMovies;