// import React, { useRef, useEffect, useState } from 'react';
// import { FaClipboard } from 'react-icons/fa';
// import { logoMain, diamondImage, cardImage1, img1, img2 } from '../assets/images';

// const Hero3 = () => {
//   const contractAddress = 'LOADING...';
//   const [inputWidth, setInputWidth] = useState(0);
//   const hiddenDivRef = useRef(null);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(contractAddress);
//     alert('Contract address copied to clipboard!');
//   };

//   useEffect(() => {
//     if (hiddenDivRef.current) {
//       setInputWidth(hiddenDivRef.current.offsetWidth + 10); // Add some padding for better look
//     }
//   }, [contractAddress]);

//   return (
//     <section className="w-full h-[100%] relative flex flex-col items-center justify-between text-black">
//       {/* Top Buttons */}
//       <div className="w-full flex justify-end p-4 space-x-4">
//         <button
//           onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
//           className="bg-blue-500 text-black text-[37px] font-anton border-4 border-black px-20 py-11 rounded-3xl hover:bg-blue-700"
//         >
//           ROADMAP
//         </button>
//         <a
//           href="https://pump.fun/5eayDLdACv74f7hWWvZDEGaUAwHhg15XBL2hV8jFpumpboard"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 text-white border-4 border-black px-20 py-11 rounded-3xl hover:bg-blue-700 flex items-center"
//         >
//           <img src={img2} alt="X Logo" className="w-14 h-14" />
//         </a>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 items-center justify-between w-full max-w-7xl px-8">
//         {/* Left Image */}
//         <div className="w-2/3 animate-slide-in-left">
//           <img src={diamondImage} alt="Diamond" className="w-[80%] h-[80%]" />
//         </div>

//         {/* Right Side */}
//         <div className="w-1/3 flex flex-col items-center animate-slide-in-right">
//           {/* Logo */}
//           <img src={logoMain} alt="Logo" className="w-full h-auto mb-8" />

//           {/* Contract Address with Copy Button */}
//           <div className="bg-purple-600 border-black border-4 p-4 rounded-3xl flex items-center space-x-2">
//             {/* Hidden div to measure the text width */}
//             <div
//               ref={hiddenDivRef}
//               className="absolute invisible whitespace-nowrap text-lg font-anton"
//             >
//               {contractAddress}
//             </div>
//             <input
//               type="text"
//               value={contractAddress}
//               readOnly
//               style={{ width: `${inputWidth}px` }}
//               className="bg-[#8218df] border-4 border-[#922c8d] rounded-3xl px-4 py-2 text-black font-anton text-lg"
//             />
//             <button
//               onClick={copyToClipboard}
//               className="bg-blue-500 text-white p-3 rounded-3xl hover:bg-blue-700 flex items-center"
//             >
//               <FaClipboard />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Buttons */}
//       <div className="relative w-full h-full flex justify-center items-center mt-36">
//         {/* First Button */}
//         <a
//           href="https://x.com/Gem0nSol"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-110"
//           style={{
//             width: '290px',
//             height: '200px',
//             bottom: '-100px',
//             left: '40%',
//             transform: 'rotate(-10deg)',
//           }}
//         >
//           <img src={img1} alt="Button 1" className="w-32 h-32" />
//         </a>

//         {/* Second Button */}
//         <a
//           href="https://t.me/GEM2MILLIONZ"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-110"
//           style={{
//             width: '290px',
//             height: '200px',
//             bottom: '-90px',
//             right: '23%',
//             transform: 'rotate(10deg)',
//           }}
//         >
//           <img src={cardImage1} alt="Button 2" className="w-32 h-32" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero3;


import React from 'react';
import { FaClipboard } from 'react-icons/fa'; // Clipboard icon for the copy button
import { logoMain, diamondImage, cardImage1, img1, img2 } from '../assets/images'; // Replace with your actual image paths

const Hero3 = () => {
  const contractAddress = '5eayDLdACv74f7hWWvZDEGaUAwHhg15XBL2hV8jFpump'; // Replace with the actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert('Contract address copied to clipboard!');
  };

  return (
    <section className="w-full h-[100%] relative flex flex-col items-center justify-between  text-black">
      {/* Top Buttons */}
       <div className="w-full flex justify-end p-4 space-x-4">
         <button
          onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-500 text-black text-[37px] font-anton border-4 border-black px-20 py-11 rounded-3xl hover:bg-blue-700"
        >
          ROADMAP
        </button>
        <a
          href="https://pump.fun/5eayDLdACv74f7hWWvZDEGaUAwHhg15XBL2hV8jFpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white border-4 border-black px-20 py-11 rounded-3xl hover:bg-blue-700 flex items-center"
        >
          <img src={img2} alt="X Logo" className="w-14 h-14" />
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-between w-full max-w-7xl px-8">
        {/* Left Image */}
        <div className="w-2/3 animate-slide-in-left">
          <img src={diamondImage} alt="Diamond" className="w-[%80] h-[%80]" />
        </div>

        {/* Right Side */}
        <div className="w-1/3 flex flex-col items-center animate-slide-in-right">
          {/* Logo */}
          <img src={logoMain} alt="Logo" className="w-full h-auto mb-8" />

          {/* Contract Address with Copy Button */}
          <div className="bg-purple-600 border-black border-4 p-4 rounded-3xl flex items-center space-x-2">
            <input
              type="text"
              value={contractAddress}
              readOnly
              className="w-max bg-[#8218df] border-4 border-[#922c8d] rounded-3xl px-4 py-2 text-black font-anton text-lg"
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-500 text-white p-3 rounded-3xl hover:bg-blue-700 flex items-center"
            >
              <FaClipboard />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="relative w-full h-full flex justify-center items-center mt-36">
        {/* First Button */}
        <a
          href="https://x.com/Gem0nSol"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-110"
          style={{
            width: '290px',
            height: '200px',
            bottom: '-100px',
            left: '40%',
            transform: 'rotate(-10deg)',
          }}
        >
          <img src={img1} alt="Button 1" className="w-32 h-32" />
        </a>

        {/* Second Button */}
        <a
          href="https://t.me/GEM2MILLIONZ"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 flex justify-center items-center transition-transform transform hover:scale-110"
          style={{
            width: '290px',
            height: '200px',
            bottom: '-90px',
            right: '23%',
            transform: 'rotate(10deg)',
          }}
        >
          <img src={cardImage1} alt="Button 2" className="w-32 h-32" />
        </a>
      </div>
    </section>
  );
};

export default Hero3;