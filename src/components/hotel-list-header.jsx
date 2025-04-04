import React, { useState } from 'react';
import { hotelCategories } from '../lib/constants';

const HotelListHeader = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full flex flex-col items-center mt-16 ">
      <h2 className="text-myBlue text-2xl font-medium text-center">Accommodations</h2>
      <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-center">Available Hotels</h1>

      <div className="w-full max-w-[664px] mb-8 flex justify-center flex-wrap gap-8">
        {hotelCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleClick(category.name)}
            className={`text-xl font-bold ${
              activeCategory === category.name ? 'text-myBlue underline' : 'text-black'
            }`}
          >
            {category.name}
            <span className="text-sm text-myGrayText ml-1">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HotelListHeader;