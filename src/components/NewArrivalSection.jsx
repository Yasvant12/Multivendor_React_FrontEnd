import React, { useState } from "react";
import ProductCard from "./common/ProductCard";
import image3 from "../assets/product/2_1.jpg";
import image6 from "../assets/product/6_1.jpg";
import image7 from "../assets/product/9_1.jpg";
import image9 from "../assets/product/24_1.jpg";
import image5_1 from "../assets/product/5_1.jpg";
import { vegetableData, fruitData } from '../utils/productData';

const allProducts = [
  {
    category: "Dried Fruits",
    title: "Californian Almonds Value 250g + 50g Pack",
    price: 58.0,
    oldPrice: 65.0,
    rating: 2.5,
    weight: null,
    quantity: null,
    badge: null,
    image: image6,
  },
  {
    category: "Dried Fruits",
    title: "Dates Value Pouch Dates Value Pouch",
    price: 78.0,
    oldPrice: 85.0,
    rating: 3.5,
    weight: null,
    quantity: null,
    badge: null,
    image: image3,
  },
  {
    category: "Fresh Fruit",
    title: "Fresh Lichi 500g Pack",
    price: 25.0,
    oldPrice: 35.0,
    rating: 5.0,
    weight: "500g",
    quantity: null,
    badge: "NEW",
    image: image7,
  },
  {
    category: "Snacks",
    title: "Carrot & Broccoli Soup Mix 250g Pack",
    price: 25.0,
    oldPrice: 35.0,
    rating: 5.0,
    weight: null,
    quantity: null,
    badge: "NEW",
    image: image5_1,
  },
  {
    category: "Tuber Root",
    title: "Ginger - Organic",
    price: 2.0,
    oldPrice: 3.0,
    rating: 2.5,
    weight: "100g",
    quantity: null,
    badge: null,
    image: image9,
  },
];

const TABS = [
  { label: "All", value: "all" },
  { label: "Snacks & Spices", value: "Snacks" },
  { label: "Fruits", value: "Fruit" },
  { label: "Vegetables", value: "Vegetable" },
];

const NewArrivalSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  let filteredData = allProducts;
  if (activeTab === "Vegetable") {
    filteredData = vegetableData.slice(0, 10);
  } else if (activeTab === "Fruit") {
    filteredData = fruitData.slice(0, 10);
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            New <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Arrivals</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Shop online for new arrivals and get free shipping!</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.value
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                  : "border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivalSection;
