import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import ContactBar from '../components/contact-bar'
import LogoBar from '../components/logo-bar'
import HotelHeroSection from '../components/hotel-hero-section';
import MaxWidthWrapper from '../components/max-width-wrapper';
import HotelOverviewSection from '../components/hotel-overview-section';
import HotelPhotosSection from '../components/hotel-photos-section';
import HotelLocationSection from '../components/hotel-location-section';
import HotelReviewSection from '../components/hotel-review-section';
import Footer from '../components/footer';

const Hotel = () => {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item)

  if (!item) {
    return <p>No hotel data available.</p>;
  }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <ContactBar />
      <LogoBar />
      <HotelHeroSection image={item.image} location={item.location} name={item.hotelName} price={item.price} />
      {/* Four Options */}
      <section className='bg-myFooterBg hidden md:block'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-4 py-4'>
            <a href='#' className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Overview</a>
            <a href='#' className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Photos</a>
            <a href='#' className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Location</a>
            <a href='#' className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Reviews</a>
          </div>
        </MaxWidthWrapper>
      </section>
      <HotelOverviewSection details={item.details} fimage={item.fimage} />
      <HotelPhotosSection details={item.details} fimage={item.fimage} />
      <HotelLocationSection locationImage={item.locationImage} location={item.location} />
      <HotelReviewSection details={item.details} />
      <Footer />
    </div>
  )
}

export default Hotel