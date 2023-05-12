import React from 'react'

import forest from '../assets/forest.jpg';
import home from '../assets/home.jpg';
import ladakh from '../assets/ladakh.jpg';
import river from '../assets/river.jpg';
import road from '../assets/road.jpg';
import river2 from '../assets/river2.jpg';
import Cards from './cards';

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <Cards bg={forest} text='Jammu' />
    <Cards bg={home} text='Kashmir' />
    <Cards bg={ladakh} text='Ladakh' />
    <Cards bg={river} text='Kerala' />
    <Cards bg={road} text='Karnataka' />
    <Cards bg={river2} text='Tamil Nadu' />
    
        
    </div>
  )
}

export default Select