import React from 'react'
import ContactImage from '../assets/contact-hero-image.png'
import MaxWidthWrapper from './max-width-wrapper'
import AboutImage from '../assets/about-image.png'
import ContactForm from './contact-form'

const ContactBody = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='w-full h-100 md:h-120 lg:h-140 relative'>
        <img src={ContactImage} className='w-full h-full object-cover' alt='ContactImage-Image' />
        <div className='bg-black/40 absolute inset-0 justify-center items-center flex flex-col'>
          <p className='text-white text-lg md:text-xl lg:text-2xl'>Paris Hotel Kleber</p>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center tracking-[0] leading-tight text-shadow-lg/50'>
            CONTACT US
          </h1>
        </div>
      </section>

      <section className='my-10'>
        <MaxWidthWrapper>
          <a href="#" className="text-xl md:text-2xl text-myBlue font-medium leading-6">
            Contact us
          </a>
          <h2 className="text-3xl md:text-4xl font-bold text-black md:leading-[49px]">
            Get in touch with us...
          </h2>
          <p className='text-black text-base md:text-lg mt-4'>
            If you need any help, please contact us or send us an email or go to our forum We are sure that you can receive our reply as soon as possible.
          </p>
        </MaxWidthWrapper>
      </section>

      <ContactForm />
    </div>
  )
}

export default ContactBody