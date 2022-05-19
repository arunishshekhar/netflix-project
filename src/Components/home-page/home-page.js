import React from "react";
import NavBar from "./nav-bar/nav-bar";
import MovieSnippet from "./main-content/content-snippet/MovieSnippet";
import ContentList from "./main-content/content-list/content-list";
import './Homepage.css';
import Footer from "../LandingPageContents/Footer";
import { useParams } from "react-router-dom";
import MovieOnly from "./movie-only/movie-only";
import TVOnly from "./tv-only/tv-only";

function HomePage() {
    const { cat } = useParams();
    return (
        <div className="homepage">
            <NavBar />
            <MovieSnippet />
            {(cat == "home") ? <ContentList /> : null}
            {(cat == "movies") ? <MovieOnly /> : null}
            {(cat == "tv") ? <TVOnly /> : null}
            <Footer />
        </div>
    )
}

export default HomePage;