import React from "react";
import { useState } from "react";
import "./Features.css";

function Features() {
  const details = {
    "What is Netflix?": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    "How much does Netflix cost?": `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
    "Where can I watch?": `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.`,
    "How do I cancel?": `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    "What can I watch on Netflix?": `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    "Is Netflix good for kids?": `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.`,
  };

  const [faqOpen, updateFaq] = useState(
    Object.keys(details).reduce((acc, item) => {
      return { ...acc, [item]: false };
    }, {})
  );

  const handleClick = (key) => {
    updateFaq((preState) => ({ ...preState, [key]: !preState[key] }));
  };

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
          <img src="/Images/tv1.png" className="anim-img" alt="TV" />
          <div className="gif-container-feature1">
            <video autoPlay loop playsInline muted>
              <source src="/Images/firstAnim.mp4" type="video/mp4" />
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
        <div className="animation-card">
          <img
            src="/Images/mobile-stranger-T.jpg"
            className="anim-img"
            alt="TV"
          />
          <div className="story-card-animation">
            <div className="story-card-animation-text">
              <div id="" className="text-0">
                Downloading...
              </div>
              <div className="our-story-animation-last"></div>
            </div>
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
        <div className="animation-card">
          <img src="/Images/tv2.png" className="anim-img" alt="TV" />
          <div className="gif-container-feature3">
            <video autoPlay loop playsInline muted>
              <source src="/Images/video-devices-2.m4v" type="video/x-m4v" />
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

      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <ul className="faqs-list">
          {Object.keys(details).map((item, index) => (
            <li key={index} className="faqs-list-item">
              <button onClick={() => handleClick(item)}>
                {item} 
              <svg id="thin-x" viewBox="0 0 26 26" className={`svg-icon svg-icon-thin-x ${faqOpen[item]?'svg-open':'svg-closed'}`} focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
              </button>
              {faqOpen[item] && (
                <div className={`faq-answer ${faqOpen[item]?'open':'closed'}`}>
                  <span>{details[item]}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;