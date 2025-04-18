import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router';
import { LanguageDropdown } from './language-dropdown';
import GoogleTranslate from './GoogleTranslate';

const LogoBar = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <div className="w-32 h-8 hidden md:block" />
          <Link to="/">
            <img src={Logo} className="h-12 md:h-22 object-contain" alt="Logo" />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageDropdown />
            <GoogleTranslate />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LogoBar;
