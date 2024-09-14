const Hero = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-center items-center min-h-screen pb-[32rem] bg-cover bg-center">
      {/* <h1 className="flex justify-center font-comic  text-[70px] mb-0 text-[#fff]">$F1</h1> */}
      {/* <h2 className="flex justify-center font-comic  text-[22px] mb-10 mt-0 text-[#dfe2ff]">F1 MEMES</h2> */}
      <h1 className="flex justify-center font-anton  text-[35px] mt-6 text-center px-4 break-words text-[#000] animate-slide-in-left">CA: 632sZSUCr4yGfJhGqB3kiBdS2NfvezmBgeVM94xQpump  </h1>

      <a href="https://pump.fun/632sZSUCr4yGfJhGqB3kiBdS2NfvezmBgeVM94xQpump"><button className="animate-bounce mt-6 bg-[#2e1515] text-[#fff] rounded-full px-28 py-6 hover:bg-[#f0ff00] font-anton  text-[24px] ">
        BUY $SCHOOL
      </button></a>

    </section>
  );
};

export default Hero;
