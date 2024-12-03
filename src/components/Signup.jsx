import React from 'react';

const Signup = () => {
  return (
    <div className=" mx-auto p-6 md:p-20 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
      
      <div className="max-w-md text-center lg:text-left">
        <h1 className="font-bold text-2xl md:text-3xl pb-6">Ready to dive into HABOT?</h1>
        <p className="text-sm md:text-base pb-6">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain
          access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step
          towards realizing your entrepreneurial dreams.
        </p>
        <button className="w-full md:w-[317px] h-[54px] bg-[#00732F] rounded font-bold text-white">
          Sign up Today!
        </button>
      </div>

      
      <div className="w-full lg:w-auto flex flex-wrap justify-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Abu Dhabi
            </button>
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Dubai
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Sharjah & Ajman
            </button>
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Fujairah
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Ras Al Khaimah
            </button>
            <button className="border w-full sm:w-[260px] h-[65px] border-orange-500 hover:bg-orange-500 hover:text-white text-black py-2 px-4 rounded-lg">
              Umm Al Quwain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
