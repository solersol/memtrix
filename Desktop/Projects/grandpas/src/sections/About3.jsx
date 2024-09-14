


// // import React, { useRef, useEffect, useState } from 'react';
// // import { bg6 } from '../assets/images'; // Replace with your actual image path

// // const About3 = () => {
// //   const sectionRef = useRef(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           observer.unobserve(sectionRef.current);
// //         }
// //       },
// //       { threshold: 0.1 } // Trigger when 10% of the element is visible
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <section 
// //       ref={sectionRef}
// //       className="relative w-full h-screen flex items-center justify-center"
// //     >
// //       {/* Full-screen background image */}
// //       <img 
// //         src={bg6} 
// //         alt="Background" 
// //         className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-in-out ${
// //           isVisible ? 'translate-x-0' : 'translate-x-full'
// //         }`} 
// //       />

// //       {/* Text content */}
// //       <div
// //         className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-8 rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
// //           isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
// //         }`}
// //       >
// //         <h1 className="text-[40px] md:text-6xl font-anton text-center mb-6">WHATS $F1PEPE</h1>
// //         <p className="text-2xl md:text-3xl mb-6 font-anton text-center">Who's the fastest to make it to 100m? TEAM F1PEPE is coming for the gold. Let's build the best community in crypto. Join now or regret forever.</p>
// //         <a href="https://t.me/MylosMagicShow">
// //           <button className="bg-[#2e1515] text-[#fcffd3] px-12 py-5 rounded-full text-2xl font-anton flex items-center justify-center mx-auto hover:bg-[#f0ff00] transition-transform duration-1000 ease-in-out">
// //             JOIN $F1PEPE
// //           </button>
// //         </a>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About3;


// import React, { useRef, useEffect, useState } from 'react';
// import { bg6 } from '../assets/images'; // Replace with your actual image path

// const About3 = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(sectionRef.current);
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-screen flex items-center justify-center"
//     >
//       {/* Full-screen background image */}
//       <img
//         src={bg6}
//         alt="Background"
//         className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-in-out ${
//           isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//         }`}
//       />

//       {/* Text content */}
//       <div
//         className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white p-8  rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
//           isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
//         }`}
//       >
//         <h1 className="text-[40px] md:text-6xl font-anton text-center mb-6">WHATS $F1PEPE</h1>
//         <p className="text-2xl md:text-3xl mb-6 font-anton text-center">Who's the fastest to make it to 100m? TEAM F1PEPE is coming for the gold. Let's build the best community in crypto. Join now or regret forever.</p>
//         <a href="https://t.me/MylosMagicShow">
//           <button className="bg-[#2e1515] text-[#fcffd3] px-12 py-5 rounded-full text-2xl font-anton flex items-center justify-center mx-auto hover:bg-[#f0ff00] transition-transform duration-1000 ease-in-out">
//             JOIN $F1PEPE
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About3;

import React, { useRef, useEffect, useState } from 'react';
import { bg6 } from '../assets/images'; // Replace with your actual image path

const About3 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Full-screen background image */}
      <img
        src={bg6}
        alt="Background"
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[10000] ease-in-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      />

      {/* Text content */}
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 text-white p-8 rounded-lg z-10 transition-transform duration-1000 ease-in-out ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-[40px] md:text-6xl font-anton text-center mb-6">WHATS $F1PEPE</h1>
        <p className="text-2xl md:text-3xl mb-6 font-anton text-center">Who's the fastest to make it to 100m? TEAM F1PEPE is coming for the gold. Let's build the best community in crypto. Join now or regret forever.</p>
        <a href="https://t.me/MylosMagicShow">
          <button className="bg-[#2e1515] text-[#fcffd3] px-12 py-5 rounded-full text-2xl font-anton flex items-center justify-center mx-auto hover:bg-[#f0ff00] transition-transform duration-1000 ease-in-out">
            JOIN $F1PEPE
          </button>
        </a>
      </div>
    </section>
  );
};

export default About3;

