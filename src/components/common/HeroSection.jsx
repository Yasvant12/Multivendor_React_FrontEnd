import React from 'react';
import { Carousel } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

const HeroSection = ({ slides = [] }) => {
  return (
    <div className="relative w-full px-16 overflow-hidden">
      <Carousel autoplay effect="fade">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="w-full min-h-[400px] h-[60vh] flex items-center px-14 py-4 mt-10 justify-start relative"
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Left-side gradient overlay for soft text background */}
              <div className="absolute top-0 left-0 h-full w-full flex items-center z-10">
                <div className="bg-gradient-to-r from-white/90 to-transparent h-full min-h-[inherit] flex items-center pl-16 w-2/3">
                  <div className="max-w-xl">
                    {/* Title */}
                    <div className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                      {slide.title}
                    </div>
                    {/* Subtitle */}
                    <div className="text-lg md:text-2xl mb-8 text-gray-600">
                      {slide.subtitle}
                    </div>
                    {/* Call-to-action button, if provided */}
                    {slide.buttonText && slide.buttonLink && (
                      <a href={slide.buttonLink}>
                        <button
                          className="flex items-center gap-2 bg-gray-800 hover:bg-green-600 text-white font-semibold text-lg px-8 py-3 rounded shadow-lg transition duration-200"
                        >
                          <ShoppingOutlined className="text-2xl" />
                          {slide.buttonText}
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* End overlay */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection; 