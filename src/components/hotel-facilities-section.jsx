import React, { useRef } from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Slider from "react-slick"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"
import Marquee from 'react-fast-marquee'

const HotelFacilitiesSection = ({ facilitiesDetails1, facilitiesDetails2, facilitiesDetails3, facilitiesImages }) => {
  
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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
    </section>
  )
}

export default HotelFacilitiesSection