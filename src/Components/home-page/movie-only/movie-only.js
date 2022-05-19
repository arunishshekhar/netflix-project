import React from "react";
import DiscoverMovies from "../main-content/content-list/components/discover-movies";
import NowPlayingMovies from "../main-content/content-list/components/now-playing-movies";
import PopularMovies from "../main-content/content-list/components/popular-movies";
import TopRatedMovies from "../main-content/content-list/components/top-rated-movies";
import UpcomingMovies from "../main-content/content-list/components/upcoming-movies";

import './movies-only.css'

function MovieOnly() {
  return (
    <div className="movies-container">
      <DiscoverMovies />
      <NowPlayingMovies />
      <UpcomingMovies />
      <TopRatedMovies />
      <PopularMovies />
    </div>
  );
}

export default MovieOnly;
