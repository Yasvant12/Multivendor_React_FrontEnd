import { useState } from 'react';

const products = {
  trending: [
    {
      id: 1,
      name: 'Healthy Nutmix, 200g Pack',
      category: 'Driedfruit',
      price: 42,
      original: 45,
      image: 'https://images.unsplash.com/photo-1604360866054-82dbbb5a8ec6?w=80&h=80&fit=crop',
    },
    {
      id: 2,
      name: 'Organic Fresh Tomato',
      category: 'Vegetables',
      price: 25,
      original: 30,
      image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=80&h=80&fit=crop',
    },
    {
      id: 3,
      name: 'Coffee With Chocolate Cream',
      category: 'Coffee',
      price: 62,
      original: 65,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&h=80&fit=crop',
    },
  ],
  topRated: [
    {
      id: 4,
      name: 'Ginger - Organic',
      category: 'Vegetables',
      price: 62,
      original: 65,
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=80&h=80&fit=crop',
    },
    {
      id: 5,
      name: 'Dates Value Pouch Dates',
      category: 'Driedfruit',
      price: 56,
      original: 70,
      image: 'https://images.unsplash.com/photo-1558642891-54be180ea339?w=80&h=80&fit=crop',
    },
    {
      id: 6,
      name: 'Blue Berry',
      category: 'Fruits',
      price: 25,
      original: 30,
      image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=80&h=80&fit=crop',
    },
  ],
  topSelling: [
    {
      id: 7,
      name: 'Lemon - Seedless',
      category: 'Vegetables',
      price: 42,
      original: 45,
      image: 'https://images.unsplash.com/photo-1590502160462-58b41354f588?w=80&h=80&fit=crop',
    },
    {
      id: 8,
      name: 'Mango - Kesar',
      category: 'Fruits',
      price: 62,
      original: 65,
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=80&h=80&fit=crop',
    },
    {
      id: 9,
      name: 'Mixed Nuts & Almonds D...',
      category: 'Driedfruit',
      price: 10,
      original: 11,
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=80&h=80&fit=crop',
    },
  ],
};

const ProductCard = ({ product }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition cursor-pointer">
    <img src={product.image} alt={product.name} className="w-14 h-14 object-contain" />

    <div className="flex flex-col">
      <p className="text-sm font-semibold text-gray-700">{product.name}</p>

      <p className="text-xs text-gray-400 mt-1">{product.category}</p>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-sm font-bold text-gray-800">${product.price}.00</span>

        <span className="text-xs text-gray-400 line-through">${product.original}.00</span>
      </div>
    </div>
  </div>
);

const ProductSection = ({ title, highlight, items }) => {
  const [startIdx, setStartIdx] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {title} <span className="text-green-500">{highlight}</span>
        </h2>

        <div className="flex gap-3 text-gray-500">
          <div className="flex gap-1">
            <button
              onClick={() => setStartIdx(Math.max(0, startIdx - 1))}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-500 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setStartIdx(Math.min(items.length - 1, startIdx + 1))}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-500 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default function GroceryShowcase() {
  return (
    <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <div>
        {/* Banner + Product Sections Row */}
        <div className="flex gap-6 items-start">
          {/* Hero Banner */}
          <div className="w-72 rounded-lg overflow-hidden relative">
            <img
              src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/4.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-8 left-6 text-gray-700 max-w-[180px]">
              <h2 className="text-xl font-bold leading-snug">Our Top Most Products Check It Now</h2>

              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Shop Now</button>
            </div>
          </div>

          {/* Three Product Columns */}
          <div className="flex-1 grid grid-cols-3 gap-6">
            <ProductSection title="Trending" highlight="Items" items={products.trending} />
            <ProductSection title="Top" highlight="Rated" items={products.topRated} />
            <ProductSection title="Top" highlight="Selling" items={products.topSelling} />
          </div>
        </div>

        {/* Bottom Stats Bar */}
      </div>
    </div>
  );
}
