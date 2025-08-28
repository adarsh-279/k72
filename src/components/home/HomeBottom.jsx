import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[l500] flex items-center justify-center gap-4 mb-4'>
      <Link className='text-[6.5vw] uppercase border-2 border-white rounded-full leading-[5.2vw] pt-6 px-10'>Work</Link>
      <Link className='text-[6.5vw] uppercase border-2 border-white rounded-full leading-[5.2vw] pt-6 px-10'>Agency</Link>
    </div>
  )
}

export default HomeBottom