import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Rate } from "antd";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 h-full rounded-lg shadow-sm relative bg-white ">
      <div className="p-4">
        {product.label && (
          <div
            className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded ${
              product.label === "SALE" ? "bg-red-400" : "bg-green-400"
            }`}
          >
            {product.label}
          </div>
        )}

        <div className="mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain"
          />
        </div>
      </div>
      <hr className="my-2 border-gray-200" />
      <div className="px-4 pb-4">
        <div>
          {/* Category */}
          <div className="text-gray-500 text-sm mt-2">{product.category}</div>

          {/* Title */}
          <div className="text-[14px] font-medium text-gray-400">
            {product.title}
          </div>

          {/* Ratings */}
          <div className="flex justify-between items-center mt-2 mb-2">
            <Rate value={product.rating} disabled />{" "}
             {product.weight && (
            <div className="text-xs text-gray-500 mt-1">{product.weight}</div>
          )}
          </div>

          {/* Price */}
          <div className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}{" "}
            <span className="text-gray-400 line-through text-sm ml-2">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>

          {/* Extra Info (weight or pack) */}
          
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductCard;
