// import React from 'react';
// import { FaClipboard } from 'react-icons/fa'; // Clipboard icon for the copy button
// import { logoMain, diamondImage, cardImage1, img1, img2 } from '../assets/images'; // Replace with your actual image paths
// import Separator from "../components/Separator";
// const Hero3 = () => {
//   const contractAddress = 'LOADING...'; // Replace with the actual contract address

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(contractAddress);
//     alert('Contract address copied to clipboard!');
//   };

//   return (
//     <section className="w-full h-screen flex flex-col justify-center items-center text-black relative ">
//       {/* Contract Address Bar */}
//       <div className="flex flex-col items-center mb-14 pt-52">
//         <div className="bg-purple-600 border-black border-4 p-4 rounded-3xl flex items-center space-x-2">
//           <input
//             type="text"
//             value={contractAddress}
//             readOnly
//             className="w-max bg-[#8218df] border-4 border-[#922c8d] rounded-3xl px-4 py-2 text-black font-anton text-lg"
//           />
//           <button
//             onClick={copyToClipboard}
//             className="bg-blue-500 text-white p-3 rounded-3xl hover:bg-blue-700 flex items-center"
//           >
//             <FaClipboard />
//           </button>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col items-center space-y-8">
//         {/* Pump.fun Button */}
//         <a
//           href="https://pump.fun/2vpNHK32YqY9LBa2LNnwKfoeGjpxKhSf1Tvo2bsepump"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 text-white border-4 border-black px-16 py-8 rounded-3xl hover:bg-blue-700 transition-transform transform hover:scale-110 flex items-center justify-center"
//         >
//           <img src={img2} alt="Pump Fun" className="w-14 h-14 mr-4" />
//           <span className="text-2xl">Pump Fun</span>
//         </a>

//         {/* Additional Buttons */}
//         <div className="flex space-x-12">
//           {/* First Button */}
//           <a
//             href="https://t.me/DENGOmemeCWTTYsol"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 transition-transform transform hover:scale-110 flex justify-center items-center"
//           >
//             <img src={img1} alt="Button 1" className="w-32 h-32" />
//           </a>

//           {/* Second Button */}
//           <a
//             href="https://x.com/vwitalikcwttysol"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 p-8 rounded-xl border-4 border-black hover:bg-blue-700 transition-transform transform hover:scale-110 flex justify-center items-center"
//           >
//             <img src={cardImage1} alt="Button 2" className="w-32 h-32" />
//           </a>
//         </div>
//       </div>


//     </section>
//   );
// };

// export default Hero3;

// import React from 'react';
// import { FaClipboard } from 'react-icons/fa'; // Clipboard icon for the copy button
// import { logoMain, diamondImage, cardImage1, img1, img2 } from '../assets/images'; // Replace with your actual image paths
// import Separator from "../components/Separator";

// const Hero3 = () => {
//   const contractAddress = 'LOADING...'; // Replace with the actual contract address

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(contractAddress);
//     alert('Contract address copied to clipboard!');
//   };

//   return (
//     <section className="w-full h-screen flex items-center justify-end ">
//       {/* Right-side container */}
//       <div className="w-1/2 h-full flex flex-col justify-center items-end pr-56 space-y-12">
//         {/* Contract Address Bar */}
//         <div className="w-full flex flex-col items-end">
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-full shadow-lg border-4 border-black flex items-center space-x-3">
//             <input
//               type="text"
//               value={contractAddress}
//               readOnly
//               className="w-full bg-yellow-300 text-black text-lg font-bold px-4 py-2 rounded-full outline-none shadow-inner"
//             />
//             <button
//               onClick={copyToClipboard}
//               className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-all shadow-lg"
//             >
//               <FaClipboard />
//             </button>
//           </div>
//         </div>

//         {/* Pump.fun Button */}
//         <a
//           href="https://pump.fun/2vpNHK32YqY9LBa2LNnwKfoeGjpxKhSf1Tvo2bsepump"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-gradient-to-br from-green-400 to-blue-500 text-white border-4 border-black px-12 py-6 rounded-full shadow-xl transform transition-transform hover:scale-110 flex items-center justify-center"
//         >
//           <img src={img2} alt="Pump Fun" className="w-10 h-10 mr-4" />
//           <span className="text-xl font-bold">Pump Fun</span>
//         </a>

//         {/* Additional Buttons */}
//         <div className="flex space-x-8">
//           {/* First Button */}
//           <a
//             href="https://t.me/DENGOmemeCWTTYsol"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-full border-4 border-black hover:scale-105 transform transition-all shadow-xl"
//           >
//             <img src={img1} alt="Button 1" className="w-20 h-20" />
//           </a>

//           {/* Second Button */}
//           <a
//             href="https://x.com/vwitalikcwttysol"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-red-400 to-yellow-500 p-6 rounded-full border-4 border-black hover:scale-105 transform transition-all shadow-xl"
//           >
//             <img src={cardImage1} alt="Button 2" className="w-20 h-20" />
//           </a>
//         </div>
//       </div>

//       {/* Separator at the bottom */}

//     </section>
//   );
// };

// export default Hero3;

import React from 'react';
import { FaClipboard } from 'react-icons/fa'; // Clipboard icon for the copy button
import { logoMain, diamondImage, cardImage1, img1, img2 } from '../assets/images'; // Replace with your actual image paths
import Separator from "../components/Separator";

const Hero3 = () => {
  const contractAddress = '2vpNHK32YqY9LBa2LNnwKfoeGjpxKhSf1Tvo2bsepump'; // Replace with the actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert('Contract address copied to clipboard!');
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative">
      {/* Centered content container */}
      <div className="w-full flex flex-col items-center justify-center space-y-5 pt-72">
        
        {/* Contract Address Bar */}
        <div className="w-full flex flex-col items-center">
          <div className=" p-6 rounded-full shadow-lg border-4 border-black flex items-center space-x-3">
            <input
              type="text"
              value={contractAddress}
              readOnly
              className="w-full bg-transparent text-black text-lg font-bold px-4 py-2 rounded-full outline-none shadow-inner"
            />
            <button
              onClick={copyToClipboard}
              className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-all shadow-lg"
            >
              <FaClipboard />
            </button>
          </div>
        </div>

        {/* Pump.fun Button */}
        <a
          href="https://pump.fun/2vpNHK32YqY9LBa2LNnwKfoeGjpxKhSf1Tvo2bsepump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-green-400 to-blue-500 text-white border-4 border-black px-12 py-6 rounded-full shadow-xl transform transition-transform hover:scale-110 flex items-center justify-center"
        >
          <img src={img2} alt="Pump Fun" className="w-10 h-10 mr-4" />
          <span className="text-xl font-bold">Pump Fun</span>
        </a>

        {/* Additional Buttons */}
        <div className="flex space-x-8">
          {/* First Button */}
          <a
            href="https://x.com/vwitalik"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-full border-4 border-black hover:scale-105 transform transition-all shadow-xl"
          >
            <img src={img1} alt="Button 1" className="w-20 h-20" />
          </a>

          {/* Second Button */}
          <a
            href="https://t.me/VWITALIK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-400 to-yellow-500 p-6 rounded-full border-4 border-black hover:scale-105 transform transition-all shadow-xl"
          >
            <img src={cardImage1} alt="Button 2" className="w-20 h-20" />
          </a>
        </div>
      </div>


    </section>
  );
};

export default Hero3;
