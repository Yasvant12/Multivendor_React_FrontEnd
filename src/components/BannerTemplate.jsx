import React from 'react';
import bannerTemplate from '../assets/bannerTemplate.jpg';
const BannerTemplate = () => {
  return (
    <section className="w-full h-[70vh] px-16  bg-white relative overflow-hidden">
      <div className="w-full min-h-[400px] h-[60vh] flex items-center px-14 py-4 mt-10 justify-end relative"
              style={{
                backgroundImage: bannerTemplate ? `url(${bannerTemplate})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
        {/* Right Text Section */}
        <div className="flex flex-col items-end z-10 text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-500 leading-snug">
            Fresh Fruits <br /> Healthy Products
          </h1>
          <p className="text-xl md:text-2xl text-green-600 font-semibold mt-4">
            30% off sale <span className="text-gray-500">Hurry up!!!</span>
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-4 py-2 rounded-lg shadow transition duration-200">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerTemplate;
