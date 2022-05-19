import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrayOfContent from "../../home-page/main-content/content-list/components/array-of-content";
import Spinner2 from "../../Spinner/Spinner2";

/* 
{
    "adult": false,
    "backdrop_path": "/dpzC0ACzwkVporKvzZGvNFOBFr6.jpg",
    "created_by": [
        {
            "id": 25539,
            "credit_id": "5256cf6c19c2956ff609bd8e",
            "name": "Shonda Rhimes",
            "gender": 1,
            "profile_path": "/pIQbVxfjNwZ0DaAjo3q107nng1b.jpg"
        }
    ],
    "episode_run_time": [
        43
    ],
    "first_air_date": "2005-03-27",
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "http://abc.go.com/shows/greys-anatomy",
    "id": 1416,
    "in_production": true,
    "languages": [
        "en"
    ],
    "last_air_date": "2022-05-12",
    "last_episode_to_air": {
        "air_date": "2022-05-12",
        "episode_number": 17,
        "id": 3647898,
        "name": "I'll Cover You",
        "overview": "A former patient of Link’s, Simon, is in the ER with his pregnant wife; and Bailey receives an offer from Nick.",
        "production_code": "",
        "runtime": 43,
        "season_number": 18,
        "still_path": "/1Jm5P5dBpQsqx6UJyFp29GY1ji8.jpg",
        "vote_average": 8.5,
        "vote_count": 2
    },
    "name": "Grey's Anatomy",
    "next_episode_to_air": {
        "air_date": "2022-05-19",
        "episode_number": 18,
        "id": 3677435,
        "name": "Stronger Than Hate",
        "overview": "A dinner party is thrown at the sister house in Nick's honor. Meanwhile, Grey Sloan Memorial receives a victim of a brutal hate crime.",
        "production_code": "",
        "runtime": 43,
        "season_number": 18,
        "still_path": null,
        "vote_average": 0.0,
        "vote_count": 0
    },
    "networks": [
        {
            "name": "ABC",
            "id": 2,
            "logo_path": "/2uy2ZWcplrSObIyt4x0Y9rkG6qO.png",
            "origin_country": "US"
        }
    ],
    "number_of_episodes": 399,
    "number_of_seasons": 18,
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Grey's Anatomy",
    "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
    "popularity": 1346.39,
    "poster_path": "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
    "production_companies": [
        {
            "id": 1557,
            "logo_path": "/ccz9bqCu3jSFKbPFnfWmjAKZLBL.png",
            "name": "The Mark Gordon Company",
            "origin_country": "US"
        },
        {
            "id": 34209,
            "logo_path": "/chuOOQxixQL4fa9LBcIEbuh1S5G.png",
            "name": "ShondaLand",
            "origin_country": "US"
        },
        {
            "id": 19366,
            "logo_path": "/vOH8dyQhLK01pg5fYkgiS31jlFm.png",
            "name": "ABC Studios",
            "origin_country": "US"
        },
        {
            "id": 1558,
            "logo_path": "/wwaKUcOENHix2jxLfFBfNkCtOEQ.png",
            "name": "Touchstone Television",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "seasons": [
        {
            "air_date": null,
            "episode_count": 11,
            "id": 3722,
            "name": "Specials",
            "overview": "",
            "poster_path": "/snQYndfsEr3Sto2jOmkmsQuUXAQ.jpg",
            "season_number": 0
        },
        {
            "air_date": "2005-03-27",
            "episode_count": 9,
            "id": 3718,
            "name": "Season 1",
            "overview": "The season's reviews and critiques were generally positive, and the series received several awards and nominations for the cast and crew. The first five episodes of the second season were conceived, written and shot to air as the final five episodes of the first season, but aired during the 2005-2006 season due to the high number of viewers that watched \"Who's Zoomin' Who?\", the season's highest-rated episode with 22.22 million viewers tuning in.",
            "poster_path": "/ulGju8GyXE36wCgmvyFJL3sLiVm.jpg",
            "season_number": 1
        },
        {
            "air_date": "2005-09-25",
            "episode_count": 27,
            "id": 3719,
            "name": "Season 2",
            "overview": "The season continued to focus on the surgical residency of five young interns as they try to balance to the challenges of their competitive careers, with the difficulties that determine their personal lives. It was set in the fictional Seattle Grace Hospital, located in the city of Seattle, Washington. Whereas the first season put the emphasis mainly on the unexpected impact the surgical field has on the main characters, the second one provides a detailed perspective on the personal background of each character, focusing on the consequences that their decisions have on their careers. Throughout the season, new story lines were introduced, including the love triangle between Meredith Grey, Derek Shepherd, and Addison Montgomery, the main arc of the season. Also heavily developed was the story line involving Izzie Stevens' relationship with patient Denny Duquette, which resulted in critical acclaim and positive fan response.",
            "poster_path": "/bO0S3fU8Tcqn0g5DCmDcX1oqA2t.jpg",
            "season_number": 2
        },
        {
            "air_date": "2006-09-21",
            "episode_count": 25,
            "id": 3715,
            "name": "Season 3",
            "overview": "The season followed the continuation of the surgical residency of five young interns, as they experience the demands of the competitive field of medicine, which becomes defining in their personal evolution. Although set in fictional Seattle Grace Hospital, located in Seattle, Washington, filming primarily occurred in Los Angeles, California. Whereas the first season mainly focused on the impact the surgical field has on the main characters, and the second one provided a detailed perspective on the physicians' private lives, the third season deals with the tough challenges brought by the last phase of the surgeons' internship, combining the professional motif emphasized in the first season, with the complex personal background used in the second. Through the season, several new storylines are introduced, including the arrival of Dane's character, Dr. Mark Sloan, conceived and introduced as an antagonizing presence.",
            "poster_path": "/aY7NuvFj5Uzliy0nrFxVWmlZFiK.jpg",
            "season_number": 3
        },
        {
            "air_date": "2007-09-27",
            "episode_count": 17,
            "id": 3716,
            "name": "Season 4",
            "overview": "For the first time in the show's history, many cast changes occur, seeing the first departure of two main cast members. The season received mixed response from critics and fans, resulting in several awards and nominations for the cast members and the production team. Show creator Shonda Rhimes heavily contributed to the production of the season, writing five out of the seventeen episodes. The highest-rated episode was the season premiere, which was watched by 20.93 million viewers. The season was interrupted by the 2007–2008 Writers Guild of America strike, which resulted in the production of only seventeen episodes, instead of twenty-three originally planned.",
            "poster_path": "/xoBWd6WNcQKoxfYzcwWRZUiFGtx.jpg",
            "season_number": 4
        },
        {
            "air_date": "2008-09-25",
            "episode_count": 24,
            "id": 3717,
            "name": "Season 5",
            "overview": "The fifth season of the American television medical drama Grey's Anatomy, created by Shonda Rhimes, commenced airing on American Broadcasting Company in the United States on September 25, 2008 and concluded on May 14, 2009 with twenty-four aired episodes. The season follows the story of a group of surgeons as they go through their residency, while they also deal with the personal challenges and relationships with their mentors. Season five had thirteen series regulars with twelve of them returning from the previous season. The season aired in the Thursday night timeslot at 9:00 pm. The season was officially released on DVD as seven-disc boxset under the title of Grey's Anatomy: The Complete Fifth Season – More Moments on September 9, 2009 by Buena Vista Home Entertainment.",
            "poster_path": "/bnOS0AKjbfPY1xVqF80qk0iBQBX.jpg",
            "season_number": 5
        },
        {
            "air_date": "2009-09-24",
            "episode_count": 24,
            "id": 3720,
            "name": "Season 6",
            "overview": "The season follows the story of surgical interns, residents and their competent mentors, as they experience the difficulties of the competitive careers they have chosen. It is set in the surgical wing of the fictional Seattle Grace Hospital, located in Seattle, Washington. A major storyline of the season is the characters adapting to change, as their beloved co-worker Stevens departed following the breakdown of her marriage, O'Malley died in the season premiere—following his being dragged by a bus, and new cardiothoracic surgeon Teddy Altman is given employment at the hospital. Further storylines include Shepherd being promoted to chief of surgery, Seattle Grace Hospital merging with the neighboring Mercy West —introducing several new doctors, and several physicians lives being placed into danger—when a grieving deceased patient's husband embarks on a shooting spree at the hospital, seeking revenge for his wife's death.",
            "poster_path": "/vCiJa2YfzOWhhfKCXNZWFVhYulE.jpg",
            "season_number": 6
        },
        {
            "air_date": "2010-09-23",
            "episode_count": 22,
            "id": 3721,
            "name": "Season 7",
            "overview": "The seventh season of the American television medical drama Grey's Anatomy, commenced airing on September 23, 2010 on the American Broadcasting Company, and concluded on May 19, 2011 ending the season with a total of 22 episodes. The season was produced by ABC Studios, in association with Shondaland Production Company and The Mark Gordon Company; the showrunner being Shonda Rhimes.",
            "poster_path": "/wmGUedMQJkmSZFYJA35AKPrHsGJ.jpg",
            "season_number": 7
        },
        {
            "air_date": "2011-09-22",
            "episode_count": 24,
            "id": 3723,
            "name": "Season 8",
            "overview": "The eighth season of the American television medical drama Grey's Anatomy, commenced airing on the American Broadcasting Company on September 22, 2011, with a special two-hour episode and ended on May 17, 2012 with the eighth season having a total of 24 episodes. The season was produced by ABC Studios, in association with Shondaland Production Company and The Mark Gordon Company; the showrunner being Shonda Rhimes.",
            "poster_path": "/pvuMQwMPWDqunRiajmeGQmUF0zS.jpg",
            "season_number": 8
        },
        {
            "air_date": "2012-09-27",
            "episode_count": 24,
            "id": 3724,
            "name": "Season 9",
            "overview": "",
            "poster_path": "/gLP8aeWDfoOIqp1EFEMLSoHlIHW.jpg",
            "season_number": 9
        },
        {
            "air_date": "2013-09-26",
            "episode_count": 24,
            "id": 3725,
            "name": "Season 10",
            "overview": "",
            "poster_path": "/h0z0USK1KerDJu02c218zFMIa52.jpg",
            "season_number": 10
        },
        {
            "air_date": "2014-09-25",
            "episode_count": 24,
            "id": 62051,
            "name": "Season 11",
            "overview": "During an interview, Shonda Rhimes stated that \"Season 11 is really a Meredith-centric season. She lost her ‘person’, her half-sister has shown up, her husband is chafing to go someplace else…” She went on to reveal that she's been wanting to do the \"familial grenade\" storyline for a long time, and at the end of Season 10, she knew it was the time to do it. Rhimes also claimed that Season 11 will pick up right where Season 10 left us, so there won't be much that the audience won't see. In another interview discussing this storyline, Rhimes revealed that she and the writers are thinking about doing flashback periods to the younger days of Drs. Ellis Grey and Richard Webber.",
            "poster_path": "/AvMxKxyj6zIG5fR0fg7D6bWH4AY.jpg",
            "season_number": 11
        },
        {
            "air_date": "2015-09-24",
            "episode_count": 24,
            "id": 70494,
            "name": "Season 12",
            "overview": "",
            "poster_path": "/b8pkzoNM5X0XSwppEA7jTID5Dcm.jpg",
            "season_number": 12
        },
        {
            "air_date": "2016-09-22",
            "episode_count": 24,
            "id": 79174,
            "name": "Season 13",
            "overview": "",
            "poster_path": "/i4gNHaY1MzP50zcjgw3ew2hKCCW.jpg",
            "season_number": 13
        },
        {
            "air_date": "2017-09-28",
            "episode_count": 24,
            "id": 92088,
            "name": "Season 14",
            "overview": "",
            "poster_path": "/2eSQFbeZZ7lCru40Q0UYGJ20itx.jpg",
            "season_number": 14
        },
        {
            "air_date": "2018-09-27",
            "episode_count": 25,
            "id": 108798,
            "name": "Season 15",
            "overview": "",
            "poster_path": "/eqgIOObafPJitt8JNh1LuO2fvqu.jpg",
            "season_number": 15
        },
        {
            "air_date": "2019-09-26",
            "episode_count": 21,
            "id": 129348,
            "name": "Season 16",
            "overview": "",
            "poster_path": "/eDIfEk8dHysaea0ICkKtLUc3xro.jpg",
            "season_number": 16
        },
        {
            "air_date": "2020-11-12",
            "episode_count": 17,
            "id": 163320,
            "name": "Season 17",
            "overview": "",
            "poster_path": "/1Dk9X7QNMf2yp6UhFEYiuvvKVmP.jpg",
            "season_number": 17
        },
        {
            "air_date": "2021-09-30",
            "episode_count": 20,
            "id": 202440,
            "name": "Season 18",
            "overview": "",
            "poster_path": "/zPIug5giU8oug6Xes5K1sTfQJxY.jpg",
            "season_number": 18
        }
    ],
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Returning Series",
    "tagline": "The life you save may be your own.",
    "type": "Scripted",
    "vote_average": 8.3,
    "vote_count": 8004
}
 */

function IndivisualTV () {
    const { id } = useParams();

    const [TVDetail, setTVDetail] = useState({})
    const [similarTV, setSimilarTV] = useState({})
    const [recommendedTV, setRecommendedTV] = useState({})
    // const [moviesCredits, setMoviesCredits] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US`)
            .then((dataFromAPI) => setTVDetail(dataFromAPI.data));
        axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US&page=1`)
            .then((dataFromAPI) => setSimilarTV(dataFromAPI.data["results"]));
        axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=699d72b2d0f1ce6766155aaf0e374b66&language=en-US&page=1`)
            .then((dataFromAPI) => setRecommendedTV(dataFromAPI.data["results"]));
       
    }, [id])


    return (
        <div>
            
        </div>
    )
}

export default IndivisualTV