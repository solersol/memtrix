

// import React, { useEffect, useRef } from 'react';
// import { rd1, rd2 } from '../assets/images'; // Import the images

// const Roadmap2 = () => {
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);

//   useEffect(() => {
//     const options = {
//       threshold: 0.1, // Trigger when 10% of the image is visible
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');
//           observer.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     }, options);

//     if (img1Ref.current) observer.observe(img1Ref.current);
//     if (img2Ref.current) observer.observe(img2Ref.current);

//     return () => {
//       if (img1Ref.current) observer.unobserve(img1Ref.current);
//       if (img2Ref.current) observer.unobserve(img2Ref.current);
//     };
//   }, []);

//   return (
//     <div id="roadmap" className="w-full h-screen flex flex-col justify-end items-center pb-10 relative">
//       <div className="flex w-full justify-center items-end relative">
//         <img
//           src={rd1}
//           alt="Roadmap Image 1"
//           ref={img1Ref}
//           className="w-[85%] h-auto translate-x-full opacity-0 absolute bottom-0 left-0 transition-transform duration-1000"
//         />
//         <img
//           src={rd2}
//           alt="Roadmap Image 2"
//           ref={img2Ref}
//           className="w-[85%] h-auto -translate-x-full opacity-0 absolute bottom-0 right-0 transition-transform duration-1000"
//         />
//       </div>
//     </div>
//   );
// };

// export default Roadmap2;


import React, { useEffect, useRef } from 'react';
import { rd1, rd2 } from '../assets/images'; // Import the images

const Roadmap2 = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the image is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === img1Ref.current) {
            entry.target.classList.add('animate-slide-in-left');
          } else if (entry.target === img2Ref.current) {
            entry.target.classList.add('animate-slide-in-right');
          }
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, options);

    if (img1Ref.current) observer.observe(img1Ref.current);
    if (img2Ref.current) observer.observe(img2Ref.current);

    return () => {
      if (img1Ref.current) observer.unobserve(img1Ref.current);
      if (img2Ref.current) observer.unobserve(img2Ref.current);
    };
  }, []);

  return (
    <div id="roadmap" className="w-full h-screen flex flex-col justify-end items-center pb-10 relative">
      <div className="flex w-full justify-center items-end relative">
        <img
          src={rd1}
          alt="Roadmap Image 1"
          ref={img1Ref}
          className="w-[85%] h-auto opacity-0 absolute bottom-0 left-0 transition-transform duration-1000"
        />
        <img
          src={rd2}
          alt="Roadmap Image 2"
          ref={img2Ref}
          className="w-[85%] h-auto opacity-0 absolute bottom-0 right-0 transition-transform duration-1000"
        />
      </div>
    </div>
  );
};

export default Roadmap2;
