import React from 'react'

const HotelHeroSection = ({image, location, name, tag}) => {
  return (
      <section className='w-full h-100 md:h-120 lg:h-140 relative'>
        <img src={image} className='w-full h-full object-cover' alt='about-hero-Image' />
        <div className='bg-black/40 absolute inset-0 justify-center items-center flex flex-col'>
          <div>
            <p className='text-white text-base md:text-lg lg:text-xl text-center'>{location}</p>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-[0] leading-tight text-shadow-lg/50'>
              {name}
            </h1>
            <p className='text-white text-base md:text-lg lg:text-xl text-center mt-4'>{tag}</p>
          </div>
        </div>
      </section>
  )
}

export default HotelHeroSection