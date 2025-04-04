import React, { useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import HotelListHeader from './hotel-list-header';
import HotelListBody from './hotel-list-body';
import { hotelDetails } from '../lib/constants';

const HotelList = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotelDetails);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredHotels(hotelDetails);
    } else {
      const filtered = hotelDetails.filter(hotel => hotel.category === category);
      setFilteredHotels(filtered);
    }
  };

  return (
    <section id='hotel'>
      <MaxWidthWrapper>
        <HotelListHeader onCategoryChange={handleCategoryChange} />
        <HotelListBody hotels={filteredHotels} />
      </MaxWidthWrapper>
    </section>
  );
};

export default HotelList;