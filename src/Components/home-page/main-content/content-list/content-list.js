import React from "react";
import DiscoverMovies from "./components/discover-movies";
import DiscoverTVSeries from "./components/discover-tvshows";
import NowPlayingMovies from "./components/now-playing-movies";
import PopularMovies from "./components/popular-movies";
import TopRatedMovies from "./components/top-rated-movies";
import UpcomingMovies from "./components/upcoming-movies";
import AiringTodayTVShows from "./components/airing-today-tv-show";
import OnAirTVShows from "./components/on-air-tv-shows";
import PopularTVShows from "./components/popular-tv-shows";
import TopRatedTVShows from "./components/top-rated-tv-shows";

function ContentList() {
  return (
    <>
      <DiscoverMovies />
      <DiscoverTVSeries />
      <NowPlayingMovies />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
      <AiringTodayTVShows />
      <OnAirTVShows />
      <PopularTVShows />
      <TopRatedTVShows />
    </>
  );
}

export default ContentList;
