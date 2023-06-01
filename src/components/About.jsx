import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px]  w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Tunahan Çeler, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Hello! I'm Tunahan, a 17-year-old front-end developer living in
              Bursa, Turkey. My passion and curiosity for web design have driven
              me to pursue growth in this field. Although I may not have
              extensive experience, I am constantly eager to learn and explore
              new technologies. My goal is to further develop myself by creating
              impactful and functional web projects that resonate with users. I
              strive to offer creative and innovative solutions. If you are
              interested in collaborating on projects or need assistance, I
              would be delighted to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
