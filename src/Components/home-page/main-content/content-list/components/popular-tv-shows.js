import axios from "axios";
import React from "react";
import Spinner2 from "../../../../Spinner/Spinner2";
import ArrayOfContent from "./array-of-content";



class PopularTVShows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PopularTVShowList: []
        }
    }

    componentDidMount() {
        const confidentialData = require("../../../../../confidential-data.json")
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${confidentialData["tmdb-api-key"]}&language=en-US&page=1`)
            .then((fetchedData) => this.setState({
                PopularTVShowList: (fetchedData.data.results) ? fetchedData.data.results : []
            }))

    }

    render() {

        return (
            <div>
                <h2>Popular TV-Show</h2>
                {!this.state.PopularTVShowList.length?<Spinner2/>:<ArrayOfContent para={this.state.PopularTVShowList} arrayOf="PopTV"/>}

            </div>
            )
    }

}




export default PopularTVShows;