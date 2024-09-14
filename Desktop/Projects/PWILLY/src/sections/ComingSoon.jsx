// // 
// import React from 'react';
// import { img1, cardImage1, topLogo } from '../assets/images'; // Replace with your actual image paths

// const ComingSoon = () => {
//   const cards = [
//     {
//       title: "TELEGRAM",
//       text: "Join Now",
//       link: "https://t.me/PWILLYsol",
//       image: cardImage1,
//       initialRotation: "rotate-[-4deg]",
//     },
//   ];

//   return (
//     <section className="w-full h-screen flex flex-col justify-center items-center">
//       <img
//         src={topLogo}
//         alt="Centered Image"
//         className="w-[200px] h-auto md:w-[150px] lg:w-[600px] mb-8"
//       />

//       <h1 className="text-orange-500 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl font-bold mb-12 font-comic">
//         CA: 2FerCnRdCrNvXegTuGA2cXPstPBVMPSHaWw9gdispump
//       </h1>

//       <a
//         href="https://pump.fun/"
//         className="bg-black border-4 border-black rounded-full px-10 py-4 text-white font-bold text-lg hover:bg-transparent hover:text-black transition-colors duration-300 mb-12"
//       >
//         Buy Now
//       </a>

//       <div className="w-[500px] max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
//         {cards.map((card, index) => (
//           <a
//             href={card.link}
//             key={index}
//             className={`block bg-slate-400 border-[4px] bg-opacity-55 border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}
//           >
//             <div className="flex justify-center">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-[90px] max-w-xs py-6"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="font-comic text-xl font-bold mb-8 text-black">
//                 {card.title}
//               </h3>
//               <p className="font-comic text-sm mb-8 text-black">{card.text}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ComingSoon;

import React from 'react';
import { img1, cardImage1, topLogo } from '../assets/images'; // Replace with your actual image paths

const ComingSoon = () => {
  const cards = [
    {
      title: "TELEGRAM",
      text: "Join Now",
      link: "https://t.me/PWILLYsol",
      image: cardImage1,
      initialRotation: "rotate-[-4deg]",
    },
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
             {/* <img
         src={topLogo}
         alt="Centered Image"
         className="w-[200px] h-auto md:w-[150px] lg:w-[600px] mb-8"
       /> */}
      {/* Centered CA text */}
      <h1 className="text-green-500 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-6xl font-bold mb-12 font-comic">
        CA:
      </h1>

      {/* Buy Now button */}
      <a
        href="https://pump.fun/"
        className="bg-black border-4 border-black rounded-full px-10 py-4 text-white font-bold text-lg hover:bg-transparent hover:text-black transition-colors duration-300 mb-12"
      >
        Buy Now
      </a>

      {/* Cards below the text and button */}
      <div className="w-[500px] max-w-screen-lg grid grid-cols-1 gap-8 px-4">
        {cards.map((card, index) => (
          <a
            href={card.link}
            key={index}
            className={`block bg-slate-400 border-[4px] bg-opacity-55 border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[90px] max-w-xs py-6"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-comic text-xl font-bold mb-8 text-black">
                {card.title}
              </h3>
              <p className="font-comic text-sm mb-8 text-black">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
