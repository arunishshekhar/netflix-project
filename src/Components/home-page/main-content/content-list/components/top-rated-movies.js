import axios from "axios";
import React from "react";
import Spinner2 from "../../../../Spinner/Spinner2";
import ArrayOfContent from "./array-of-content";



class TopRatedMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRatedMovieList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                TopRatedMovieList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Top Rated Movies</h2>
               {!this.state.TopRatedMovieList.length?<Spinner2/>: <ArrayOfContent para={this.state.TopRatedMovieList} />}
            </div>
            )
    }

}




export default TopRatedMovies;