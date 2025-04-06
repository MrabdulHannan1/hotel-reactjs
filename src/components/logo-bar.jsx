import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router'

const LogoBar = () => {
  return (
    <section className='w-full py-4'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-center gap-6 md:gap-20'>
          <Link to='/about'>
            <p className='text-base md:text-lg font-bold text-black'>
              About us
            </p>
          </Link>
          <Link to='/'>
            <img src={Logo} className='h-12 md:h-22 object-contain' alt='Logo' />
          </Link>
          <Link to='/contact'>
            <p className='text-base md:text-lg font-bold text-black'>
              Contact us
            </p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default LogoBar