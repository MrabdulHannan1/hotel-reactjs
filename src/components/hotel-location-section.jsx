import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import MapImage from '../assets/map-iamge.png'

const HotelLocationSection = ({ loactionDetails, planes, trains, automobiles, locationImage, location, Worthgettingoutofbedfor1, Worthgettingoutofbedfor2, Worthgettingoutofbedfor3, localRestaurants, hotelURL, address, addressURL }) => {
  return (
    <section id='location' className='my-10'>
      <div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative'>
        <img src={locationImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='overviewImage' />
        <div className='bg-black/70 absolute bottom-0 left-0 right-0'>
          <MaxWidthWrapper>
            <p className='text-white text-2xl font-semibold tracking-[7.02px] leading-normal py-2'>
              Location
            </p>
          </MaxWidthWrapper>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className='md:flex flex-row gap-10 mt-10'>
          <div className='w-full md:w-[70%] lg:w-[80%]'>
            {/*<div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
              Location
            </div>*/}
            <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
              Laid-back places for kindred spirits
            </h2>
            <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-6">
              {loactionDetails}
            </p>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Planes
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                {planes}
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Trains
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                {trains}
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Automobiles
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                {automobiles}
              </p>
            </div>
          </div>
          <div className='w-full md:w-[30%] lg:w-[20%]'>
            <div className='drop-shadow-xl p-4 bg-white '>
              <h5 className='text-myBlue text-xl font-bold text-start tracking-[5.02px] leading-normal py-2 uppercase'>
                Address
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px]">
                {address}
              </p>
              <img src={MapImage} alt='map' className='object-cover w-full aspect-square mt-4' />
            </div>
            <a href={addressURL} target="_blank" rel="noopener noreferrer" className='bg-myBlue gap-2 px-6 py-4 mt-4 w-full cursor-pointer block text-center'>
              <p className='text-lg font-bold text-white'>view map</p>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div>
          <div className='mt-10'>
            <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
              Worth getting out of bed for
            </h5>
            <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
              {Worthgettingoutofbedfor1}
            </p>
            <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
              {Worthgettingoutofbedfor2}
            </p>
            <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
              {Worthgettingoutofbedfor3}
            </p>
          </div>
          <div className='mt-10'>
            <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
              Local restaurants
            </h5>
            <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
              {localRestaurants}
            </p>
          </div>
          <div className='mt-10'>
            <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px] mb-4">
              For more details you can visit:
            </h5>
            <a href={hotelURL} target='_blank' className="text-lg md:text-2xl text-myBlue leading-[26px] font-bold underline">
              {hotelURL}
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HotelLocationSection