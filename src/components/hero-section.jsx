import React from 'react'
import HeroImage from '../assets/hero-image.png'

const HeroSection = () => {
  return (
    <section className='w-full h-100 md:h-120 lg:h-180 relative'>
      <img src={HeroImage} className='w-full h-full object-cover' alt='Hero-Image' />
      <div className='bg-black/40 absolute inset-0 justify-center items-center flex flex-col gap-14'>
        <h1 className='donegal-one-regular text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-[0] leading-tight text-shadow-lg/50'>
          ENJOY A LUXURY
          <br/>
          EXPERIENCE
        </h1>
        <a href='#hotel' className="bg-myBlue hover:bg-myBlue/80 cursor-pointer text-white px-6 md:px-10 py-3 md:py-5 rounded-none">
          <span className="font-bold text-lg">
            Explore Hotels
          </span>
        </a>
      </div>
    </section>
  )
}

export default HeroSection