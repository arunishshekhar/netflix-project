import axios from "axios";
import React from "react";
import ArrayOfContent from "./array-of-content";
import Spinner2 from "../../../../Spinner/Spinner2";


class TopRatedTVShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TopRatedTVShowList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                TopRatedTVShowList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Top Rated TV-Show</h2>
                {!this.state.TopRatedTVShowList.length?<Spinner2/>: <ArrayOfContent para={this.state.TopRatedTVShowList} />}
            </div>
            )
    }

}




export default TopRatedTVShows;