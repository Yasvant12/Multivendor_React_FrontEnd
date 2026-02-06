import React from 'react';

const HeroSection = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[currentSlide];

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 h-96 md:h-[450px]">
        {/* Background Image */}
        {slide.image && (
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        )}
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent dark:from-slate-900/95 dark:via-slate-900/50"></div>

        {/* Content */}
        <div className="relative h-full flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-md">
            <p className="text-green-600 font-bold text-lg mb-2">
              Starting at <span className="text-3xl">$29.99</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6 text-slate-900 dark:text-white">
              {slide.title}
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              {slide.subtitle}
            </p>
            {slide.buttonText && slide.buttonLink && (
              <a href={slide.buttonLink}>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                  {slide.buttonText}
                </button>
              </a>
            )}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide
                  ? 'bg-green-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 