import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="text-red-500 select-none font-bold italic text-4xl">
        TÇ
      </div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex items-center">
          <a href="#home">
            <li className="cursor-pointer">Home</li>
          </a>
          <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
          <a href="#skiils">
            <li className="cursor-pointer">Skills</li>
          </a>
          <a href="#work">
            <li className="cursor-pointer">Work</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer">Contact</li>
          </a>{" "}
        </ul>
        {/* hamburger */}
        <div onClick={handleClick} className="z-full md:hidden">
          {nav ? (
            <FaTimes className="z-50" onClick={handleClick} />
          ) : (
            <FaBars className="z-50" />
          )}
        </div>
        {/* mobile menu */}
        {nav && (
          <div className="absolute top-0 z-50  left-0 w-full h-screen bg-[#0a192f] text-2xl md:hidden">
            <div className="flex justify-end z-50 p-4">
              <FaTimes className="z-50" onClick={handleClick} />
            </div>
            <ul className="flex flex-col items-center gap-4 mt-36">
              <a href="#home">
                <li className="cursor-pointer">Home</li>
              </a>{" "}
              <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
              <a href="#skiils">
                <li className="cursor-pointer">Skills</li>
              </a>
              <a href="#work">
                <li className="cursor-pointer">Work</li>
              </a>
              <a href="#contact">
                <li className="cursor-pointer">Contact</li>
              </a>
            </ul>
            <div className="flex justify-center mt-8 items-center gap-3">
              <a
                href="https://www.linkedin.com/in/tunahan-%C3%A7eler-05a7a5249/"
                target="_blank"
              >
                <FaLinkedin className="text-blue-500" size={30} />
              </a>
              <a href="https://github.com/Tunahanclr" target="_blank">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        )}
      </div>
      {/* sosyal medya */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tunahan-%C3%A7eler-05a7a5249/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Tunahanclr"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
