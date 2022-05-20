import React from "react";
import DiscoverTVSeries from "../main-content/content-list/components/discover-tvshows";
import AiringTodayTVShows from "../main-content/content-list/components/airing-today-tv-show";
import OnAirTVShows from "../main-content/content-list/components/on-air-tv-shows";
import PopularTVShows from "../main-content/content-list/components/popular-tv-shows";
import TopRatedTVShows from "../main-content/content-list/components/top-rated-tv-shows";

import './tv-only.css'

function TVOnly() {
  return (
    <div className="tv-only-container" style={{width:'100vw'}}>
      <DiscoverTVSeries />
      <AiringTodayTVShows />
      <OnAirTVShows />
      <PopularTVShows />
      <TopRatedTVShows />
    </div>
  );
}

export default TVOnly;
