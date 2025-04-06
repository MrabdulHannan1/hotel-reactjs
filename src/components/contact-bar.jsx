import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import { LanguageDropdown } from './language-dropdown';

const ContactBar = () => {
  return (
    <nav className='w-full bg-myGray'>
      <MaxWidthWrapper>
        <header className="w-full flex md:flex-row flex-col items-center justify-between gap-2 md:gap-0 py-2">
          <a href='#' className="font-normal text-[#0666eb] text-sm md:text-base">
            +88826549628
          </a>
          <div className="font-semibold text-black text-sm md:text-base text-center">
            7 rue de Belloy 75116 Paris France
          </div>
          <LanguageDropdown />
        </header>
      </MaxWidthWrapper>
    </nav>
  )
}

export default ContactBar;
