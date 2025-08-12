import React from "react";
import {
  CarOutlined,
  CustomerServiceOutlined,
  PercentageOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const infoItems = [
  {
    icon: <CarOutlined className="text-4xl text-green-600" />,
    title: "Free Shipping",
    description: "Free shipping on all US order or order above $200",
  },
  {
    icon: <CustomerServiceOutlined className="text-4xl text-green-600" />,
    title: "24X7 Support",
    description: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: <PercentageOutlined className="text-4xl text-green-600" />,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
  },
  {
    icon: <DollarCircleOutlined className="text-4xl text-green-600" />,
    title: "Payment Secure",
    description: "Contact us 24 hours a day, 7 days a week",
  },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 px-16 py-12 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="mb-4 text-green-300">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-500 mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
