import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Intro */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🛒</span>
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">GrabIt</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              GrabIt is the biggest market of grocery products. Get your daily needs from our store.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Download App</p>
              <div className="flex space-x-3">
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-green-600 rounded transition-colors text-xs font-bold">
                  📱 App Store
                </button>
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-green-600 rounded transition-colors text-xs font-bold">
                  🔵 Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 pb-2 border-b border-slate-700">Category</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Dairy & Milk</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Snack & Spice</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Fast Food</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Juice & Drinks</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Bakery</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Seafood</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 pb-2 border-b border-slate-700">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Delivery</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Legal Notice</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Secure Payment</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 pb-2 border-b border-slate-700">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Sign In</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">View Cart</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Become a Vendor</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Payments</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 pb-2 border-b border-slate-700">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">📍</span>
                <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">📱</span>
                <span>+00 9876543210</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✉️</span>
                <span>support@grabit.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">f</a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">𝕏</a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">in</a>
              <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">📷</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          {/* Newsletter Section */}
          <div className="mb-8">
            <div className="bg-slate-800 rounded-xl p-6 md:p-8">
              <h4 className="font-bold text-white mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-2.5 bg-slate-700 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-lg transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2024 GrabIt. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-green-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="text-sm hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
