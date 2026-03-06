import React from "react";
import Cake from "../../assets/cake.jpg";
import Food from "../../assets/food.jpg";
import Juice from "../../assets/juice.jpg";
import RedApple from "../../assets/redApple.jpg";
import Pista from "../../assets/pista.jpg";

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
    <section className="container mx-auto py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Blog</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">We tackle interesting topics every day in 2023.</p>
        </div>
        <a href="#" className="text-sm font-bold text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 flex items-center whitespace-nowrap">
          View All Blogs <span className="ml-2">→</span>
        </a>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl mb-4 h-48 bg-slate-100 dark:bg-slate-800">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content */}
            <div>
              {/* Date & Category */}
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {post.date} • {post.category}
              </p>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                {post.title}
              </h3>

              {/* Read More Link */}
              <a href="#" className="text-sm font-bold text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 inline-flex items-center">
                Read More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
