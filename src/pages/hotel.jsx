import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import ContactBar from '../components/contact-bar';
import LogoBar from '../components/logo-bar';
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
  const locationRef = useRef(null);
  const reviewsRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <ContactBar />
      <LogoBar />
      <HotelHeroSection 
        image={item.image} 
        location={item.location} 
        name={item.hotelName} 
        price={item.price} 
      />

      {/* Navigation Section */}
      <section className='bg-myFooterBg hidden md:block'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-4 py-4'>
            <button onClick={() => scrollToSection(overviewRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Overview</button>
            <button onClick={() => scrollToSection(photosRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Photos</button>
            <button onClick={() => scrollToSection(locationRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Location</button>
            <button onClick={() => scrollToSection(reviewsRef)} className='text-white font-semibold text-lg uppercase text-center tracking-[5.02px] leading-normal'>Reviews</button>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Hotel Sections */}
      <div ref={overviewRef}>
        <HotelOverviewSection details={item.details} fimage={item.fimage} />
      </div>

      <div ref={photosRef}>
        <HotelPhotosSection details={item.details} fimage={item.fimage} />
      </div>

      <div ref={locationRef}>
        <HotelLocationSection locationImage={item.locationImage} location={item.location} />
      </div>

      <div ref={reviewsRef}>
        <HotelReviewSection details={item.details} />
      </div>

      <Footer />
    </div>
  );
};

export default Hotel;
