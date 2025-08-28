import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col'>
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  );
}

export default Home