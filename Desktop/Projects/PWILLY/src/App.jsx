
import { Hero, About, Roadmap2,Roadmap3, About2,About3,About4,Links, NewSection, Join , ComingSoon, Hero3, Footer2, Roadmap5} from "./sections";
import VideoBackground from "./components/VideoBackground";
import VideoBackground2 from "./components/VideoBackground2";

import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Separator from "./components/Separator";
import SeparatorReverse from "./components/SeparatorReverse";

import StickyFooter from "./sections/StickyFooter";
import Chart from "./sections/Chart";
import LoadingScreen from "./components/LoadingScreen"; // Import the loading screen

// Import the background image
import rdImage from './assets/images/roadmap2.png';
import main2 from './assets/images/main2.png';
import main3 from './assets/images/main1.png';
import main4 from './assets/images/bgmap.png';

import bgImage from './assets/images/main.png';
import fullBg from './assets/images/fullBg.png';

import mainbg from './assets/images/mainbg.png';
import linkBg from './assets/images/linkBg.png'
import ButtonSection from "./sections/ButtonSection";
import ButtonSection2 from "./sections/ButtonSection2";

import buttonBg from './assets/images/buttonBg.png'
import buttonBg2 from './assets/images/buttonBg2.png'




// import { bg3 } from "./assets/images";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set the loading time to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
return(
  <main className="relative bg-[#b3ddd8] "  >
     {/* <Nav />  */}
   

  


     <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${main3})` }}><ComingSoon /></section>
     {/* <Separator />  */}
     <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${main4})` }}><Roadmap5 /></section>
     
   
    {/* <Hero3 />
    <SeparatorReverse /> */}
    
    
  

    {/* <section className="w-full h-screen bg-cover bg-center   " style={{ backgroundImage: `url(${bgImage})` }}>
      <NewSection />
    </section> */}
    {/* <Separator />
    <section className="w-full h-full bg-cover bg-center   " style={{ backgroundImage: `url(${buttonBg})` }}>
       <ButtonSection linkUrl="https://pump.fun/5eayDLdACv74f7hWWvZDEGaUAwHhg15XBL2hV8jFpump"  />
    </section> */}

    {/* <SeparatorReverse />
    
    <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${buttonBg2})` }}>
       <ButtonSection2 />
    </section>
    <Footer2 linkUrl="https://pump.fun/5eayDLdACv74f7hWWvZDEGaUAwHhg15XBL2hV8jFpump" /> */}
    {/* <StickyFooter /> */}
  </main>
);
};

export default App;
