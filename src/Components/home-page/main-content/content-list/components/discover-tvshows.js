import axios from "axios";
import React from "react";
import ArrayOfContent from "./array-of-content";



class DiscoverTVSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TvSeriesList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            .then((fetchedData) => this.setState({
                TvSeriesList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Discover TV Series</h2>
                <ArrayOfContent para={this.state.TvSeriesList} arrayOf="DisTV"/>
            </div>
            )
    }

}




export default DiscoverTVSeries;