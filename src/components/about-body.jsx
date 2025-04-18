import React from 'react'
import AboutHeroImage from '../assets/about-hero-image.png'
import MaxWidthWrapper from './max-width-wrapper'
import AboutImage from '../assets/about-image.png'

const AboutBody = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='w-full h-100 md:h-120 lg:h-140 relative'>
        <img src={AboutHeroImage} className='w-full h-full object-cover' alt='about-hero-Image' />
        <div className='bg-black/40 absolute inset-0 justify-center items-center flex flex-col'>
          <p className='text-white text-lg md:text-xl lg:text-2xl'>Paris Hotel Kleber .com</p>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-[0] leading-tight text-shadow-lg/50'>
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className='my-10'>
        <MaxWidthWrapper>
          <a href="#" className="text-xl md:text-2xl text-myBlue font-medium leading-6">
          We Are Here...
          </a>
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Where Simple Luxury Tranquility Meet
          </h2>
          <p className='text-black text-base md:text-lg mt-4'>
          Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and
          dining areas. water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite
          </p>
          <p className='text-black text-base md:text-lg mt-4'>
          Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and
          dining areas. water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite
          </p>
          <p className='text-black text-base md:text-lg mt-4'>
          Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and
          dining areas. water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite
          </p>
          <p className='text-black text-base md:text-lg mt-4'>
          Enjoy sweeping water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and
          dining areas. water views when you reserve a Hudson River View Suite. Spread out in an Executive or Luxury Suite with over 700 square feet of lavish living areas
          with integrated technology. Live the New York lifestyle in the Conrad Suite, featuring an office and separate living and dining areas. Executive or Luxury Suite with
          over 700 square feet of lavish living areas with integrated technology. Live the New York lifestyle in the Conrad Suite
          </p>
        </MaxWidthWrapper>
      </section>

      {/* Iamge Section */}
      {/* <section>
        <img src={AboutImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='about-hero-Image' />
      </section> */}
    </div>
  )
}

export default AboutBody