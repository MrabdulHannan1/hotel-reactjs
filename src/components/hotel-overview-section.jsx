import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const HotelOverviewSection = ({ overviewDetails1, overviewDetails2, overviewDetails3, overviewImage }) => {
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
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {overviewDetails1}
          </p>
        </div>
      </MaxWidthWrapper>
      <div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative'>
        <img src={overviewImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='overviewImage' />
        <div className='bg-black/80 absolute bottom-0 left-0 right-0'>
          <MaxWidthWrapper>
            <p className='text-white text-2xl font-semibold tracking-[7.02px] leading-normal py-2'>
              Overview
            </p>
          </MaxWidthWrapper>
        </div>
      </div>
      <MaxWidthWrapper>
        <div>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {overviewDetails2}
          </p>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {overviewDetails3}
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HotelOverviewSection