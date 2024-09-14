import React from 'react';
import { largeImage, aboutTitle } from '../assets/images/'; // Replace with your actual image path

const About4 = () => {
  return (
    <section className="w-full h-full bg-[#fffdd6] flex flex-col items-center py-60  border-b-4 border-black">
      <img
        src={largeImage}
        alt="Large Image"
        className="w-full max-w-screen-lg mb-8"
      />
      <img
        src={aboutTitle}
        alt="Small Image"
        className="w-[280px]  max-w-md my-14"
      />
      <div className="w-full max-w-screen-lg px-4 ">
        <p className="text-3xl mb-4 font-comic">
        Your favorite meme legends have grown older and are ready to enjoy the fruits of their fame. After years in the spotlight, our beloved icons are ready for some well-deserved relaxation at their retirement home, where they can kick back and savor the good life.
        </p>
        <p className="text-3xl font-comic ">
          Join the official community inspired by the great Matt Furie
        </p>
      </div>
    </section>
  );
};

export default About4;

