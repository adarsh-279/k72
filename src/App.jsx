import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agents from './pages/Agents'

const App = () => {
  return (
    <div className='text-white bg-black min-h-screen w-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agents' element={<Agents />} />
      </Routes>
    </div>
  )
}

export default App