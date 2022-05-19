import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrayOfContent from "../../home-page/main-content/content-list/components/array-of-content";
import Spinner2 from "../../Spinner/Spinner2";
import '../indivisual-detail.css';
import VideoPlayer from '../../video-player/video-player'

function IndivisualMovie() {
    const { id } = useParams();
    // const { isMovie } = useParams();

    const [movieDetail, setMovieDetail] = useState({})
    const [similarMovies, setSimilarMovies] = useState({})
    const [recommendedMovies, setRecommendedMovies] = useState({})
    const [moviesCredits, setMoviesCredits] = useState({})
    const [posterLink, setPosterLink] = useState('https://image.tmdb.org/t/p/w500');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US`)
            .then((dataFromAPI) => {
                setMovieDetail(dataFromAPI.data)
                // setPosterLink(posterLink + dataFromAPI.data.poster_path)
                // console.log(posterLink);
            })
         
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US&page=1`)
            .then((dataFromAPI) => setSimilarMovies(dataFromAPI.data["results"]));
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US&page=1`)
            .then((dataFromAPI) => setRecommendedMovies(dataFromAPI.data["results"]));
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US`)
            .then((dataFromAPI) => setMoviesCredits(dataFromAPI.data["cast"]));
    }, [id])

    /*     adult: false
        backdrop_path: "/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg"
        belongs_to_collection: null
        budget: 74000000
        genres: (4) [{…}, {…}, {…}, {…}]
        homepage: "https://www.thelostcity.movie/"
        id: 752623
        imdb_id: "tt13320622"
        original_language: "en"
        original_title: "The Lost City"
        overview: "A reclusive romance novelist who was sure nothing could be worse than getting stuck on a book tour with her cover model, until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions."
        popularity: 5805.799
        poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
        production_companies: (4) [{…}, {…}, {…}, {…}]
        production_countries: [{…}]
        release_date: "2022-03-24"
        revenue: 164289828
        runtime: 112
        spoken_languages: [{…}]
        status: "Released"
        tagline: "The adventure is real. The heroes are not."
        title: "The Lost City"
        video: false
        vote_average: 6.7
        vote_count: 593 */

    // to access poster https://image.tmdb.org/t/p/w500  <= add url at end
    // console.log(movieDetail);
    // console.log(similarMovies);
    // console.log(recommendedMovies);
    // console.log(moviesCredits);
    return (
        <div className="individual-detail-main">
            <div className='loginPage-logo'>
                <Link to='/'><img className="logo" src="/Images/logo.svg" alt="logo" /></Link>
                </div>
            <h1>
                {movieDetail.title}
                <VideoPlayer/>
                
            </h1>
            {!similarMovies.length ? <Spinner2 /> : <ArrayOfContent para={similarMovies} arrayOf="SimilarMov" />}
            {!recommendedMovies.length ? <Spinner2 /> : <ArrayOfContent para={recommendedMovies} arrayOf="RecommendedMovies" />}


        </div>
    )
}

export default IndivisualMovie