import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router'

const LogoBar = () => {
  return (
    <section className='w-full py-4'>
      <MaxWidthWrapper>
        <Link to='/' className='w-full flex justify-center'>
          <img src={Logo} className='h-12 md:h-22 object-contain' alt='Logo' />
        </Link>
      </MaxWidthWrapper>
    </section>
  )
}

export default LogoBar