"use client"

import React, { useState } from 'react'
import MagicButton from './MagicButton'
import { FaCheck, FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = (id: number, link: string) => {
    if(id===2){
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    else{
      window.location.href = link;
    }
  }

  return (
    <footer className='w-full pt-20 pb-10 mb-6 overflow-hidden' id='contact'>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:prathamshalya@gmail.com">
            <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
            />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light max-md:mb-2'>Copyright © 2024 Pratham</p>

        <div className='flex items-center md:gap-6 gap-3'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 transform' onClick={() => handleClick(profile.id, profile.link)}>
                    {(profile.id !== 2 || !copied) ? (<img 
                        src={profile.img}
                        alt={String(profile.id)}
                        title={`Click to ${profile.id===2 ? "copy" : "proceed"}`}
                        width={20}
                        height={20}
                    />) : (<FaCheck width={20} height={20} />)}
                </div>
            ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer