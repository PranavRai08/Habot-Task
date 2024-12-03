import React from 'react'
import SignUp from '../assets/SignUp.png';
import Document from '../assets/document.png';
import Search from '../assets/Search.png';
import Edit from '../assets/edit.png';
import Quote from '../assets/quote.png';
import Group from '../assets/Group.png';

const HowItWorks = () => {
  return (
    <div className='container'>
      <div className='text-center max-w-3xl mx-auto p-6'>
        <h1 className='text-3xl font-bold p-6'>How it works?</h1>
        <p className='text-sm px-6 lg:px-0'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      </div>

      
      <div className='text-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          
          <div className='p-6 bg-[#E8FBFF] flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={SignUp} alt="Sign Up" />
            <h1 className='p-4 font-semibold text-lg'>Select Your Role and Sign Up</h1>
          </div>
          
          
          <div className='p-6 flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={Document} alt="Post Requirements" />
            <h1 className='p-4 font-semibold text-lg'>Buyers Post Your Requirements</h1>
          </div>
          

          <div className='p-6 bg-[#E8FBFF] flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={Search} alt="Review & Select" />
            <h1 className='p-4 font-semibold text-lg'>Review, Select, and Contact the Best Suppliers</h1>
          </div>
        </div>

        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>

          <div className='p-6 flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={Edit} alt="Suppliers Complete Profile" />
            <h1 className='p-4 font-semibold text-lg'>Suppliers Complete Your Profile and Get Notified for Opportunities</h1>
          </div>
          

          <div className='p-6 bg-[#E8FBFF] flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={Quote} alt="Contact & Share Quote" />
            <h1 className='p-4 font-semibold text-lg'>Contact Buyers and Share Your Quote for the Service</h1>
          </div>
          

          <div className='p-6 flex flex-col items-center justify-center'>
            <img className='w-16 h-16' src={Group} alt="Connect & Leave Feedback" />
            <h1 className='p-4 font-semibold text-lg'>Both the Parties Can Connect and Make Business, Leave a Feedback</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
