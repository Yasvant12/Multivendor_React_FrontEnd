import React from 'react';
import bannerTemplate from '../assets/bannerTemplate.jpg';

const BannerTemplate = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative rounded-3xl overflow-hidden h-72 md:h-80 lg:h-96 bg-slate-100 dark:bg-slate-800 flex items-center justify-end">
        {/* Background Image */}
        <img
          src={bannerTemplate}
          alt="Fresh Fruits Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-slate-900/90 dark:via-slate-900/70"></div>

        {/* Content */}
        <div className="relative z-10 mr-8 md:mr-12 lg:mr-24 text-right max-w-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-3 text-slate-900 dark:text-white">
            Fresh Fruits<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Healthy Products</span>
          </h2>
          
          <p className="text-green-600 font-bold text-2xl md:text-3xl mb-6">
            30% off sale <span className="text-slate-600 dark:text-slate-400 font-normal text-lg">Hurry up!!!</span>
          </p>

          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerTemplate;
