import React from 'react';
import { spinningImage } from '../assets/images'; // Replace with your actual image path
import {  img1, cardImage1, topLogo  } from '../assets/images'; 

const ComingSoon = () => {
    const cards = [
        { title: "TELEGRAM", text: "Join Now", link: "https://t.me/GrandpasClub", image: cardImage1, initialRotation: "rotate-[-4deg]", },
        { title: "X", text: "Join Now", link: "https://x.com/TheGrandpasClub", image: img1,  initialRotation: "rotate-[6deg]", },
      ];
  return (
    
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black">
              <img
        src={topLogo}
        alt="Centered Image"
        className="w-[200px] h-auto md:w-[150px] lg:w-[600px] mb-8"
      />
        
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 font-comic">
        Coming Soon...
      </h1>
      <img
        src={spinningImage}
        alt="Spinning Image"
        className="w-[50px] h-[50px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] animate-spin"
      />
      <div className="w-[500px] max-w-screen-lg mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            className={`block bg-[#2d2d2d] border-[4px] border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:rotate-0 cursor-pointer text-center ${card.initialRotation}`}          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[100px] max-w-xs py-6"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className=" font-comic text-xl font-bold mb-8 text-white">{card.title}</h3>
              <p className="font-comic text-sm mb-8 text-white">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
