import React from 'react'

const CallToAction = () => {
  return (
    <div className='pt-28'>
      <div className='bg-[#E8FBFF] flex flex-col lg:flex-row justify-between p-6 lg:p-20'>
        
        <div className='pl-0 lg:pl-14 mb-6 lg:mb-0'>
          <h1 className='text-2xl lg:text-3xl font-bold text-center lg:text-left'>
            Let Suppliers <span className='underline decoration-[#EB7150]'>Find You</span>
          </h1>
        </div>

        
        <div className='text-center lg:text-right'>
          <button className='bg-[#EB7150] font-bold text-white w-[216px] h-[54px] rounded text-sm lg:text-base'>
            Get Verified
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToAction;
