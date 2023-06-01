import React from "react";
import codezone from "../assets/Codezone.jpeg";
import getir from "../assets/getir.jpeg";
import netflix from "../assets/netflix.jpeg";
import commerce from "../assets/Ecommerce.jpeg";
import fylo from "../assets/fylo.jpeg";
import bezos from "../assets/bezos.jpeg";

export default function Work() {
  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">Code Zone</h1>
              <img src={codezone} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://code-zone-nine.vercel.app/" target="_blank">
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/CodeZone"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">Netflix</h1>
              <img src={netflix} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="https://netflix-clone-ten-pi.vercel.app/"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/Netflix-Clone"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">
                Getir Getir Yemek
              </h1>
              <img src={getir} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="https://getir-getir-yemek-clone.vercel.app/"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/Getir-GetirYemek-Clone"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">E commerce</h1>
              <img src={commerce} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://e-commercee-eight.vercel.app/" target="_blank">
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/e-commerce"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">
                Fylo landing page
              </h1>
              <img src={fylo} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="https://fylo-landing-page-six-theta.vercel.app/"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/fylo-landing-page"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div">
            <div className="relative">
              <h1 className="text-center text-xl font-bold">
                Spend Jeff Bezos' Money
              </h1>
              <img src={bezos} className="mt-4 w-full h-auto" alt="" />

              <div className="absolute gap-4 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="https://money-spending-app-rho.vercel.app/"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded h-8 hover:bg-blue-500 transition-all">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Tunahanclr/fylo-landing-page"
                  target="_blank"
                >
                  <button className="bg-blue-400 w-20 rounded hover:bg-blue-500 transition-all h-8">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
