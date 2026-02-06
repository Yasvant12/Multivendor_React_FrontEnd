import React from "react";
import ProductCard from "./common/ProductCard";
import image1 from "../assets/product/1_1.jpg";
// import image2 from "../assets/product/1_2.jpg";
import image3 from "../assets/product/2_1.jpg";
// import image4 from "../assets/product/2_2.jpg";
import image5 from "../assets/product/3_1.jpg";
import image6 from "../assets/product/6_1.jpg";
import image7 from "../assets/product/9_1.jpg";
import image8 from "../assets/product/17_1.jpg";
import image9 from "../assets/product/24_1.jpg";
const dealsData = [
  {
    id: 1,
    category: "Dried Fruits",
    title: "Mixed Nuts Berries Pack",
    image: image6,
    price: 45,
    oldPrice: 56,
    rating: 5,
    label: "SALE",
  },
  {
    id: 2,
    category: "Cookies",
    image: image5,
    title: "Multi Grain Cookies",
    price: 25,
    oldPrice: 30,
    rating: 4,
    weight: "10 kg",
    label: "SALE",
  },
  {
    id: 3,
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    image: image7,
    price: 49,
    oldPrice: 65,
    rating: 3,
  },
  {
    id: 4,
    category: "Dried Fruits",
    title: "Dates Value Fresh Pouch",
    image: image3,
    price: 78,
    oldPrice: 85,
    rating: 3,
    label: "SALE",
  },
  {
    id: 5,
    category: "Foods",
    title: "Stick Fiber Masala Magic",
    image: image1,
    price: 45,
    oldPrice: 50,
    rating: 2,
    pack: "2 pack",
    label: "NEW",
  },
  {
    id: 6,
    category: "Fresh Fruit",
    title: "Natural Hub Cherry Karonda",
    image: image8,
    price: 20,
    oldPrice: 21,
    rating: 2,
    weight: "1 kg",
    label: "NEW",
  },
  {
    id: 7,
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    image: image9,
    price: 2,
    oldPrice: 3,
    rating: 2,
    weight: "100 g",
  },
];

const ContentItemSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Day Of The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Deal</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Don't wait. The time will never be just right.</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center space-x-2">
          <span className="text-slate-600 dark:text-slate-400 text-sm font-bold">Expires in:</span>
          <div className="flex space-x-1">
            <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded font-bold text-slate-900 dark:text-white">10</div>
            <span className="font-bold text-slate-900 dark:text-white">:</span>
            <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded font-bold text-slate-900 dark:text-white">56</div>
            <span className="font-bold text-slate-900 dark:text-white">:</span>
            <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded font-bold text-slate-900 dark:text-white">22</div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {dealsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ContentItemSection;
