import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import HotelListHeader from './hotel-list-header'
import HotelListBody from './hotel-list-body'

const HotelList = () => {
  return (
    <section id='hotel'>
      <MaxWidthWrapper>
        <HotelListHeader />
        <HotelListBody />
      </MaxWidthWrapper>
    </section>
  )
}

export default HotelList