import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const HotelReviewSection = ({details}) => {
  return (
    <section id='reviews' className='my-10'>
      <MaxWidthWrapper>
        <div>
          <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Reviews...
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Welcome to the best five-star hotels
          </h2>
          <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-6">
            {details}
          </p>
        </div>
      </MaxWidthWrapper>
      <div className='w-full bg-myFooterBg mt-10 py-10'>
        <MaxWidthWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-white md:leading-[49px]">
            Anonymous review
          </h2>
          <p className="text-base md:text-lg text-white font-normal leading-[26px] mt-6">
            {details}
          </p>
        </MaxWidthWrapper>
      </div>
      <div className='w-full mt-10'>
        <MaxWidthWrapper>
          <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-6">
            {details}
          </p>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default HotelReviewSection