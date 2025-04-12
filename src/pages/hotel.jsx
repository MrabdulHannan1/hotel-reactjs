import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import LogoBar from '../components/logo-bar';
import HotelHeroSection from '../components/hotel-hero-section';
import MaxWidthWrapper from '../components/max-width-wrapper';
import HotelOverviewSection from '../components/hotel-overview-section';
import HotelPhotosSection from '../components/hotel-photos-section';
import HotelLocationSection from '../components/hotel-location-section';
import HotelReviewSection from '../components/hotel-review-section';
import Footer from '../components/footer';
import HotelFacilitiesSection from '../components/hotel-facilities-section';
import HotelRoomSection from '../components/hotel-room-section';

const Hotel = () => {
  const location = useLocation();
  const { item } = location.state || {};
  
  if (!item) {
    return <p>No hotel data available.</p>;
  }

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Refs for different sections
  const overviewRef = useRef(null);
  const photosRef = useRef(null);
  const roomRef = useRef(null);
  const locationRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <LogoBar />
      <HotelHeroSection 
        image={item.banner} 
        location={item.location} 
        name={item.hotelName} 
        tag={item.hotelTag} 
      />

      {/* Navigation Section */}
      <section className='bg-myFooterBg hidden md:block'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-4 py-4'>
            <button onClick={() => scrollToSection(overviewRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal cursor-pointer'>Overview</button>
            <button onClick={() => scrollToSection(photosRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal cursor-pointer'>Photos</button>
            <button onClick={() => scrollToSection(roomRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal cursor-pointer'>Room</button>
            <button onClick={() => scrollToSection(locationRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal cursor-pointer'>Location</button>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Hotel Sections */}
      <div ref={overviewRef}>
        <HotelOverviewSection
          overviewDetails1={item.overviewDetails1}
          overviewDetails2={item.overviewDetails2}
          overviewDetails3={item.overviewDetails3}
          overviewImage={item.overviewImage} />
      </div>

      <div ref={photosRef}>
        <HotelFacilitiesSection
        facilitiesDetails1={item.facilitiesDetails1}
        facilitiesDetails2={item.facilitiesDetails2}
        facilitiesDetails3={item.facilitiesDetails3}
        facilitiesImages={item.facilities}
        />
      </div>

      <div ref={roomRef}>
        <HotelRoomSection
        roomDetails={item.roomDetails}
        roomImage={item.roomImage}
        />
      </div>

      <div ref={locationRef}>
        <HotelLocationSection
          loactionDetails={item.loactionDetails}
          planes={item.planes}
          trains={item.trains}
          automobiles={item.automobiles}
          locationImage={item.locationImage}
          location={item.location}
          Worthgettingoutofbedfor1={item.Worthgettingoutofbedfor1}
          Worthgettingoutofbedfor2={item.Worthgettingoutofbedfor2}
          Worthgettingoutofbedfor3={item.Worthgettingoutofbedfor3}
          localRestaurants={item.localRestaurants}
          hotelURL={item.hotelURL}
          address={item.address}
        />
        
      </div>


      <Footer />
    </div>
  );
};

export default Hotel;
