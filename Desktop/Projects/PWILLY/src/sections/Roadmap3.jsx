// import React from 'react';
// import { logoImage } from '../assets/images'; // Top center image
// import { leftImage } from '../assets/images'; // Left side image
// import { bottomRightImage } from '../assets/images'; // Bottom right image

// const Roadmap3 = () => {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center">
//       {/* Full-screen background image with responsive adjustments */}
//       <img 
//         src={leftImage} 
//         alt="Background" 
//         className="absolute inset-0 w-full h-full  md:object-cover object-contain z-0" 
//       />

//       {/* Top center image */}
//       <img 
//         src={logoImage} 
//         alt="Logo" 
//         className="absolute top-8 left-1/2 transform -translate-x-1/2 w-52 md:w-96 h-auto z-10 mt-8" 
//       />

//       {/* Bottom right image, hidden on small screens */}
//       <img 
//         src={bottomRightImage} 
//         alt="Bottom Right" 
//         className="absolute right-8  w-auto h-auto z-10 hidden md:block" 
//       />
//     </section>
//   );
// };

// export default Roadmap3;


import React, { useRef, useState, useEffect } from 'react';
import { logoImage, leftImage, bottomRightImage } from '../assets/images';

const Roadmap3 = () => {
  const logoImageRef = useRef(null);
  const [logoInView, setLogoInView] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.target === logoImageRef.current) {
          setLogoInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (logoImageRef.current) observer.observe(logoImageRef.current);

    return () => {
      if (logoImageRef.current) observer.unobserve(logoImageRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <img 
        src={leftImage} 
        alt="Background" 
        className="absolute inset-0 w-full h-full md:object-cover object-contain z-0" 
      />

      {/* Top center image */}
      <img 
        src={logoImage} 
        alt="Logo" 
        ref={logoImageRef}
        className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-52 md:w-96 h-auto z-10 transition-transform duration-1000 ${
          logoInView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`} 
      />

      {/* Bottom right image */}
      <img 
        src={bottomRightImage} 
        alt="Bottom Right" 
        className="absolute right-8  w-auto h-auto z-20 hidden md:block"
      />
    </section>
  );
};

export default Roadmap3;

