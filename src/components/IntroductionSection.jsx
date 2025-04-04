import React from "react";
import Image1 from '../assets/image-7.png'
import Image2 from '../assets/image-8.png'
import MaxWidthWrapper from "./max-width-wrapper";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export const IntroductionSection = () => {
  return (
    <section className="w-full py-16 md:py-20">
      <MaxWidthWrapper>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Images container */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[526px]">
                <img
                  className="w-[505px] h-[430px] object-cover absolute top-0 left-0"
                  alt="Luxury-hotel-room-with-view"
                  src={Image1}
                />
                <img
                  className="w-[280px] md:w-[397px] h-[338px] object-cover absolute top-[188px] right-0 lg:left-[191px]"
                  alt="Elegant-hotel-interior"
                  src={Image2}
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 max-w-[617px]">
              <div className="space-y-4">
                <a href="#" className="text-xl md:text-2xl text-myBlue font-medium leading-6">
                  We Are Here...
                </a>

                <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
                  Where Simple Luxury &amp;
                  <br />
                  Tranquility Meet
                </h2>

                <div className="mt-6">
                  <p className="text-lg text-black font-normal leading-[26px]">
                    Enjoy sweeping water views when you reserve a Hudson River View Suite.
                    Spread out in an Executive or Luxury Suite with over 700 square feet of
                    lavish living areas with integrated technology. Live the New York lifestyle
                    in the Conrad Suite, featuring an office and separate living and dining
                    areas. Executive or Luxury Suite with over 700 square feet of lavish living
                    areas with integrated technology. Live the New York lifestyle in the Conrad
                    Suite, featuring an office and separate living and dining areas. water views
                    when you reserve a Hudson River View Suite. Spread out in an Executive or
                    Luxury Suite with over 700 square feet of lavish living areas with integrated
                    technology.
                  </p>
                </div>

                <Link to='/about' className='bg-myBlue flex items-center gap-2 px-6 py-4 justify-self-end'>
                  <p className='text-lg font-bold text-white'>ABOUT US</p>
                  <FaArrowRight className='size-6 fill-white' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
