import React from 'react';

import mountains from '../assets/mountains.mp4';

const Head = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={mountains}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0  w-full h-full flex flex-col justify-center   text-white p-4'>
        <div className=' text-[80px]  text-[#B1D8B7] flex lg:flex-row flex-col lg:space-x-2 space-y-2'>
          <p>Escape,</p> 
          <p> Explore,</p> 
          <p> Experience</p> 
          </div>        
        <h2 className='py-4 text-[#FFD8BF] text-md'>Travel Beyond Boundaries</h2>     
      </div>
    </div>
  );
};

export default Head;
