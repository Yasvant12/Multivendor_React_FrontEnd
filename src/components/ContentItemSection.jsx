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
    <div className="px-16 py-10">
      <h2 className="mb-0 text-[25px] font-semibold text-[#4b5966] relative inline p-0 capitalize leading-[1]  max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
        Day of the <span class="text-[#5caf90]">deal</span>
      </h2>{" "}
      <p class="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]">
        Don't wait. The time will never be just right.
      </p>
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3 py-4 overflow-x-auto scrollbar-hide scroll-smooth w-full"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {dealsData.map((product) => (
            <div className="w-1/5 flex-shrink-0">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ContentItemSection;
