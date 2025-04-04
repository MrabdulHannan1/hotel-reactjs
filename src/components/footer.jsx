import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import FooterLogo from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <footer className='bg-myFooterBg'>
      <MaxWidthWrapper>
        <div className='py-20'>
          <p className='text-white text-center text-5xl font-bold pb-20'>
            Sign Up For Exclusive
            <br/>
            Offers From Us
          </p>
          <hr className='my-4 border-gray-400' />
          <div className='py-6 justify-self-center'>
            <img src={FooterLogo} alt='footer-logo' className='object-cover' />
          </div>
          <div className='grid grid-cols-3'>
            <div className='justify-self-center'>
              <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal mb-4 text-center'>ADDRESS</p>
              <a href='#' className='text-white text-lg text-center'>736 Blue Spring Ave,<br/>Smithtown, NY 11787</a>
            </div>
            <div className='justify-self-center'>
              <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal mb-4 text-center'>PHONE</p>
              <a href='#' className='text-white text-lg text-center'>(+844) 1800 3859</a>
            </div>
            <div className='justify-self-center'>
              <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal mb-4 text-center'>RESERVATIONS</p>
              <a href='#' className='text-white text-lg text-center'>(+844) 1800 3355</a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer