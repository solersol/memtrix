


import React, { useState, useEffect } from 'react';
import { giga, popcat, wif, bitcoin, spx, apu, mog, retardio, michi, centerImage, floatingImage, antoine } from '../assets/images'; // Ensure this path is correct

const CryptoSection = () => {
  // Placeholder data for tokens
  const tokens = [
    { name: "TIGER", ticker: "TK1", price: "$474m", change: "+3.00%", volume: "$10m", image: giga, link: "https://x.com/NotChaseColeman" },
    { name: "ANSEM", ticker: "TK2", price: "$390m", change: "+33%", volume: "$77m", image: spx, link: "https://x.com/blknoiz06/" },
    { name: "MITCH", ticker: "TK3", price: "$1.29b", change: "+2.00%", volume: "$122m", image: popcat, link: "https://x.com/idrawline" },
    { name: "RASMR", ticker: "TK4", price: "$2.5b", change: "+0.05%", volume: "$5m", image: wif, link: "https://x.com/rasmr_eth" },
    { name: " TRUMP", ticker: "TK5", price: "$700m", change: "+7.00%", volume: "$3m", image: mog, link: "https://x.com/realDonaldTrump" },
    { name: "ELON", ticker: "TK6", price: "$219m", change: "+5.00%", volume: "$122m", image: bitcoin, link: "https://x.com/elonmusk/" },
    { name: "ANTOINE", ticker: "TK7", price: "$1T", change: "+140K%", volume: "$739m", image: antoine, link: "https://x.com/AntoineRSX" },
    { name: "ORANGIE", ticker: "TK8", price: "$228m", change: "+2.00%", volume: "$890k", image: apu, link: "https://x.com/orangie" },
    { name: "CRASH", ticker: "TK9", price: "$95m", change: "+2.00%", volume: "$4m", image: retardio, link: "https://x.com/CrashiusClay69/" },
    { name: "MURAD", ticker: "TK10", price: "$151m", change: "+1.00%", volume: "$2.3m", image: michi, link: "https://x.com/MustStopMurad" },
  ];

  // Calculate total market cap (placeholder logic)
  const [totalMarketCap, setTotalMarketCap] = useState("$0");

  useEffect(() => {
    const totalCap = tokens.reduce((acc, token) => acc + parseFloat(token.price.replace('$', '').replace('m', '').replace('b', '')) * (token.price.includes('b') ? 1000 : 1), 0);
    setTotalMarketCap(`$${totalCap.toFixed(2)}M`);
  }, [tokens]);

  // State for floating image position
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const moveImage = () => {
      // Generate random positions for the image
      const top = `${Math.random() * 90}%`; // Between 0 and 90% to avoid going off-screen
      const left = `${Math.random() * 90}%`;
      setPosition({ top, left });
    };

    // Move image every 3 seconds
    const intervalId = setInterval(moveImage, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center  p-4">
      
      {/* Floating Image */}
      <div 
        className="absolute z-50 w-80 h-64"
        style={{ top: position.top, left: position.left, transition: 'top 1s ease, left 1s ease' }}
      >
        <img
          src={floatingImage} // Placeholder image, replace with your actual image
          alt="Floating Annoying Ad"
          className="w-full h-full object-cover"
        />
      </div>
      

      {/* Total Market Cap */}
      <div className="bg-gray-200 bg-opacity-80 backdrop-blur-lg text-black text-2xl font-bold py-4 px-8 rounded-full shadow-lg mb-6">
        Total Market Cap: {totalMarketCap} 
      </div>

      {/* Centered Image */}
      <div className="mb-8">
        <img
          src={centerImage} // Placeholder image, replace with your actual image
          alt="Centered Decorative Image"
          className="w-96 h-64 object-cover shadow-lg"
        />
      </div>

      {/* Tokens Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {tokens.map((token, index) => (
          <a
            key={index}
            href={token.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-2xl text-center transition-transform transform hover:scale-110"
            style={{ width: '180px', height: '240px' }}
          >
            {/* Token Image */}
            <div className="mb-4">
              <img
                src={token.image}
                alt={token.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-gray-300"
              />
            </div>
            {/* Token Info */}
            <h3 className="text-xl font-bold mb-1">{token.name}</h3>
            <p className="text-md font-semibold">MCAP: {token.price}</p>
            <p className={`text-sm ${token.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
              24h Change: {token.change}
            </p>
            <p className="text-sm">24h Volume: {token.volume}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CryptoSection;
