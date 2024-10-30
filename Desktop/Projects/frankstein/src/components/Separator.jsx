

import React, { useEffect, useRef } from 'react';
import { separatorImage } from '../assets/images';

const Separator = () => {
  const separatorRef = useRef(null);

  useEffect(() => {
    const separator = separatorRef.current;

    const animateSeparator = () => {
      let position = 0;
      const speed = 3; // Adjust as needed for desired animation speed

      const moveSeparator = () => {
        position += speed;
        separator.style.backgroundPosition = `${position}px 0`;

        // Reset position when the image has fully moved across the container
        if (position >= separator.clientWidth) {
          position = -separator.clientWidth;
        }
      };

      const animation = setInterval(moveSeparator, 50); // Adjust interval as needed

      return () => clearInterval(animation);
    };

    const animationCleanup = animateSeparator();

    // Cleanup function
    return () => {
      clearInterval(animationCleanup);
    };
  }, []);

  return (
    <hr
      ref={separatorRef}
      className="separator"
      style={{
        backgroundImage: `url(${separatorImage})`,
        // transform: 'rotate(-2.5deg)', 
        // transformOrigin: 'top left', 
      }}
    />
  );
};

export default Separator;
