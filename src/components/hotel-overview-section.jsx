import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const HotelOverviewSection = ({details, fimage}) => {
  return (
    <section id='overview' className='my-10'>
      <MaxWidthWrapper>
        <div>
          <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Laid-back places for kindred spirits
          </h2>
          <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-6">
            {details}
          </p>
        </div>
      </MaxWidthWrapper>
      <div className='w-full bg-myGray mt-10'>
        <MaxWidthWrapper>
          <p className='text-myBlue text-2xl font-semibold text-center tracking-[7.02px] leading-normal py-2'>
            Facilities
          </p>
        </MaxWidthWrapper>
        <img src={fimage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='facilitiesImage' />
      </div>
    </section>
  )
}

export default HotelOverviewSection