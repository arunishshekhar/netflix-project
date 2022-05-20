import React from "react";
import NavBar from "./nav-bar/nav-bar";
import MovieSnippet from "./main-content/content-snippet/MovieSnippet";
import ContentList from "./main-content/content-list/content-list";
import './Homepage.css';
import Footer from "../LandingPageContents/Footer";
import { useParams } from "react-router-dom";
import MovieOnly from "./movie-only/movie-only";
import TVOnly from "./tv-only/tv-only";
import SearchDisplay from "./nav-bar/search-display";
import { useCookies } from "react-cookie";

function HomePage() {
    
    const { cat } = useParams();
    const [cookie] = useCookies(['cookie-name']);
    console.log(cookie);
    return (
        <div className="homepage">
            <NavBar />
            <MovieSnippet />
            <div className="homepage-contents">
                {(cat == "home") ? <ContentList /> : null}
                {(cat == "movies") ? <MovieOnly /> : null}
                {(cat == "tv") ? <TVOnly /> : null}
                {(cat == null) ? <ContentList /> : null}
                {(cat == "search") ? <SearchDisplay /> : null}
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;