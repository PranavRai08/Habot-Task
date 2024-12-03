import React from 'react';
import suitcase from '../assets/suitcase 1.png';
import placeholder from '../assets/placeholder 1.png';

const HeroSection = () => {
  return (
    <div>
      <div className="bg-custom-gradient h-auto md:h-96 w-full relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8k~qqGEqOPOGELe8eaIK9DNKww1VvRXDU17NnAINtiSdHNlqpKKlZRqK8afttUELmHhzbcQ4i-RzZ~n2YH5gbXXIdhcyOQw5oovtPVZ2hLmjRiVRyOlEKh6WxZgBif1h3z1wpQ9uyPB5ASSZSKZWWoilOUpgYzJ8C90TkKzKIDfM4QndQzGl6I0naeO-86sWuBgejIaJHqcgJgu-qFH2AJo9RR6Bg6PgRdVN-Tq~FccWbJy~PF~qcADefpcOvJJR-Ncg3oALwkg4Atr0nRBGx13ov7sSqQkSzYLvBz~8AW-CDtTl~ZG~gGxeDRRFtIMjNM7r7ELsTYdpD7HJ771QA__"
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="container mx-auto p-6 md:p-24 text-center">
          <div className="pb-5">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Are You a Supplier?</h1>
            <h1 className="text-white text-3xl md:text-5xl">Explore Matching Opportunities.</h1>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="relative flex items-center w-full max-w-md">
                <img
                  className="absolute w-[21px] h-[21px] left-3 top-1/2 transform -translate-y-1/2"
                  src={suitcase}
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Search your required service here"
                  className="w-full h-[50px] pl-10 pr-4 border border-gray-300 rounded bg-white placeholder-gray-500 text-[#6B7280]"
                />
              </div>
              <div className="relative flex items-center w-full max-w-md">
                <img
                  className="absolute w-[21px] h-[21px] left-3 top-1/2 transform -translate-y-1/2"
                  src={placeholder}
                  alt=""
                />
                <input
                  type="text"
                  placeholder="Search your desired location here"
                  className="w-full h-[50px] pl-10 pr-4 border border-gray-300 rounded bg-white placeholder-gray-500 text-[#6B7280]"
                />
              </div>
              <div>
              <button className='relative p-1 m-2 z-20 w-[117.94px] h-[54px] bg-[#00732F] rounded font-bold text-white'>Search</button> 
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-white">
                <span className="font-bold">Are you a buyer?</span>{' '}
                <span className="underline cursor-pointer">
                  Click here if you are looking to post a requirement
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




