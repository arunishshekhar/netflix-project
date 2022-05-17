import axios from "axios";
import React from "react";
import Spinner2 from "../../../../Spinner/Spinner2";
import ArrayOfContent from "./array-of-content";



class UpcomingMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UpcomingMovieList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                UpcomingMovieList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Upcoming Movies</h2>
                {!this.state.UpcomingMovieList.length?<Spinner2/>: <ArrayOfContent para={this.state.UpcomingMovieList} arrayOf="UpMov"/>}

            </div>
            )
    }

}




export default UpcomingMovies;