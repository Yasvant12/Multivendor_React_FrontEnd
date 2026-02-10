import { PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";



export default function Header() {
  return (
    <>
      <div className="bg-slate-50    text-xs py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
            <span className="flex items-center">
              <span className="material-icons-outlined text-primary text-sm mr-1"><PhoneOutlined /></span>
              <span>+91 987 654 3210</span>
            </span>
            <span className="flex items-center space-x-4">
              <span className="material-icons-outlined text-primary text-sm mr-1"><MdOutlineLocationOn/></span>
              <span>World's Fastest Online Shopping Destination</span>
            </span>
          </div>
          <div className="flex items-center space-x-8 text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-primary transition-colors font-medium">Help?</a>
            <a href="#" className="hover:text-primary transition-colors font-medium">Track Order?</a>
            <select className="bg-transparent border-none focus:ring-0 cursor-pointer text-xs font-medium hover:text-slate-800">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="bg-transparent border-none focus:ring-0 cursor-pointer text-xs font-medium hover:text-slate-800">
              <option>Dollar</option>
              <option>Euro</option>
            </select>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-xl"><FaCartShopping/></span>
            </div>
            <span className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">GrabIt</span>
          </div>
          <div className="flex-1 max-w-xl mx-8 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-full px-5 py-2.5 focus:border-green-500 focus:ring-0 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <span className="text-xl"><IoSearch/></span>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaRegUser /></span>
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase text-slate-400 font-bold">Account</p>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Login</p>
              </div>
            </div>
            {/* <div className="relative cursor-pointer group">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaRegHeart/></span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
              <div className="hidden sm:block absolute top-1/2 left-8 -translate-y-1/2">
                <p className="text-[10px] uppercase text-slate-400 font-bold whitespace-nowrap">Wishlist</p>
                <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">3 Items</p>
              </div>
            </div> */}

            {/* <div className="relative cursor-pointer group pl-4">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaCartShopping/></span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
              <div className="hidden sm:block absolute top-1/2 left-10 -translate-y-1/2">
                <p className="text-[10px] uppercase text-slate-400 font-bold whitespace-nowrap">Cart</p>
                <p className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">3 Items</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 py-3">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <nav className="flex items-center space-x-8">
              <button className="bg-green-500  hover:from-green-600 hover:to-emerald-700  text-white px-4 py-2 rounded-2xl flex items-center space-x-2 font-semibold text-sm transition-all">
                <span className="text-lg"><GiHamburgerMenu/></span>
                <span>All Categories</span>
                <span><FaAngleDown/></span>
              </button>
              <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <li className="relative group">
                  <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1">
                    Home
                    <FaAngleDown className="text-xs" />
                  </a>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <ul className="py-2">
                      <li><a href="#" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-600 transition-colors">Home Version 1</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-600 transition-colors">Home Version 2</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-600 transition-colors">Home Version 3</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-600 transition-colors">Home Electronics</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-600 transition-colors">Home Fashion</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors">Offers</a></li>
              </ul>
            </nav>
            <div className="flex items-center text-green-600 text-sm font-semibold bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full cursor-pointer hover:bg-green-100 transition-colors">
              <span className="text-lg mr-2"><MdOutlineLocationOn/></span>
              <span className="hidden sm:inline">Select Location</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}