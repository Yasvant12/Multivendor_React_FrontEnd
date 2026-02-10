import React from 'react';
import { FaHeart, FaCartShopping, FaEye } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white  border border-gray-300 rounded-2xl overflow-hidden relative group hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 bg-slate-50 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 p-4"
        />
        {product.label && (
          <div
            className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-lg ${
              product.label === 'SALE' ? 'bg-red-500' : 'bg-green-600'
            }`}
          >
            {product.label}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2 line-clamp-2 h-9">
          {product.title}
        </h4>
        <div className="flex text-yellow-400 text-xs mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-slate-300'}>
              ★
            </span>
          ))}
        </div>
        {(product.weight || product.pack) && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            {product.weight || product.pack}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-green-600 dark:text-green-500">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-slate-400 line-through text-xs dark:text-slate-500">
              ${product.oldPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center text-green-600 dark:text-green-500 hover:bg-green-600 hover:text-white transition-all">
          <FaHeart className="text-lg" />
        </button>

        <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center text-green-600 dark:text-green-500 hover:bg-green-600 hover:text-white transition-all">
          <FaCartShopping className="text-lg" />
        </button>

        <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center text-green-600 dark:text-green-500 hover:bg-green-600 hover:text-white transition-all">
          <FaEye className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
