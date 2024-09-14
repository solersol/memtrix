// components/StickyFooter.jsx

import React from 'react';
import {img1, img2, img3} from '../assets/images'; // Update with your image path

const StickyFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0  py-4 flex flex-col items-center justify-center z-50">
      <div className="animate-bounce flex justify-center space-x-4 mb-4">
        <a href="https://x.com/SCHOOLBOYSOL">
          <img src={img1} alt="Image 1" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://pump.fun/632sZSUCr4yGfJhGqB3kiBdS2NfvezmBgeVM94xQpump">
          <img src={img2} alt="Image 2" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
        <a href="https://t.me/schoolboysol">
          <img src={img3} alt="Image 3" className="w-16 h-16 sm:w-12 sm:h-12 transition-transform transform hover:scale-125" />
        </a>
      </div>

    </footer>
  );
};

export default StickyFooter;
