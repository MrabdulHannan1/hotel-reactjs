import {React} from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Hotel from './pages/hotel'
import Contact from './pages/contact'

const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hotel/:hotelName" element={<Hotel />} />
    </Routes>
  )
}

export default App