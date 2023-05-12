import React from 'react';
import {  RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2 className='text-[#333333]'>Luxury Redefined: Unforgettable All-Inclusive Getaways with Exquisite Beaches</h2>
          <p className='py-4 text-[#555555]'>
          Immerse yourself in the lap of luxury as you indulge in unlimited gourmet dining, where the finest flavors from around the world tantalize your taste buds. Savor every sip at our unique bars, where premium liquors and wines flow freely, enhancing your relaxation and enjoyment.
Adventure awaits at every turn with a plethora of land and water sports at your fingertips. Dive into crystal-clear waters and explore vibrant underwater worlds with certified scuba diving experiences available at most resorts. Tee off on meticulously manicured golf courses with complimentary green fees, perfecting your swing amidst stunning vistas.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#E8E8E8] p-2 text-[#333333]'>
          <div className='border text-center '>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-[#555555] text-[#F9F7F2] py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Grande Antigua</option>
                      <option>Key West</option>
                      <option>Maldives</option>
                      <option>Cozumel</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4 bg-[#333333] text-[#F9F7F2]'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
