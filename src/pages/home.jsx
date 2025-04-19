import React, { useEffect } from 'react'
import LogoBar from '../components/logo-bar'
import HeroSection from '../components/hero-section'
import { IntroductionSection } from '../components/IntroductionSection'
import HotelList from '../components/hotel-list'
import Footer from '../components/footer'
import GDPRBanner from '../components/gdpr'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GDPRBanner />
      <LogoBar />
      <HeroSection />
      <IntroductionSection />
      <HotelList />
      <Footer />
    </>
  )
}

export default Home