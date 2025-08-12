import React from 'react';
import {
  EnvironmentOutlined,
  MailOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  InstagramOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-300 py-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and Intro */}
        <div>
          <div className="text-3xl font-bold flex items-center mb-3">
            <span className="text-green-600 mr-1">🛍️</span> <span>Grab</span><span className="text-green-600">it</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Grabit is the biggest market of grocery products. Get your daily needs from our store.
          </p>
          <div className="flex space-x-2">
            <img src="/images/google-play.png" alt="Google Play" className="h-10" />
            <img src="/images/app-store.png" alt="App Store" className="h-10" />
          </div>
        </div>

        {/* Category */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-gray-400 pb-1">Category</h4>
          <ul className="space-y-1 text-sm">
            <li>Dairy & Milk</li>
            <li>Snack & Spice</li>
            <li>Fast Food</li>
            <li>Juice & Drinks</li>
            <li>Bakery</li>
            <li>Seafood</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-gray-400 pb-1">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & conditions</li>
            <li>Secure payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-gray-400 pb-1">Account</h4>
          <ul className="space-y-1 text-sm">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>Return Policy</li>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3 border-b border-gray-400 pb-1">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <EnvironmentOutlined className="text-green-600 mt-1 mr-2" />
              <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
            </li>
            <li className="flex items-center">
              <WhatsAppOutlined className="text-green-600 mr-2" />
              <span>+00 9876543210</span>
            </li>
            <li className="flex items-center">
              <MailOutlined className="text-green-600 mr-2" />
              <span>example@email.com</span>
            </li>
          </ul>

          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-white bg-gray-700 p-2 rounded">
              <FacebookFilled />
            </a>
            <a href="#" className="text-white bg-gray-700 p-2 rounded">
              <TwitterOutlined />
            </a>
            <a href="#" className="text-white bg-gray-700 p-2 rounded">
              <LinkedinFilled />
            </a>
            <a href="#" className="text-white bg-gray-700 p-2 rounded">
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
