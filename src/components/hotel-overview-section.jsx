import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import React, { useRef } from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Slider from 'react-slick';

const HotelOverviewSection = ({ overviewDetails1, overviewDetails2, overviewDetails3, overviewImage, slider }) => {
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section id='overview' className='my-10'>
      <MaxWidthWrapper>
        <div>
          {/* <div className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Overview
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Laid-back places for kindred spirits
          </h2>
          <p className="text-base md:text-xl text-black font-normal leading-[26px] mt-6">
            {overviewDetails1}
          </p>
        </div>
      </MaxWidthWrapper>
      <div className='w-full h-100 md:h-140 lg:h-160 mt-10 relative overflow-hidden'>
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
            Facilities
          </p>
        </MaxWidthWrapper>
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