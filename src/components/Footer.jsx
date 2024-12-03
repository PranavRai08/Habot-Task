import React from 'react';
import Habot from '../assets/Habot.png';
import List from '../assets/List.png';

const Footer = () => {
  return (
    <div className='pt-20'>
      <div className='bg-[#123557] p-7'>
        <div className='container'>
          <div className='flex flex-wrap justify-between p-10 border-t border-b border-[#FFFFFF33] text-[#FFFFFF]'>
            
            <div className='flex flex-col justify-center p-7'>
              <img className='w-[206px] h-[40.15px]' src={Habot} alt="Habot Logo" />
              <h1 className='text-sm'>&copy; R Singhania</h1>
            </div>

            
            <div className=''>
              <h1 className='font-bold py-2 text-white'>Company</h1>
              <h1 className='text-sm'>About</h1>
              <h1 className='text-sm'>FAQ</h1>
            </div>

            
            <div className=''>
              <h1 className='font-bold py-2 text-white'>Terms</h1>
              <h1 className='text-sm'>Data Privacy</h1>
              <h1 className='text-sm'>Terms</h1>
              <h1 className='text-sm'>Accessibility</h1>
            </div>

            
            <div className=''>
              <h1 className='font-bold py-2 text-white'>Related</h1>
              <h1 className='text-sm'>Find Buyer</h1>
              <h1 className='text-sm'>Feedback</h1>
            </div>

            
            <div className=' p-7'>
              <img src={List} alt="List Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
