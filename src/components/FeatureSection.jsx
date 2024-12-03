import React, { useState } from 'react';
import checked from '../assets/checked (2) 3.png';

function FeatureSection() {
  const [activeTab, setActiveTab] = useState('buyer');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const buyerContent = [
    {
      text: "Post your requirements.",
      icon: checked,
    },
    {
      text: "Sit back for multiple suppliers to contact you.",
      icon: checked,
    },
    {
      text: "Choose among the suppliers based on the ratings and reviews.",
      icon: checked,
    },
  ];

  const supplierContent = [
    {
      text: "Complete your profile and get verified.",
      icon: checked,
    },
    {
      text: "Select service tags for relevant opportunities.",
      icon: checked,
    },
    {
      text: "Reach out to buyers and expand your business.",
      icon: checked,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-[#072F57] text-white p-10 lg:p-12 xl:p-16 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <iframe
                className="w-full h-[250px] sm:h-[300px] lg:h-[250px] rounded-lg"
                src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=M8OJGxIptxJrOTc3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex gap-6 justify-center lg:justify-start">
              <button
                className={`border-b-2 border-transparent font-bold text-lg ${
                  activeTab === 'buyer' ? 'border-[#EB7150] text-[#EB7150]' : ''
                }`}
                onClick={() => handleTabClick('buyer')}
              >
                Buyer
              </button>
              <button
                className={`border-b-2 border-transparent font-bold text-lg ${
                  activeTab === 'supplier' ? 'border-[#EB7150] text-[#EB7150]' : ''
                }`}
                onClick={() => handleTabClick('supplier')}
              >
                Supplier
              </button>
            </div>
            <div className="mt-6">
              {activeTab === 'buyer' && (
                <ul className="space-y-4">
                  {buyerContent.map((item, index) => (
                    <li key={index} className="flex items-center text-sm md:text-base">
                      <img src={item.icon} alt="Checked Icon" className="mr-2 w-5 h-5" /> {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'supplier' && (
                <ul className="space-y-4">
                  {supplierContent.map((item, index) => (
                    <li key={index} className="flex items-center text-sm md:text-base">
                      <img src={item.icon} alt="Checked Icon" className="mr-2 w-5 h-5" /> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
