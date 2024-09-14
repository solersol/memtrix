import React from 'react';
import { buttonImage, bed } from '../assets/images'; // Replace with your actual image paths

const Footer2 = ({ linkUrl }) => {
  return (
    <section className="w-full bg-[#9fa8ff] flex flex-col items-center py-8">
      {/* Top Centered Button Image */}
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-8 transform transition-transform duration-300 hover:scale-125 cursor-pointer"
      >
        <img src={buttonImage} alt="Button" className="w-[%75] h-[%75]" />
      </a>

      {/* Middle Image */}
      <div className="flex justify-center items-center mb-0 ">
        <img src={bed} alt="Middle" className="w-[637px] h-[721px] mb-[-25px]" />
      </div>
    </section>
  );
};

export default Footer2;
