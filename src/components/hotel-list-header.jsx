import React from 'react'
import { hotelCategories } from '../lib/constants'

const HotelListHeader = () => {
  return (
        <div className="w-full flex flex-col items-center">
          <div className="text-myBlue text-2xl font-medium text-center">
            Accommodations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-center">Available Hotels</h2>

          {/* Hotel Category Tabs */}
          <div className="w-full max-w-[664px] mb-8 hidden md:block">
            <div className="w-full bg-transparent justify-between">
              {hotelCategories.map((category) => (
                <a 
                  href='#'
                  key={category.name}
                  value={category.name}
                  className="text-xl font-bold mr-8"
                >
                  <span className={`${category.active ? "text-myBlue underline" : "text-black"}`}>{category.name}</span>
                  <span className="text-sm text-myGrayText ml-1">
                    ({category.count})
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
  )
}

export default HotelListHeader