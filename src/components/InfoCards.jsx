import React from "react";
import {
  FaTruckFast,
  FaHeadset,
  FaRotateLeft,
  FaLock,
} from "react-icons/fa6";
const infoItems = [
  {
    icon: FaTruckFast,
    title: "Free Shipping",
    description: "Free shipping on all US order or order above $200",
  },
  {
    icon: FaHeadset,
    title: "24X7 Support",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: FaRotateLeft,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
  },
  {
    icon: FaLock,
    title: "Payment Secure",
    description: "Your payment is always secure and encrypted",
  },
];


const InfoCards = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border-2 border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="text-5xl mb-4 inline-block p-3 bg-green-50  rounded-full group-hover:scale-110 transition-transform">
               <item.icon className="text-4xl text-green-600 dark:text-green-500" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
