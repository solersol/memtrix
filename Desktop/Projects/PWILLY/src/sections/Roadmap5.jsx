

import React from 'react';
import { rd5 } from '../assets/images';

const Roadmap5 = () => {
  const cards = [
    { title: "DEX PREPAID", text: "We are so confident of our project we will prepay before KOFH", link: "https://t.me/PWILLYsol" },
    { title: "BUMP IT", text: "1SOL Will be deposited every 20 mins into the bump it bot to stay at the top of the front page", link: "https://t.me/PWILLYsol" },
    { title: "ALPHA GROUPS", text: "Paid influencers from X/Telegram", link: "https://t.me/PWILLYsol" },
    { title: "TOKEN BURNS", text: "Join the community we will be burning tokens live ", link: "https://t.me/PWILLYsol" },
    { title: "MOONTOK", text: "MOONTOK Listing from the moment we go live on Raydium", link: "https://t.me/PWILLYsol" },
    { title: "MORE TO BE REVEALED", text: "We will reveal PhaseII once we are at over 500k mcap", link: "https://t.me/PWILLYsol" }
  ];

  return (
    <section className="w-full h-full flex flex-col justify-between items-center p-8 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-xl text-center transition-transform transform hover:scale-105 hover:bg-opacity-30 hover:bg-gray-700 text-white"
          >
            <h3 className="font-elite text-xl font-bold mb-4">{card.title}</h3>
            <p className="font-elite text-sm mb-4">{card.text}</p>
          </a>
        ))}
      </div>

      <div className="w-full flex justify-center">
        {/* <img
          src={rd5}
          alt="Centered Roadmap Image"
          className="animate-bounce w-auto h-[2144px] max-h-[300px] md:max-h-[500px] lg:max-h-[600px] object-cover"
        /> */}
      </div>
    </section>
  );
};

export default Roadmap5;