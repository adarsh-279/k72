import React from 'react'
import home_video from '../../assets/home_video.mp4'

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src={home_video}
      ></video>
    </div>
  );
}

export default Video