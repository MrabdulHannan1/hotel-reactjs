import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const HotelRoomSection = ({ roomDetails, roomImage }) => {
  return (
    <section id='overview' className='my-10'>
      <MaxWidthWrapper>
        <div>
          {/* <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Rooms
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Best Hotel with Best Rooms
          </h2>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {roomDetails}
          </p>
        </div>
      </MaxWidthWrapper>
      <div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative'>
        <img src={roomImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='overviewImage' />
        <div className='bg-black/70 absolute bottom-0 left-0 right-0'>
          <MaxWidthWrapper>
            <p className='text-white text-2xl font-semibold tracking-[7.02px] leading-normal py-2'>
              Room
            </p>
          </MaxWidthWrapper>
        </div>
      </div>
    </section>
  )
}

export default HotelRoomSection