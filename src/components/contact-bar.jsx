import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const ContactBar = () => {
  return (
    <nav className='w-full bg-myGray'>
      <MaxWidthWrapper>
        <header className="w-full h-12 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <a href='#' className="font-normal text-[#0666eb] text-sm md:text-base">
            +88826549628
          </a>
          <div className="font-semibold text-black text-sm md:text-base">
            7 rue de Belloy 75116 Paris France
          </div>
        </header>
      </MaxWidthWrapper>
    </nav>
  )
}

export default ContactBar;