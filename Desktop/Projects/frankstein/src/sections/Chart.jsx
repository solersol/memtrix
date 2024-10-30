

import React from 'react';
import {chartImage} from '../assets/images'; // Replace with your actual image path

const Chart = () => {
  return (
    <section 
      className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${chartImage})` }}
    >
      <div className="w-full max-w-6xl mb-64 bg-black bg-opacity-50 p-8 rounded-lg">
        <iframe
          src="https://pump.fun/ErAM6p3LebHkPX5vaA9pmQMNSdghMBjytnQHG6Y6NS3a?embed=1&theme=dark&trades=0&info=0"
          width="100%"
          height="500px"
          loading="lazy"
          title="Dexscreener Chart"
          className="w-full"
        >
        </iframe>
        <noscript>
          <p className="text-center text-red-500">
            Your browser does not support iframes. Please visit Dexscreener to view the live chart.
          </p>
        </noscript>
      </div>
    </section>
  );
};

export default Chart;



