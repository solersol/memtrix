import React from 'react';
import { about } from "../assets/images";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 px-40 pt-0 mt-0 pb-0 mb-0">
      <div className="lg:w-7/12 p-4">
        <h1 className="font-comic text-[50px] mb-4 text-[#fcffd3]">WHO's $MYLO</h1>
        <h2 className="font-comic  text-[30px] mb-4 text-[#fcffd3]">
          $MYLO LEARNT FROM THE LEGEND HOUDINI HIMSELF, THEY SAY CATS HAVE 7 LIVES BUT $MYLO IS INMORTAL<br/>
          <br/>THIS YEAR $MYLO WILL ATTEMPT HIS BIGGEST MAGIC TRICK EVER <br/>HE WILL TAKE A BUNCH OF SOLANA AND MULTIPLY IT IN FRONT OF THE WHOLE WORLD<br/><br/>
          MAGIC $MYLO IS GOING TO TAKE US TO THE MOON JOIN NOW DONT MISS THE SHOW !   </h2>
      </div>
      <div className="lg:w-5/12 p-4">
        <img src={about} alt="New Section" className="w-full" />
      </div>
    </section>
  );
};

export default About;
