import React from "react";
import NavBar from "./nav-bar/nav-bar";
import MovieSnippet from "./main-content/content-snippet/MovieSnippet";
import ContentList from "./main-content/content-list/content-list";
import './Homepage.css';
import Footer from "../LandingPageContents/Footer";

function HomePage () {
    return (
        <div className="homepage">
            <NavBar/>
            <MovieSnippet/>
            <ContentList/>
            <Footer/>
        </div>
    )
}

export default HomePage;