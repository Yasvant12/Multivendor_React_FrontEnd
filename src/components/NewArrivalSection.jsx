import React from "react";
import ProductCard from "./common/ProductCard";
// import image1 from "../assets/product/1_1.jpg";
// import image2 from "../assets/product/1_2.jpg";
import image3 from "../assets/product/2_1.jpg";
// import image4 from "../assets/product/2_2.jpg";
// import image5 from "../assets/product/3_1.jpg";
import image6 from "../assets/product/6_1.jpg";
import image7 from "../assets/product/9_1.jpg";
// import image8 from "../assets/product/17_1.jpg";
import image9 from "../assets/product/24_1.jpg";
import imageStrabery from "../assets/product/25_1.jpg"
import Snacks1 from "../assets/product/snacks1.jpg";
// import snacks2 from "../assets/product/snacks2.jpg";
import image10 from "../assets/product/4_1.jpg";
import  image7_1 from "../assets/product/7_1.jpg"
import image19_1 from  "../assets/product/19_1.jpg";
import image5_1 from "../assets/product/5_1.jpg";
import {vegetableData,fruitData} from '../utils/productData';
const dealsData = [
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
    badge: null,
    image: imageStrabery,
  },
  {
    category: "Snacks",
    title: "Smoked Honey Spiced Nuts Almonds Pack",
    price: 32.0,
    oldPrice: 45.0,
    rating: 4.0,
    weight: null,
    quantity: null,
    badge: null,
    image: Snacks1,
  },
  {
    category: "Foods",
    title: "Banana Chips Snack Crunchy & Spicy Wafer",
    price: 45.0,
    oldPrice: 50.0,
    rating: 1.5,
    weight: null,
    quantity: null,
    badge: null,
    image: image10,
  },
  {
    category: "Foods",
    title: "Mixed Nuts & Almonds Dry Fruits 500g Pack",
    price: 49.0,
    oldPrice: 65.0,
    rating: 2.5,
    weight: null,
    quantity: null,
    badge: null,
    image: image7_1,
  },
  {
    category: "Foods",
    title: "Roasted Almonds, Pumpkin Snacks",
    price: 49.0,
    oldPrice: 65.0,
    rating: 2.5,
    weight: null,
    quantity: null,
    badge: null,
    image: image7,
  },
  {
    category: "Eggs",
    title: "Farm Eggs - Brown",
    price: 3.0,
    oldPrice: 5.0,
    rating: 2.5,
    weight: null,
    quantity: "3 pcs",
    badge: null,
    image: image19_1,
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
]



import { useState } from "react";

const TABS = [
  { label: "All", value: "all" },
  { label: "Snacks & Spices", value: "Snacks" },
  { label: "Fruits", value: "Fruit" },
  { label: "Vegetables", value: "Vegetable" },
];

const ContentItemSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  let filteredData = dealsData;
  if (activeTab === "Vegetable") {
    filteredData = vegetableData;
  } else if (activeTab === "Fruit") {
    filteredData = fruitData;
  } else if (activeTab === "Snacks") {
    filteredData = dealsData.filter((item) => item.category.includes("Snacks"));
  } else if (activeTab !== "all") {
    filteredData = dealsData.filter((item) => item.category.includes(activeTab));
  }

  return (
    <div className="px-16 py-10">
      <h2 class="mb-0 text-[25px] font-semibold text-[#4b5966] relative inline p-0 capitalize leading-[1]  max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
        New  <span class="text-[#5caf90]">Arrivals</span>
      </h2>{" "}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p class="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]">
          Shop online for new arrivals and get free shipping!
        </p>
        <div className="flex gap-2 mt-2 md:mt-0">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              className={`px-4 py-2 rounded-full text-sm font-semibold  transition-colors duration-200 ${
                activeTab === tab.value
                  ? "text-green-500  border-green-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-green-100"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full overflow-hidden mt-8">
        <div
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {filteredData.map((product, index) => (
            <div className="">
              <ProductCard key={index} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentItemSection;
