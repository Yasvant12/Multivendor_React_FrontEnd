import React from "react";
import Cake from "../assets/cake.jpg";
import Food from "../assets/food.jpg";
import Juice from "../assets/juice.jpg";
import RedApple from "../assets/redApple.jpg";
import Pista from "../assets/pista.jpg";

const blogPosts = [
  {
    date: "June 30,2022",
    category: "Organic",
    title: "Marketing Guide: 5 Steps to Success to way.",
    image: RedApple
  },
  {
    date: "April 02,2022",
    category: "Fruits",
    title: "Best way to solve business deal issue in market.",
    image: Pista
  },
  {
    date: "Mar 09,2022",
    category: "Vegetables",
    title: "31 grocery customer service stats know in 2019.",
    image: Food
  },
  {
    date: "January 25,2022",
    category: "Fastfood",
    title: "Business ideas to grow your business traffic.",
    image: Juice,
  },
  {
    date: "December 10,2021",
    category: "Fruits",
    title: "Marketing Guide: 5 Steps way to Success.",
    image: Cake
  },
];

const BlogSection = () => {
  return (
    <div className="px-16 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Latest <span className="text-green-600">Blog</span>
          </h2>
          <p className="text-gray-500">We tackle interesting topics every day in 2023.</p>
        </div>
        <a href="#" className="text-sm text-gray-600 hover:text-green-600 font-medium flex items-center">
          All Blogs <span className="ml-1">»</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-gray-400 mt-3">{post.date} – {post.category}</p>
            <h3 className="text-md font-semibold text-gray-500 mt-1">{post.title}</h3>
            <a href="#" className="text-sm text-gray-600 mt-2 inline-flex items-center hover:text-green-600">
              Read More <span className="ml-1">»</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
