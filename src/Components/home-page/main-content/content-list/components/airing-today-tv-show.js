import axios from "axios";
import React from "react";
import ArrayOfContent from "./array-of-content";



class AiringTodayTVShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AiringTodayTVShowList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                AiringTodayTVShowList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Airing Today TV-Show</h2>
                <ArrayOfContent para={this.state.AiringTodayTVShowList} arrayOf="AirTodayTV"/>
            </div>
            )
    }

}




export default AiringTodayTVShows;