import React from 'react';
import { buttonImage } from '../assets/images'; // Replace with your actual image path

const ButtonSection = ({ linkUrl }) => {
  return (
    <div className="w-full h-screen flex justify-end items-center pb-[29rem]">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-transparent transform transition-transform duration-300 hover:scale-125 cursor-pointer  rounded-full"
      >
        <img src={buttonImage} alt="Button" className="w-[60%] h-[60%] animate-bounce" />
      </a>
    </div>
  );
};

export default ButtonSection;
