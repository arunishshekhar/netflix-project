import React from "react";

import './Features.css'

function Features() {
  return (
    <div className="features">
      <div className="feature one">
        <div className="feature-title">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>
        <div className="gif-container-feature1">
          <video src="/Images/firstAnim.m4v" autoplay loop playsInline></video>
        </div>
      </div>
      <div className="feature two">
        <div className="feature-title">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
        <div className="gif-container-feature2">
          <img src="" alt="movie images"></img>
        </div>
      </div>
      <div className="feature three">
        <div className="feature-title">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.{" "}
          </h2>
        </div>
        <div className="gif-container-feature3">
          <video src="/Images/video-devices-2.m4v" autoplay loop playsInline></video>
        </div>
      </div>
      <div className="feature four">
        <div className="feature-title">
          <h1>Create profiles for children.</h1>
          <h2>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.{" "}
          </h2>
        </div>
        <div className="gif-container-feature4">
          <img src="/Images/kidsValueProp.png" alt="cartoon"></img>
        </div>
      </div>
    </div>
  );
}

export default Features;
