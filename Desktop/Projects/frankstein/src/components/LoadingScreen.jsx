


import React, { useEffect, useRef } from 'react';
import {loadingImage} from '../assets/images'; // Update with your loading image path

const LoadingScreen = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    let angle = 0;

    const spin = () => {
      angle = (angle + 6) % 360; // Adjust the speed here
      image.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(spin);
    };

    requestAnimationFrame(spin);

    return () => cancelAnimationFrame(spin);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#a7a7c5] z-50">
      <img ref={imageRef} src={loadingImage} alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default LoadingScreen;

