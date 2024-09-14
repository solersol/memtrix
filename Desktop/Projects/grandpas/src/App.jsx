
import { Hero, About, Roadmap2,Roadmap3, About2,About3,About4,Links, NewSection, Join } from "./sections";
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
import main3 from './assets/images/main3.png';
import bgImage from './assets/images/main.png';
import mainbg from './assets/images/mainbg.png';



// import { bg3 } from "./assets/images";



const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000); // Set the loading time to 3 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }
return(
  <main className="relative bg-[#000]" style={{ backgroundImage: `url(${mainbg})` }}>
    {/* <Nav /> */}
   

  


    {/* <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${main3})` }}><About2 /></section> */}
    <VideoBackground >
      <Hero />
    </ VideoBackground >
    <Separator />

  

    <section className="w-full h-screen bg-cover bg-center   " style={{ backgroundImage: `url(${bgImage})` }}>
      <Roadmap2 />
    </section>
    <SeparatorReverse />
    
        <About4 />
      
        <Links />
        <Join />
      


    <section className=""><StickyFooter /></section> 
  </main>
);
};

export default App;
