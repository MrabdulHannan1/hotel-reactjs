import {React} from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Hotel from './pages/hotel'
import Contact from './pages/contact'

const App = () => {
 
  return (
    <Routes>
      {/* Redirect root to English version */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* Language-specific routes */}
      <Route path="/:lang" element={<Home />} />
      <Route path="/:lang/about" element={<About />} />
      <Route path="/:lang/contact" element={<Contact />} />
      <Route path="/:lang/hotel/:hotelName" element={<Hotel />} />
    </Routes>
  )
}

export default App