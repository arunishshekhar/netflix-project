import axios from "axios";
import React from "react";
import ArrayOfContent from "./array-of-content";
import Spinner2 from "../../../../Spinner/Spinner2";


class NowPlayingMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            NowPlayingMovieList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                NowPlayingMovieList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {
            
        return (
            <div>
                <h2>Now Playing Movies</h2>
                {!this.state.NowPlayingMovieList.length?<Spinner2/>:<ArrayOfContent para={this.state.NowPlayingMovieList} />}
            </div>
            )
    }

}




export default NowPlayingMovies;