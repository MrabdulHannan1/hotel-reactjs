import React from 'react'
import ContactBar from '../components/contact-bar'
import LogoBar from '../components/logo-bar'
import HeroSection from '../components/hero-section'
import { IntroductionSection } from '../components/IntroductionSection'
import HotelList from '../components/hotel-list'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <ContactBar />
      <LogoBar />
      <HeroSection />
      <IntroductionSection />
      <HotelList />
      <Footer />
    </>
  )
}

export default Home