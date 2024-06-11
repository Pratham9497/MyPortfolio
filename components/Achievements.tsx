"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, achievements } from '@/data'

const Achievements = () => {
  return (
    <div className='py-20' id='achievements'>
      <h1 className='heading'>
        My {' '}
        <span className='text-purple'>
          Achievements
        </span>
        {' '}
        and
        {' '}
        <span className='text-purple'>
          Coding Profiles
        </span>
      </h1>
      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards 
          items={achievements}
          direction='right'
          speed='slow'
          />
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
          {companies.map(({id, img, name, link}) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2 cursor-pointer' onClick={() => {window.location.href=link}}>
              <img 
                src={img}
                alt={name}
                className='md:w-10 w-5'
              />

              <div 
                className='md:text-2xl text-xl flex items-center'
              >
                {name}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
