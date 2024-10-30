import React, { useEffect, useRef } from 'react';

const Roadmap5 = () => {
  const cards = [
    { title: "DEX PREPAID", text: "We are so confident of our project we will prepay before KOFH", link: "https://x.com/vwitalik" },
    { title: "BUMP IT", text: "1SOL Will be deposited every 20 mins into the bump it bot to stay in the front page", link: "https://t.me/VWITALIK" },
    { title: "ALPHA GROUPS", text: "Paid influencers from X/Telegram", link: "https://x.com/vwitalik" },
    { title: "TOKEN BURNS", text: "Our team will only hold 2.5% of the total supply after we burn the rest", link: "https://t.me/VWITALIK" },
    { title: "MOONTOK", text: "DEX Listing from the moment we go live on Raydium", link: "https://x.com/vwitalik" },
    { title: "MORE TO BE REVEALED", text: "We will reveal PhaseII once we are at over 500k mcap", link: "https://t.me/VWITALIK" }
  ];

  const particleRef = useRef(null);

  useEffect(() => {
    const particleCanvas = particleRef.current;
    const ctx = particleCanvas.getContext('2d');
    const particles = [];
    const colors = ['#ff6b6b', '#6bc1ff', '#ffe56b', '#6bff93', '#ff6bde'];

    const createParticle = () => {
      const size = Math.random() * 5 + 2;
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = Math.random() * 1 + 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * particleCanvas.width,
        y: particleCanvas.height,
        size,
        speedX,
        speedY,
        color
      });
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y -= particle.speedY;
        if (particle.y < 0 || particle.size <= 0) particles.splice(index, 1);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      if (particles.length < 100) createParticle();
      requestAnimationFrame(animateParticles);
    };

    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;

    animateParticles();
    window.addEventListener('resize', () => {
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Particle Effect Canvas */}
      <canvas ref={particleRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

      {/* Roadmap Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black bg-opacity-30 backdrop-blur-md p-6 rounded-xl text-center shadow-xl transition-transform transform hover:scale-110 hover:bg-opacity-40 hover:shadow-2xl hover:rotate-3 hover:skew-x-2 text-white"
          >
            <h3 className="font-elite text-2xl font-extrabold mb-4">{card.title}</h3>
            <p className="font-elite text-md mb-4">{card.text}</p>
          </a>
        ))}
      </div>

      {/* Footer Separator */}
      <div className="absolute bottom-0 w-full text-center text-white p-4">
        🚀 More exciting phases coming soon! Stay tuned!
      </div>
    </section>
  );
};

export default Roadmap5;


// import React, { useEffect, useRef } from 'react';

// const Roadmap5 = () => {
//   const cards = [
//     { title: "DEX PREPAID", text: "We are so confident of our project we will prepay before KOFH", link: "https://x.com/vwitalik" },
//     { title: "BUMP IT", text: "1SOL Will be deposited every 20 mins into the bump it bot to stay in the front page", link: "https://t.me/VWITALIK" },
//     { title: "ALPHA GROUPS", text: "Paid influencers from X/Telegram", link: "https://x.com/vwitalik" },
//     { title: "TOKEN BURNS", text: "Our team will only hold 2.5% of the total supply after we burn the rest", link: "https://t.me/VWITALIK" },
//     { title: "MOONTOK", text: "DEX Listing from the moment we go live on Raydium", link: "https://x.com/vwitalik" },
//     { title: "MORE TO BE REVEALED", text: "We will reveal PhaseII once we are at over 500k mcap", link: "https://t.me/VWITALIK" }
//   ];

//   const particleRef = useRef(null);

//   useEffect(() => {
//     const particleCanvas = particleRef.current;
//     const ctx = particleCanvas.getContext('2d');
//     const particles = [];
//     const colors = ['#ff6b6b', '#6bc1ff', '#ffe56b', '#6bff93', '#ff6bde'];

//     const createParticle = () => {
//       const size = Math.random() * 5 + 2;
//       const speedX = (Math.random() - 0.5) * 2;
//       const speedY = Math.random() * 1 + 0.5;
//       const color = colors[Math.floor(Math.random() * colors.length)];
//       particles.push({
//         x: Math.random() * particleCanvas.width,
//         y: particleCanvas.height,
//         size,
//         speedX,
//         speedY,
//         color
//       });
//     };

//     const animateParticles = () => {
//       ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
//       particles.forEach((particle, index) => {
//         particle.x += particle.speedX;
//         particle.y -= particle.speedY;
//         if (particle.y < 0 || particle.size <= 0) particles.splice(index, 1);

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//         ctx.fillStyle = particle.color;
//         ctx.fill();
//       });

//       if (particles.length < 100) createParticle();
//       requestAnimationFrame(animateParticles);
//     };

//     particleCanvas.width = window.innerWidth;
//     particleCanvas.height = window.innerHeight;

//     animateParticles();
//     window.addEventListener('resize', () => {
//       particleCanvas.width = window.innerWidth;
//       particleCanvas.height = window.innerHeight;
//     });
//   }, []);

//   return (
//     <section className="relative w-full h-full flex flex-col items-center justify-center p-8  overflow-hidden">
      
//       {/* Particle Effect Canvas */}
//       <canvas ref={particleRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

//       {/* Roadmap Cards */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 mb-8">
//         {cards.map((card, index) => (
//           <a
//             key={index}
//             href={card.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-full text-center shadow-xl transition-transform transform hover:scale-110 hover:bg-opacity-40 hover:shadow-2xl text-white w-60 h-60 flex flex-col items-center justify-center"
//           >
//             <h3 className="font-elite text-lg font-extrabold mb-2 text-black">{card.title}</h3>
//             <p className="font-elite text-sm text-black">{card.text}</p>
//           </a>
//         ))}
//       </div>

//       {/* Footer Separator */}
//       <div className="absolute bottom-0 w-full text-center text-white p-4">
//         🚀 More exciting phases coming at RAYDIUM! Stay tuned!
//       </div>
//     </section>
//   );
// };

// export default Roadmap5;
