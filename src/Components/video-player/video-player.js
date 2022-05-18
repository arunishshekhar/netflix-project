import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import "./video-player.css"

function VideoPlayer(props) {
    const { id } = useParams();
    const data = require("./data.json");
    const indidata = data[id];
    return (
        <div className='video-player-wrapper'>
          <ReactPlayer className={'video-contain'} playing width={"100%"} height={"100%"} controls url={indidata["url"]}  />
        </div>
      );
}

export default VideoPlayer;