import React, { useEffect } from 'react'
import Footer from '../components/footer'
import LogoBar from '../components/logo-bar'
import AboutBody from '../components/about-body'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LogoBar />
      <AboutBody />
      <Footer />
    </>
  )
}

export default About