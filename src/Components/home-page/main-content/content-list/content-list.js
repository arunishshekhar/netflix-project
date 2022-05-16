import React from "react";
import DiscoverMovies from "./components/discover-movies";
import DiscoverTVSeries from "./components/discover-tvshows";
import NowPlayingMovies from "./components/now-playing-movies";
import PopularMovies from "./components/popular-movies";

function ContentList () {
    return <>
    <DiscoverMovies/>
    <DiscoverTVSeries/>
    <NowPlayingMovies/>
    <PopularMovies/>
    </>
}

export default ContentList