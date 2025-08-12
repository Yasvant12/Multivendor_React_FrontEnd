import React from "react";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined, DownOutlined, EnvironmentOutlined, AppstoreOutlined } from "@ant-design/icons";

<PhoneOutlined />;
export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center bg-[#F5F5F5] px-16 py-4">
        <div className="flex gap-x-6">
          <span className="flex items-center gap-x-1">
            <PhoneOutlined style={{ color: "#777777", fontSize: "16px" }} />
            <p className="text-sm text-[#777777]">+91 987 654 3210</p>
          </span>
          <span className="flex items-center gap-x-1">
            <WhatsAppOutlined style={{ color: "#777777", fontSize: "16px" }} />
            <p className="text-sm text-[#777777]">+91 987 654 3210</p>
          </span>
        </div>
        <div>
          <p className="text-sm text-[#777777]">
            World`s Fastest Online Shopping Destination
          </p>
        </div>
        <div className="flex gap-x-8">
          <span className="flex items-center gap-x-1">
            <p className="text-sm text-[#777777]">Help?</p>
          </span>
          <span className="flex items-center gap-x-1">
            <p className="text-sm text-[#777777]">Track Order?</p>
          </span>
          <span className="flex items-center gap-x-1">
            <p className="text-sm text-[#777777]">English</p>
          </span>
          <span className="flex items-center gap-x-1">
            <p className="text-sm text-[#777777]">Doller</p>
          </span>
        </div>
      </div>
      <div className="w-full px-16 shadow-sm">
        {/* Top Bar */}
        <div className="flex justify-between items-center gap-x-16 px-6 py-4 bg-white">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <img alt="Site Logo" src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"/>
            {/* <span className="text-2xl font-semibold text-gray-800">
              Grab<span className="text-green-500">it</span>
            </span> */}
          </div>

          {/* Search Box */}
          <Input
            placeholder="Search Products..."
            className="w-full h-[48px]"
            size="large"
            suffix={<SearchOutlined className="text-gray-400" />}
          />

          {/* Account, Wishlist, Cart */}
          <div className="flex items-center space-x-8 text-sm text-gray-700">
            <div className="flex items-center space-x-1">
              <UserOutlined className="text-lg" />
              <div className="text-xs leading-none">
                Account
                <br />
                LOGIN
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <HeartOutlined className="text-lg" />
              <div className="text-xs text-nowrap leading-none">
                Wishlist  <br />3–ITEMS
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <ShoppingOutlined className="text-lg" />
              <div className="text-xs text-nowrap leading-none">
                Cart<br /> 3–ITEMS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center px-6 py-3 bg-white border-t border-gray-300">
          {/* All Categories */}
          <button className="bg-green-400 hover:bg-green-500 text-white font-medium px-5 py-2 rounded flex items-center space-x-2">
            <AppstoreOutlined />
            <span>All Categories</span>
            <DownOutlined />
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-gray-800 font-medium">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Home</span>
              <DownOutlined className="text-xs" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Categories</span>
              <DownOutlined className="text-xs" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Products</span>
              <DownOutlined className="text-xs" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Blog</span>
              <DownOutlined className="text-xs" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Pages</span>
              <DownOutlined className="text-xs" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <EnvironmentOutlined />
              <span>Offers</span>
            </div>
          </div>

          {/* Location */}
          <button className="bg-green-400 hover:bg-green-500 text-white font-medium px-5 py-2 rounded flex items-center space-x-2">
            <EnvironmentOutlined />
            <span>New York</span>
            <DownOutlined />
          </button>
        </div>
      </div>
    </>
  );
}
