import React, { useEffect } from 'react'
import LogoBar from '../components/logo-bar';
import Footer from '../components/footer';
import ContactBody from '../components/contact-body';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LogoBar />
      <ContactBody />
      <Footer />
    </>
  ) 
}

export default Contact