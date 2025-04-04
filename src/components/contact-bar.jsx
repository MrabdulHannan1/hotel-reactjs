import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'

const ContactBar = () => {
  return (
    <nav className='w-full bg-myGray'>
      <MaxWidthWrapper>
        <header className="w-full h-12 relative flex items-center">
          <a href='#' className="font-normal text-[#0666eb] text-sm md:text-base absolute left-0">
            +88826549628
          </a>
          <div className="font-semibold text-black text-sm md:text-base mx-auto text-center">
            7 rue de Belloy 75116 Paris France
          </div>
        </header>
      </MaxWidthWrapper>
    </nav>
  )
}

export default ContactBar;
