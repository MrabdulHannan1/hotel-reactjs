import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Logo from '../assets/logo.svg'

const LogoBar = () => {
  return (
    <section className='w-full py-4'>
      <MaxWidthWrapper>
        <div className='w-full flex justify-center'>
          <img src={Logo} className='h-12 md:h-22 object-contain' alt='Logo' />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default LogoBar