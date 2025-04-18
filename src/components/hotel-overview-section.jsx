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
    </section>
  )
}

export default HotelOverviewSection