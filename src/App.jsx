import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/about' element={<Agency />} />
      </Routes>
    </div>
  )
}

export default App