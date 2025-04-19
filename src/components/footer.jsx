import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import FooterLogo from '../assets/footer-logo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    // <footer className='bg-myFooterBg'>
    //   <MaxWidthWrapper>
    //     <div className='py-14 md:py-20'>
    //       <p className='text-white text-center text-3xl md:text-5xl font-bold pb-6 md:pb-10'>
    //         Sign Up For Exclusive
    //         <br/>
    //         Offers From Us
    //       </p>
    //       <hr className='my-4 border-gray-400' />
    //       <Link to='/' className='py-6 flex justify-center'>
    //         <img src={FooterLogo} alt='footer-logo' className='h-12 md:h-22 object-cover' />
    //       </Link>
    //       <div className='md:grid grid-cols-3 space-y-4 md:space-y-0'>
    //         <div className='justify-self-center flex flex-col'>
    //           <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal md:mb-4 text-center'>ADDRESS</p>
    //           <a href='#' className='text-white text-lg text-center'>736 Blue Spring Ave,<br/>Smithtown, NY 11787</a>
    //         </div>
    //         <div className='justify-self-center flex flex-col'>
    //           <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal md:mb-4 text-center'>PHONE</p>
    //           <a href='#' className='text-white text-lg text-center'>(+844) 1800 3859</a>
    //         </div>
    //         <div className='justify-self-center flex flex-col'>
    //           <p className='text-[#EBBC79] text-xl font-bold tracking-[7.02px] leading-normal md:mb-4 text-center'>RESERVATIONS</p>
    //           <a href='#' className='text-white text-lg text-center'>(+844) 1800 3355</a>
    //         </div>
    //       </div>
    //     </div>
    //   </MaxWidthWrapper>
    // </footer>
    <footer className='w-full py-4 bg-myFooterBg'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-center gap-6 md:gap-22'>
          <Link to='/about'>
            <p className='text-base md:text-lg font-bold text-white'>
              About us
            </p>
          </Link>
          <Link to='/'>
          <span className="font-gilroy text-white
font-extrabold text-xl">
  Paris Hotel Kleber .com
</span>          </Link>
          <Link to='/contact'>
            <p className='text-base md:text-lg font-bold text-white'>
              Contact us
            </p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer