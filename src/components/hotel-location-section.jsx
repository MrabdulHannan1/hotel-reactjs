import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import MapImage from '../assets/map-iamge.png'

const HotelLocationSection = ({locationImage, location}) => {
  return (
    <section id='location' className='my-10'>
      <MaxWidthWrapper>
        <div className='md:flex flex-row gap-10'>
          <div className='w-full md:w-[70%] lg:w-[80%]'>
            <p className="text-base md:text-lg text-black font-normal leading-[26px]">
              The hotel sits on the fringes of Chow Kit, Kuala Lumpur’s once-upon-a- time red-light district, for which it was named.
            </p>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Planes
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                Kuala Lumpur International Airport is 60 kilometres from the hotel and transfers can be arranged for MYR75 each way;
                Subang Airport is 27 kilometres away – transfers to and from this hub cost MYR50 each way.
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Trains
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                The Medan Tuanku stop on the city’s monorail is six minutes away by car, and under five minutes on foot.
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Automobiles
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                You won’t need your own set of wheels if you’re staying in the city, but it’s\ worth downloading the Grab app before you
              arrive – Malaysia’s answer to Uber. If you do choose to drive yourself, valet parking is MYR3 an hour or MYR15 a day.
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Worth getting out of bed for
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                Salute the sunrise with yoga sessions, held Monday, Wednesday and Friday on the hotel’s rooftop terrace. Then, after a fortifying breakfast, book onto a bespoke walking tour and learn about Chow Kit’s history, food and culture.
              </p>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                Wander through historic Loke Mansion or take a guided walking tour of nearby Chow Kit Market, Kuala Lumpur’s biggest, and get the inside scoop on the sprawling mass of stalls that sell everything from fresh produce and fish to DVDs of questionable origin.
              </p>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                In the mood for a little retail therapy? Make your way to Bukit Bintang, also known as Starhill, and treasure hunt through the district’s bijoux boutiques and sizeable shopping centres, stop for snacks at the hawker-style eateries and get your caffeine fix at one of the many alfresco cafés. If you’re inspired by Malaysian design, spruce up your own space with handcrafted furniture from 
              </p>
            </div>
            <div className='mt-10'>
              <h5 className="text-xl md:text-2xl font-semibold text-black leading-[26px]">
                Local restaurants
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px] mt-2">
                Wake up with a jolt of rich coffee and a fluffy baked treat at nearby Common Grind before starting your day's city adventures. Stop for lunch Kin Kin Chilli Pan Mee Shop — made famous by Momofuku's David Chang - and order bowls of spicy noodles. If it's a steak and carbs kind of night, look no further than Marble 8 Steak House for the city's finest cuts of Wagyu and Angus.
              </p>
            </div>
          </div>
          <div className='w-full md:w-[30%] lg:w-[20%]'>
            <div className='drop-shadow-xl p-4 bg-white '>
              <h5 className='text-myBlue text-xl font-bold text-start tracking-[5.02px] leading-normal py-2 uppercase'>
                Address
              </h5>
              <p className="text-base md:text-lg text-black font-normal leading-[26px]">
                {location}
              </p>
              <img src={MapImage} alt='map' className='object-cover w-full aspect-square mt-4' />
            </div>
            <button className='bg-myBlue gap-2 px-6 py-4 mt-4 w-full'>
              <p className='text-lg font-bold text-white'>view map</p>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className='w-full bg-myGray mt-10'>
      <MaxWidthWrapper>
        <p className='text-myBlue text-2xl font-semibold text-center tracking-[7.02px] leading-normal py-2'>
          LOCATION
        </p>
      </MaxWidthWrapper>
      <img src={locationImage} className='w-full h-100 md:h-120 lg:h-140 object-cover' alt='locationImage' />
    </div>
    </section>
  )
}

export default HotelLocationSection