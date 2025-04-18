import React, { useRef } from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Marquee from 'react-fast-marquee'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

const HotelRoomSection = ({ roomDetails, roomImage, facilitiesDetails1, facilitiesDetails2, facilitiesDetails3, facilitiesImages, slider }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <section id='overview' className='my-10'>
      <div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative overflow-hidden'>
        <Slider ref={slider => { sliderRef = slider; }} {...settings}>
          {
            slider.map((item) => (
              <div key={item.id} className="w-full h-full">
                <img src={item} className="w-full h-full object-cover" alt='image' />
              </div>
            ))
          }
        </Slider>
        <div className='absolute inset-0 w-full flex justify-between items-center px-4 md:px-10'>
          <button onClick={previous} className="bg-white/90 p-2 rounded-full cursor-pointer">
            <FaAngleLeft className="size-6" />
          </button>
          <button onClick={next} className="bg-white/90 p-2 rounded-full cursor-pointer">
            <FaAngleRight className="size-6" />
          </button>
        </div>
      </div>
      <div className='bg-black/80'>
        <MaxWidthWrapper>
          <p className='text-white text-2xl font-semibold tracking-[7.02px] leading-normal py-2'>
            Rooms
          </p>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className='mt-10'>
          {/* <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
        Facilities
      </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Welcome to the best five-star hotels
          </h2>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {facilitiesDetails1}
          </p>
        </div>

        {/*<div className='w-full h-100 md:h-120 lg:h-140 mt-10 relative'>
    <img src={overviewImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='overviewImage' />
  </div>*/}
        <div className='w-full'>
          <Marquee autoFill pauseOnHover>
            {
              Array.isArray(facilitiesImages) && facilitiesImages.length > 0 ? (
                facilitiesImages.map((item, index) => (
                  <div key={index} className='p-4'>
                    <img src={item} className='w-100 h-100 md:h-120 lg:h-140 object-cover cursor-pointer hover:scale-105 duration-500' alt={`Facility ${index + 1}`} />
                  </div>
                ))
              ) : (
                <div>No facilities available</div>
              )
            }
          </Marquee>
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

      {/*<MaxWidthWrapper>
        <div>
           <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Rooms
          </div> 
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
      </div>*/}
    </section>
  )
}

export default HotelRoomSection