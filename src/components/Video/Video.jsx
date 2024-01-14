
import React from 'react';
import { Player } from 'video-react';
import './Video.css'
// import "node_modules/video-react/dist/video-react.css"; 

const video = () =>{

    return (
        <>
        <Player
      playsInline
      poster={process.env.PUBLIC_URL+"/images/video-thumbnail.png"}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </>
    )
}
export default video;