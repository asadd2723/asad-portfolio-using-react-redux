import React from 'react'
import WomanImg from '../assets/img/banner-woman2.webp'
import { LiaLinkedin } from 'react-icons/lia'
function Hero() {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className='flex items-center h-full pt-8'>
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className='text-accent text-xl mb-[22px]'>Hey! I'm Asad </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-center text-lg lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio voluptatem unde ea voluptates,</p>
            <a href="https://www.linkedin.com/in/asadd2723/" target="_blank" rel="noopener noreferrer">
            <button className='btn btn-md bg-accent text-xl hover:bg-accent-hover md:btn-lg transition-all cursor-pointer'>
              <span>Connect on Linkedin</span> 
              <LiaLinkedin size={35} className='text-secondary' />
            </button>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero