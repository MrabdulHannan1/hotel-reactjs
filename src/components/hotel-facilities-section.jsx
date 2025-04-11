import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const HotelFacilitiesSection = ({facilitiesDetails1, facilitiesDetails2, facilitiesDetails3, overviewImage}) => {
  return (
    <section id='overview' className='my-10'>
      <MaxWidthWrapper>
        <div>
          <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Facilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Welcome to the best five-star hotels
          </h2>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {facilitiesDetails1}
          </p>
        </div>

      <div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative'>
        <img src={overviewImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='overviewImage' />
      </div>

        <div>
        <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
          {facilitiesDetails2}
        </p>
        <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
          {facilitiesDetails3}
        </p>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HotelFacilitiesSection