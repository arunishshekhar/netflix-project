import axios from "axios";
import React from "react";
import Spinner2 from "../../../../Spinner/Spinner2";
import ArrayOfContent from "./array-of-content";



class OnAirTVShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            OnAirTVShowList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                OnAirTVShowList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>On-Air TV-Show</h2>
               {!this.state.OnAirTVShowList.length?<Spinner2/>: <ArrayOfContent para={this.state.OnAirTVShowList} arrayOf="OnAirTV"/>}

            </div>
            )
    }

}




export default OnAirTVShows;