import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Hotel from './pages/hotel'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotel" element={<Hotel />} />
    </Routes>
  )
}

export default App