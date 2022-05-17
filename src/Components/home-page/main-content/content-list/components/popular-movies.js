import axios from "axios";
import React from "react";
import ArrayOfContent from "./array-of-content";
import Spinner2 from "../../../../Spinner/Spinner2";


class PopularMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PopularMovieList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                PopularMovieList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Popular Movies</h2>

                {!this.state.PopularMovieList.length?<Spinner2/>:<ArrayOfContent para={this.state.PopularMovieList} arrayOf="PopMov"/>}

            </div>
            )
    }

}




export default PopularMovies;