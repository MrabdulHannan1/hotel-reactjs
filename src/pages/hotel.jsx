import React, { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
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
import GDPRBanner from '../components/gdpr';
import { hotelDetails } from '../lib/constants';

const Hotel = () => {
  const { hotelName, lang } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Find the hotel data based on the hotel name
  const item = hotelDetails.find(hotel => 
    hotel.hotelName.toLowerCase().replace(/\s+/g, '-') === hotelName.toLowerCase()
  );

  if (!item) {
    return <p>Hotel not found.</p>;
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
  const scrollToSection = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <div>
      <GDPRBanner />
      <LogoBar currentLang={lang} />
      <HotelHeroSection 
        image={item.heroImage} 
        location={item.location} 
        name={item.hotelName} 
        tag={item.hotelTag} 
      />

      {/* Navigation Section */}
      <section className='bg-myFooterBg hidden md:block'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-4 py-4'>
            <button 
              onClick={() => scrollToSection(overviewRef, 'overview')} 
              className={`text-center font-semibold text-lg uppercase tracking-[5.02px] leading-normal cursor-pointer ${
                activeSection === 'overview' ? 'text-blue-500' : 'text-white'
              }`}
            >
              {lang === 'fr' ? 'Aperçu' : 'Overview'}
            </button>
            <button 
              onClick={() => scrollToSection(photosRef, 'facilities')} 
              className={`text-center font-semibold text-lg uppercase tracking-[5.02px] leading-normal cursor-pointer ${
                activeSection === 'facilities' ? 'text-blue-500' : 'text-white'
              }`}
            >
              {lang === 'fr' ? 'Équipements' : 'Facilities'}
            </button>
            <button 
              onClick={() => scrollToSection(roomRef, 'room')} 
              className={`text-center font-semibold text-lg uppercase tracking-[5.02px] leading-normal cursor-pointer ${
                activeSection === 'room' ? 'text-blue-500' : 'text-white'
              }`}
            >
              {lang === 'fr' ? 'Chambre' : 'Room'}
            </button>
            <button 
              onClick={() => scrollToSection(locationRef, 'location')} 
              className={`text-center font-semibold text-lg uppercase tracking-[5.02px] leading-normal cursor-pointer ${
                activeSection === 'location' ? 'text-blue-500' : 'text-white'
              }`}
            >
              {lang === 'fr' ? 'Emplacement' : 'Location'}
            </button>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Hotel Sections */}
      <div ref={overviewRef}>
        <HotelOverviewSection
          overviewDetails1={item.overviewDetails1}
          overviewDetails2={item.overviewDetails2}
          overviewDetails3={item.overviewDetails3}
          overviewImage={item.overviewImage}
          slider={item.slider} />
      </div>

      <div ref={photosRef}>
        <HotelFacilitiesSection
        facilitiesDetails1={item.facilitiesDetails1}
        facilitiesDetails2={item.facilitiesDetails2}
        facilitiesDetails3={item.facilitiesDetails3}
        overviewDetails2={item.overviewDetails2}
        overviewDetails3={item.overviewDetails3}
        facilitiesImages={item.facilities}
        facilitiesSlider={item.facilities}
        />
      </div>

      <div ref={roomRef}>
        <HotelRoomSection
        roomDetails={item.roomDetails}
        roomImage={item.roomImage}
        facilitiesDetails1={item.facilitiesDetails1}
        facilitiesDetails2={item.facilitiesDetails2}
        facilitiesDetails3={item.facilitiesDetails3}
        facilitiesImages={item.facilities}
        roomsSlider={item.rooms}
        slider={item.slider}
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
          addressURL={item.addressURL}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Hotel;
