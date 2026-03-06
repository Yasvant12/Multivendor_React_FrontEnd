import React from 'react';
import bannerTemplate from '../../assets/2_2.jpg';
import bannerTemplate2 from '../../assets/2_2.1.jpg';

const PictureBanner = () => {
  const BannerCard = ({ image, title, discount, offerText, cta }) => (
    <div className="relative rounded-3xl overflow-hidden h-72 md:h-80 bg-slate-100 dark:bg-slate-800 flex items-center justify-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-slate-900/90 dark:via-slate-900/70"></div>
      <div className="relative z-10 mr-6 md:mr-12 text-right">
        <h3 className="text-2xl md:text-3xl font-bold font-display leading-tight mb-2 text-slate-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-green-600 font-bold text-xl md:text-2xl mb-4">
          {discount} <span className="text-slate-600 dark:text-slate-400 font-normal text-base">{offerText}</span>
        </p>

        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base">
          {cta}
        </button>
      </div>
    </div>
  );

  return (
    <section className=" py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BannerCard
          image={bannerTemplate}
          title="Fresh Fruits Healthy Products"
          discount="30% off sale"
          offerText="Hurry up!!!"
          cta="Shop now"
        />
        <BannerCard
          image={bannerTemplate2}
          title="Premium Quality Fresh"
          discount="25% off sale"
          offerText="Limited time!"
          cta="Explore"
        />
      </div>
    </section>
  );
};

export default PictureBanner;
