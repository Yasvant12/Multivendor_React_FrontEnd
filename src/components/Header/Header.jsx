import { PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
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
      <div className="bg-slate-50 text-xs py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
            <span className="flex items-center">
              <span className="material-icons-outlined text-primary text-sm mr-1"><PhoneOutlined /></span>
              <span>+91 987 654 3210</span>
            </span>
            <span className="flex items-center space-x-4">
              <span className="material-icons-outlined text-primary text-sm mr-1"><MdOutlineLocationOn /></span>
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
        {/* Logo + Search + Account */}
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-xl"><FaCartShopping /></span>
            </div>
            <span className="text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">GrabIt</span>
          </div>
          <div className="flex-1 max-w-xl mx-8 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full border-2 border-slate-200 rounded-full px-5 py-2.5 focus:border-green-500 focus:ring-0 focus:outline-none text-slate-900 placeholder-slate-400"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <span className="text-xl"><IoSearch /></span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaRegUser /></span>
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase text-slate-400 font-bold">Account</p>
                <p className="text-xs font-semibold text-slate-900">Login</p>
              </div>
            </div>
            <div className="relative cursor-pointer group">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaRegHeart /></span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
              <div className="hidden sm:block absolute top-1/2 left-8 -translate-y-1/2">
                <p className="text-[10px] uppercase text-slate-400 font-bold whitespace-nowrap">Wishlist</p>
                <p className="text-xs font-semibold text-slate-900 whitespace-nowrap">3 Items</p>
              </div>
            </div>
            <div className="relative cursor-pointer group pl-12">
              <span className="text-2xl group-hover:text-green-600 transition-colors"><FaCartShopping /></span>
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
              <div className="hidden sm:block absolute top-1/2 left-8 -translate-y-1/2">
                <p className="text-[10px] uppercase text-slate-400 font-bold whitespace-nowrap">Cart</p>
                <p className="text-xs font-semibold text-slate-900 whitespace-nowrap">3 Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className="border-t border-slate-100 py-3 relative">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <nav className="flex items-center space-x-8">
              <button className="bg-green-500 text-white px-4 py-2 rounded-2xl flex items-center space-x-2 font-semibold text-sm transition-all">
                <span className="text-lg"><GiHamburgerMenu /></span>
                <span>All Categories</span>
                <span><FaAngleDown /></span>
              </button>

              <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700">

                {/* Home — simple dropdown */}
                <li className="relative group">
                  <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1 py-1">
                    Home <FaAngleDown className="text-xs" />
                  </a>
                  <div className="absolute top-full left-0 mt-3 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-slate-100">
                    <ul className="py-2">
                      {["Home Version 1","Home Version 2","Home Version 3","Home Electronics","Home Fashion"].map(item => (
                        <li key={item}>
                          <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors text-sm font-normal">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* Categories — full width mega menu */}
                <li className="group static">
                  <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1 py-1">
                    Categories <FaAngleDown className="text-xs" />
                  </a>
                  <div className="fixed left-0 right-0 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="container mx-auto px-4 py-8">
                      <div className="grid grid-cols-4 gap-10">
                        <div>
                          <h4 className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-green-100">Fruits & Vegetables</h4>
                          <ul className="space-y-3">
                            {["Exotic Fruits","Leafy Greens","Fresh Vegetables","Seasonal Picks","Mushrooms","Herbs & Microgreens"].map(item => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                                <Link to="/category/vegetables" className="text-sm font-normal text-slate-600 hover:text-green-600 transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-green-100">Dairy & Bakery</h4>
                          <ul className="space-y-3">
                            {["Milk","Cheese","Bread","Butter & Eggs","Yogurt","Paneer"].map(item => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                                <Link to="/category/dairy" className="text-sm font-normal text-slate-600 hover:text-green-600 transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-green-100">Beverages & Snacks</h4>
                          <ul className="space-y-3">
                            {["Soft Drinks","Chips","Cookies","Healthy Snacks","Juices","Tea & Coffee"].map(item => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                                <Link to="/category/snacks" className="text-sm font-normal text-slate-600 hover:text-green-600 transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Special Offer Card */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-5 flex flex-col items-center justify-between border border-green-200">
                          <div className="text-center">
                            <span className="text-green-600 font-bold text-xs uppercase tracking-widest">Special Offer</span>
                            <p className="text-slate-800 font-bold text-lg mt-1 leading-snug">Save 20% on<br />First Order</p>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&q=80"
                            alt="fruits"
                            className="rounded-xl my-4 w-full h-28 object-cover shadow-md"
                          />
                          <Link to="/category/vegetables" className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors w-full text-center shadow">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Products — FULL WIDTH mega menu from code.html */}
                <li className="group static">
                  <a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1 py-1">
                    Products <FaAngleDown className="text-xs" />
                  </a>
                  <div className="fixed left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-green-500">
                    <div className="container mx-auto grid grid-cols-4 gap-8 p-8">

                      {/* Column 1 — Daily Essentials */}
                      <div>
                        <h3 className="font-display font-bold text-lg mb-6 border-b border-slate-100 pb-2">Daily Essentials</h3>
                        <div className="space-y-6">
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Milk"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcPKB4FAHbr8x6dKkwkulVyDfCi-zj_yy7VxWhZr_EUQEU3l4_LYakZEfCLJW53ivuTEcYPwCcC-rEFfyqV9VTTNeVmHeBdBDk7Zkve18teSCCYC9WD6QkZ0qec-Pbs4UwByUKK4LVtWSJtgvI54-zVU9u0p0TnCpVdHAm54_tLoW0EfFFzXFwmOZmqqJvNpSV4jMv5WM2XfcS-lghH8acpd7jkWIsciGy9NUocF1jjMb4o5b2t8dSQq1T6NI0Jghq5fHchS2dEtY5"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Fresh Milk</span>
                          </a>
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Eggs"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4r2BxCBQOwYmo2EBjl2V9duAcUTnY3i8Y_s2tDo3JiyMn-MElNyvyu5nAiQZklEfK2_Z1mIJNDSp7S4drFGV0OQibqG4vA_i04IPYYzIY85u2bJO1WFFwOEPKSOYvK8xRHIpDNbq6RHGuFCB5hhwokPgCZkb2ygzWREVusjJ6cSZkecZ7MZn0vG0SQzRDRL9VNAlar2tUXooNJ0cPNzNUAHSO0jOIL3DX0bgjPRDKc5ezfEbMBNeVwWiYX1BJ2vAVHrtevKx0z3w"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Farm Eggs</span>
                          </a>
                          <ul className="space-y-3 mt-4 text-slate-500 font-medium text-sm">
                            <li><a className="hover:text-green-600 transition-colors" href="#">Bread & Bakery</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Butter & Ghee</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Cheese & Curd</a></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 — Organic Specials */}
                      <div>
                        <h3 className="font-display font-bold text-lg mb-6 border-b border-slate-100 pb-2">Organic Specials</h3>
                        <div className="space-y-6">
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Strawberries"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZb1xKH1pbTpXxF-shrNpZf0MdAV-GWsMUQI6Wkg-MeYq_5uMXh1l3I6kf3_fTXtCVv0CNPw55NCwjRKlJAwekwPqOLZhUsNDCKQR9bXTW5lTOYxc_paVzU5js1MBBAQAQ_nq2hfJHSW9biDH3xsxbtPC-iVUJoP_PHGDLZ2vmmurY_PO5bw8WU65NbAbMk6M4mqdaGPhaXn1qF44NDtfMnqm6FnTyfqxTACYWqwFcIzA_T8ptT_Lx0ZPY7xjPmFlLVGQpCzR2keA3"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Strawberries</span>
                          </a>
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Spinach"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC4LCqQoXH330_boWiJ2biO6Uf3D46QimKEFfu6Vrz-ThuADxH2zPBByT43wQI7iVYfEYx8lJgV_Q2Xy_nOvY_q1utBcHIieizNOyqhpJzb9yKok_29BGAwJNAqdEvhCh1-eTkxqZYyfr8ouRZWoRbMiDlP_IF8fKSBt_JrJljQDnvQOGk1vCdC3NjQ4dqarEXDm5yVb_-77Uc1IGJFpdv0SQuxVeZKXDCkxjXRViC7YLlYpKi5shToEtNPlOpVYKzUwY3uny3U77y"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Organic Spinach</span>
                          </a>
                          <ul className="space-y-3 mt-4 text-slate-500 font-medium text-sm">
                            <li><a className="hover:text-green-600 transition-colors" href="#">Exotic Fruits</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Green Vegetables</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Organic Seeds</a></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 3 — Quick Snacks */}
                      <div>
                        <h3 className="font-display font-bold text-lg mb-6 border-b border-slate-100 pb-2">Quick Snacks</h3>
                        <div className="space-y-6">
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Nuts"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxGlt2QGtICq1vtIXnE0oXUZ3iryhYGHvXDEJemY4OXSvR3IkhIJLYV0hS5ZvyuAnqduAtw6kdiEWxiHwBl59kuQhUQ_55dhAQ8G4VnV-h1lMbzLQU3GYB9UcmkFmtCq3VRzVnjkLamqsaBIP7e0atILyZwpeCexO24oNualSOvnjZ4ROqWp8K8pghOWSuNZu9lN7uHvH8m05Mv_oWCs5zrOFJ6WDsr8Ntk492Dke5Q4a7iBB30nMXKv2jiX-7Rqf4AwFFqpDog_cn"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Mixed Nuts</span>
                          </a>
                          <a className="flex items-center group/item" href="#">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 mr-4 overflow-hidden flex-shrink-0">
                              <img
                                alt="Crackers"
                                className="w-full h-full object-contain group-hover/item:scale-110 transition duration-300"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCusGDOaA0h6meIOVYezYbymzx01THw5njcyQDP54cGzUNWdXFDeVS_RQB-rU8Gja4Zsj276eSD6iiEfgATjnCFEgwdqXMr3kVMovm3TzSMxSRdhbyw7KsbxXANpIfesKKX1L-SOiOe8MW46pm96uak7UD99O3dHrHYC6kzelUkYJqMAjKbSVQV8GUaJgMqshgbbqhgl9zGAd0U50NOwJ37Pov1JEhNwyXSG3zuaHklQ5LBS-Muc3wzQtNI1dSZwDyMTTOYH7nbcGOI"
                              />
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-green-600 transition-colors">Graham Crackers</span>
                          </a>
                          <ul className="space-y-3 mt-4 text-slate-500 font-medium text-sm">
                            <li><a className="hover:text-green-600 transition-colors" href="#">Potato Chips</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Healthy Bars</a></li>
                            <li><a className="hover:text-green-600 transition-colors" href="#">Instant Noodles</a></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 4 — Featured Product */}
                      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                        <p className="text-xs font-bold text-green-600 mb-2 uppercase tracking-widest">Featured Product</p>
                        <div className="h-40 w-full mb-4">
                          <img
                            alt="Tropical Fruit Basket"
                            className="w-full h-full object-contain"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMM_Q5YGTv0DsLZF__2uUugJNYvh522GNJ0V0UPIik_M2Dk2VOVLcE6LK46CA1G0i-uRjh6f8Cy456Ox1p_zyGDaLngCnbSgis1bM6kn2KnBKCCwqhfiNG4SgIa5wvb_2mO-H2-OaUv8qnbxZmQ0cO1A72Jfr6bVERROkGJU7hj7hN1MklLWXAGlklWYydsmtAerftK5v371mHG9F7peFUhtBJ261FrbF73y5vBw7EoJXYXZxZYL-5WySGicT77E0nRdtvjfDjGW_D"
                          />
                        </div>
                        <h4 className="font-display font-bold text-xl mb-1">Tropical Fruit Basket</h4>
                        <p className="text-green-600 font-bold text-2xl mb-4">$35.00</p>
                        <Link
                          to="/category/fruits"
                          className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full font-bold transition-all w-full text-center"
                        >
                          Shop Now
                        </Link>
                      </div>

                    </div>
                  </div>
                </li>

                <li><a href="#" className="hover:text-green-600 transition-colors flex items-center gap-1 py-1">Blog <FaAngleDown className="text-xs" /></a></li>
                <li><a href="#" className="hover:text-green-600 transition-colors py-1">Offers</a></li>
              </ul>
            </nav>

            <div className="flex items-center text-green-600 text-sm font-semibold bg-green-50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-green-100 transition-colors">
              <span className="text-lg mr-2"><MdOutlineLocationOn /></span>
              <span className="hidden sm:inline">Select Location</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}