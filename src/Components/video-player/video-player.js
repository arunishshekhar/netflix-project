import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import "./video-player.css"
import FallbackVideo from './fall-back';
import { db } from "../../firebase"
import { ref, onValue } from "firebase/database";

function VideoPlayer(props) {
  const { id } = useParams();
  
  const [url, setUrl] = useState(null)
  
  useEffect(() => {
    const temp = ref(db,`${id}`);
    onValue(temp, (snap) => {
      if (!(url ===snap.val()["url"])) {
        setUrl(snap.val()["url"])
      }
    });
  });
  
  return (
      (url) 
      ?
      <div className='video-player-wrapper'>
        <ReactPlayer className={'video-contain'} playing width={"100%"} height={"100%"} controls url={url} />
      </div>
      : 
      <FallbackVideo />        
      )
}

export default VideoPlayer;