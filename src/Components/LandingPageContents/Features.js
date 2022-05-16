import React from "react";

import "./Features.css";

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
        <div className="animation-card">
          
          <img src="/Images/tv1.png" className="anim-img" alt="TV"/>
          <div className="gif-container feature1">
          <video autoplay loop playsInline>
          <source src="/Images/firstAnim.m4v" type="video/mp4"/>
          </video>
          </div>
        </div>
      </div>
      <div className="feature two">
        <div className="feature-title">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
        <div className="aanimation-card">
          
          <img src="/Images/mobile-stranger-T.jpg" className="anim-img" alt="TV"/>
          <div className="gif-container feature2">
          <video autoplay loop playsInline>
          <source src="/Images/firstAnim.m4v" type="video/mp4"/>
          </video>
          </div>
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
        <div className="zanimation-card">
          
          <img src="/Images/tv2.png" className="anim-img" alt="TV"/>
          <div className="gif-container-feature3">
          <video autoplay loop playsInline>
          <source src="/Images/video-devices-2.m4v" type="video/mp4"/>
          </video>
          </div>
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
