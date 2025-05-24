// App.js
import React from 'react';
import {Routes} from "react-router-dom";
import ReactPlayer from 'react-player'

function VideoFeed() {


        return (
           <>

               <ReactPlayer
                   url="https://youtu.be/hXimVBvVFUs?si=geiY5KJdHKUVzkeo"
                   style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
               />
               </>
        );

};
export default VideoFeed;