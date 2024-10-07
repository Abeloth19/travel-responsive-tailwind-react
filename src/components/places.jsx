import React from 'react'

import forest from '../assets/forest.jpg';
import home from '../assets/home.jpg';
import ladakh from '../assets/ladakh.jpg';
import river from '../assets/river.jpg';
import road from '../assets/road.jpg';

const Places = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-[#333333]'>All-Inclusive Resorts</h1>
        <p className='py-4 text-[#555555]'>On The Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={forest} alt="/" />
            <img className='w-full h-full object-cover' src={home} alt="/" />
            <img className='w-full h-full object-cover' src={ladakh} alt="/" />
            <img className='w-full h-full object-cover' src={river} alt="/" />
            <img className='w-full h-full object-cover' src={road} alt="/" />
        </div>
    </div>
  )
} 

export default Places