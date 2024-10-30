


// import React from 'react';
// import { joinImage } from '../assets/images'; // Import your image file

// const Join = () => {
//   return (
//     <section className="w-full flex justify-center items-center bg-white py-20 px-8">
//       <a
//         href="https://your-website.com" // Replace with your target URL
//         target="_blank" // Opens the link in a new tab
//         rel="noopener noreferrer" // Provides security benefits
//       >
//         <img
//           src={joinImage} // Path to your image file
//           alt="Join Us"
//           className="max-w-[1623px] w-[30%]  transition-transform duration-300 transform hover:scale-105"
//         />
//       </a>
//     </section>
//   );
// };

// export default Join;



import React from 'react';
import { joinImage } from '../assets/images'; // Import your image file

const Join = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white py-24  ">
      <a
        href="https://t.me/GrandpasClub" // Replace with your target URL
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Provides security benefits
        className="flex justify-center items-center" // Ensures link itself is a flex container
      >
        <img
          src={joinImage} // Path to your image file
          alt="Join Us"
          className="animate-bounce w-[20%]  max-w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </a>
    </section>
  );
};

export default Join;

