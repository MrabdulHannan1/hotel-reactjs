import React, { useState } from 'react'
import { hotelDetails } from '../lib/constants'
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate, useParams } from 'react-router';
import MapModal from './map-modal';

const HotelListBody = ({ hotels }) => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const [selectedMapUrl, setSelectedMapUrl] = useState(null);

  const handleSeeDetails = (item) => {
    // Convert hotel name to URL-friendly format
    const hotelName = item.hotelName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${lang}/hotel/${hotelName}`);
  };

  return (
    <div>
      {
        hotels.map((item) => (
          <div className='drop-shadow-xl mb-12 md:mb-20' key={item.id}>

            {/* Desktop */}
            <div className='hidden lg:grid grid-cols-2 h-120  overflow-hidden'>
              {/* Hotel Image */}
              <button className='cursor-pointer w-full h-120' onClick={() => handleSeeDetails(item)}>
                <img src={item.banner} alt='hotelImage' className='object-cover w-full h-120' />
              </button>
              {/* Hotel Details */}
              <div className={`bg-white px-6 xl:px-14 flex flex-col justify-center ${item.id % 2 === 0 ? '-order-1' : ''} `}>
                <h1 className='text-4xl font-bold text-black'>
                  {item.hotelName}
                </h1>
                <div className='flex flex-row justify-between mt-2'>
                  <div>
                    <span className='text-lg font-bold text-black'>{lang === 'fr' ? 'Emplacement:' : 'Location:'}</span> {" "}
                    <span className='text-lg text-myGrayText'>{item.location}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedMapUrl(item.addressURL)}
                    className='text-lg text-myBlue font-semibold underline underline-offset-2'
                  >
                    {lang === 'fr' ? 'Voir la carte' : 'View Map'}
                  </button>
                </div>
                <p className='text-lg text-myGrayText mt-2 line-clamp-4'>{item.details}</p>
                <div className='grid grid-cols-3 mt-4 gap-2'>
                  {
                    item.hotelTags.map((m, i) => (
                      <p className='text-lg font-bold text-black' key={i}>{m}</p>
                    ))
                  }  
                </div>
                <hr className='my-4 border-black' />
                <div className='flex justify-between'>
                  <div>
                    {/* <p className='text-lg font-bold text-black'>From</p> */}
                    {/* <div className='text-lg font-bold text-black'><span className='text-[#EBBC79] text-2xl'>$ {item.price}</span>  /night</div> */}
                  </div>
                  <button onClick={() => handleSeeDetails(item)} className='bg-myBlue flex items-center gap-2 py-2 px-6 mt-4'>
                    <p className='text-lg font-bold text-white'>{lang === 'fr' ? 'VOIR LES DÉTAILS' : 'SEE DETAILS'}</p>
                    <FaArrowRight className='size-6 fill-white' />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className='lg:hidden rounded-2xl overflow-hidden'>
              {/* Hotel Image */}
              <button className='cursor-pointer w-full' onClick={() => handleSeeDetails(item)}>
                <img src={item.banner} alt='hotelImage' className='object-cover w-full h-60' />
              </button>
              {/* Hotel Details */}
              <div className={`bg-white p-4 md:p-6 flex flex-col justify-center ${item.id % 2 === 0 ? '-order-1' : ''} `}>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>
                  {item.hotelName}
                </h1>
                <div className='md:flex flex-row justify-between mt-2'>
                  <div>
                    <span className='text-base md:text-lg font-bold text-black'>{lang === 'fr' ? 'Emplacement:' : 'Location:'}</span> {" "}
                    <span className='text-base md:text-lg text-myGrayText'>{item.location}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedMapUrl(item.addressURL)}
                    className='text-base md:text-lg text-myBlue font-semibold underline underline-offset-2'
                  >
                    {lang === 'fr' ? 'Voir la carte' : 'View Map'}
                  </button>
                </div>
                <p className='text-base md:text-lg text-myGrayText mt-2'>{item.details}</p>
                <div className='grid grid-cols-2 md:grid-cols-3 mt-4 gap-2'>
                  {
                    item.hotelTags.map((m, i) => (
                      <p className='text-base md:text-lg font-bold text-black' key={i}>{m}</p>
                    ))
                  }  
                </div>
                <hr className='my-4 border-black' />
                <div className='flex justify-between'>
                  <div>
                    {/*<p className='text-base md:text-lg font-bold text-black'>From</p>*/}
                    {/*<div className='text-base md:text-lg font-bold text-black'><span className='text-[#EBBC79] text-xl md:text-2xl '>$ {item.price}</span>  /night</div>*/}
                  </div>
                  <button onClick={() => handleSeeDetails(item)} className='bg-myBlue flex items-center gap-2 py-2 px-4 md:px-6'>
                    <p className='text-lg font-bold text-white'>{lang === 'fr' ? 'VOIR LES DÉTAILS' : 'SEE DETAILS'}</p>
                    <FaArrowRight className='size-6 fill-white' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      <MapModal 
        isOpen={!!selectedMapUrl}
        onClose={() => setSelectedMapUrl(null)}
        mapUrl={selectedMapUrl}
      />
    </div>
  )
}

export default HotelListBody