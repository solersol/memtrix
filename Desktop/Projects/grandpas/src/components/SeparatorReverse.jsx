import React, { useEffect, useRef } from 'react';
import {separatorReverse} from '../assets/images'; // Ensure the path is correct

const SeparatorReverse = () => {
  const separatorRef = useRef(null);

  useEffect(() => {
    const separatorElement = separatorRef.current;
    let position = 0;
    let animationFrameId;

    const animate = () => {
      position -= 1;
      separatorElement.style.backgroundPosition = `${position}px 0`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={separatorRef}
      className="w-full h-[100px] bg-repeat-x"
      style={{
        backgroundImage: `url(${separatorReverse})`,
        backgroundSize: 'contain',
        transform: 'rotate(2.5deg)', // Adjust the rotation as needed
        transformOrigin: 'bottom left',
      }}
    ></div>
  );
};

export default SeparatorReverse;
