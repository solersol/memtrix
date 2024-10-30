import React from 'react';
import { findTitle, img1, img2, cardImage1, cardImage2, bottomLinks } from '../assets/images'; // Replace with your actual image paths

const Links = () => {
  const cards = [
    { title: "PUMPFUN", text: "BUY NOW", link: "https://pump.fun/4B9Z8Wrjw8b8DAYdS2x89eedHQ5rVoVkyRFQfpT2pump", image: img2 },
    { title: "TELEGRAM", text: "Join Now", link: "https://t.me/GrandpasClub", image: cardImage1 },
    { title: "X", text: "Join Now", link: "https://x.com/TheGrandpasClub", image: img1 },
    { title: "DEXSCREENER", text: "BUY NOW", link: "https://pump.fun/4B9Z8Wrjw8b8DAYdS2x89eedHQ5rVoVkyRFQfpT2pump", image: cardImage2 }
  ];

  return (
    <section className="w-full h-full  flex flex-col items-center pt-32 border-b-4 border-black">
      <img
        src={findTitle}
        alt="Small Image"
        className="w-[350px] max-w-screen-lg mb-28 mx-auto"
      />
      <div className="w-[550px] max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <a 
            href={card.link} 
            key={index} 
            className="block bg-white border-[4px] border-black rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-125 cursor-pointer text-center"
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[100px] max-w-xs py-6"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className=" font-comic text-xl font-bold mb-8">{card.title}</h3>
              <p className="font-comic text-sm mb-8">{card.text}</p>
            </div>
          </a>
        ))}
      </div>
      <img
        src={bottomLinks}
        alt="Bottom Image"
        className="w-1/3 max-w-screen-lg mt-12 bottom"
      />
    </section>
  );
};

export default Links;