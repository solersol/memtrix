// 
import React, { useEffect, useState } from 'react';
import {img1, img2, img3} from '../assets/images'; // Update with your image path


const Frank = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black bg-opacity-50">
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
        rel="stylesheet"
      />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main content */}
      <div className="relative text-center z-10 text-white">
        {/* Title with spooky animation */}
        <h1
          className={`text-6xl md:text-8xl font-bold transition-opacity duration-700 ease-in-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{ fontFamily: 'Creepster, sans-serif' }}
        >
          Frankenstein
        </h1>
        <p
          className={`mt-4 text-2xl md:text-3xl transition-opacity duration-1000 delay-300 ease-in-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: 'Creepster, sans-serif' }}
        >
          Coming Soon
        </p>

        {/* Icon Links */}
        <div
          className={`flex justify-center space-x-4 mt-6 transition-opacity duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a href="https://x.com/InfluencerMeme" target="_blank" rel="noopener noreferrer">
            <img
              src={img1}
              alt="Image 1"
              className="w-16 h-16 invert sm:w-12 sm:h-12 transition-transform transform hover:scale-125"
            />
          </a>
          <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
            <img
              src={img2}
              alt="Image 2"
              className="w-16 h-16 invert sm:w-12 sm:h-12 transition-transform transform hover:scale-125"
            />
          </a>
          <a href="https://t.me/GrandpasClub" target="_blank" rel="noopener noreferrer">
            <img
              src={img3}
              alt="Image 3"
              className="w-16 h-16 invert sm:w-12 sm:h-12 transition-transform transform hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Frank;
