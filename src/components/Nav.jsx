import React, { useState } from 'react';
import habot from '../assets/habot-logo.jpg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container flex items-center justify-between h-[86px] px-4 md:px-10 lg:px-20">
      
      <div className="logo-container">
        <img className="w-[181px] h-[43px]" src={habot} alt="Habot Logo" />
      </div>

      
      <div className="flex items-center space-x-5">
        <ul className={`md:flex space-x-5 items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="text-[#6D6E71] cursor-pointer">Find Service Tags</li>
          <li className="text-[#6D6E71] cursor-pointer">Find Suppliers</li>
          <button className="text-sm login text-green-500 border-solid border-2 w-[193.31px] h-[50px] border-green-500 font-bold">
            Login / Sign Up
          </button>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#6D6E71] cursor-pointer">
            {isMenuOpen ? 'Close Menu' : 'Menu'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
