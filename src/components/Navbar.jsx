import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="text-red-500 select-none font-bold italic text-4xl">TÇ</div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        {/* hamburger */}
        <div onClick={handleClick} className="z-full md:hidden">
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {/* mobile menu */}
        <ul
          className={`${
            nav ? 'flex' : 'hidden'
          } absolute top-0 left-0 w-full h-screen justify-center flex-col gap-4 text-2xl bg-[#0a192f] md:hidden items-center`}
        >
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}
