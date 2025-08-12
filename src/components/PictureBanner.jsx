import React from 'react';
import bannerTemplate from '../assets/2_2.jpg';
import bannerTemplate2 from '../assets/2_2.1.jpg';
const PictureBanner = () => {
  return (
    <div className='px-16 grid grid-cols-12 gap-6'>
      <section className="w-full h-[40vh] col-span-6   bg-white relative overflow-hidden">
        <div
          className="w-full min-h-[300px] h-[40vh]  flex items-center px-14 py-4 mt-10 justify-end relative"
          style={{
            backgroundImage: bannerTemplate ? `url(${bannerTemplate})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
          {/* Right Text Section */}
          <div className="flex flex-col items-end z-10 text-right">
            <h1 className="text-base md:text-xl font-bold text-gray-500 leading-snug">
              Fresh Fruits <br /> Healthy Products
            </h1>
            <p className="text-sm md:text-base text-green-600 font-semibold mt-4">
              30% off sale <span className="text-gray-500">Hurry up!!!</span>
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-base font-medium px-2 py-1 rounded-lg shadow transition duration-200">
              Shop now
            </button>
          </div>
        </div>
      </section>
      <section className="w-full   h-[40vh]  col-span-6 bg-white relative overflow-hidden">
      <div
        className="w-full min-h-[300px] h-[40vh] flex items-center px-14 py-4 mt-10 justify-end relative"
        style={{
          backgroundImage: bannerTemplate2 ? `url(${bannerTemplate2})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
        {/* Right Text Section */}
        <div className="flex flex-col items-end z-10 text-right">
          <h1 className="text-lg md:text-xl font-bold text-gray-500 leading-snug">
            Fresh Fruits <br /> Healthy Products
          </h1>
          <p className="text-sm md:text-base text-green-600 font-semibold mt-4">
            30% off sale <span className="text-gray-500">Hurry up!!!</span>
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-base font-medium px-2 py-1 rounded-lg shadow transition duration-200">
            Shop now
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PictureBanner;
