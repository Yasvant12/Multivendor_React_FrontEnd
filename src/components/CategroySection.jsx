import React from 'react'

export default function CategorySection() {
  const categories = [
    { id: 1, name: 'Fruits', icon: '🍎', count: '320 Items', discount: '30%', color: 'from-green-50 to-green-100' },
    { id: 2, name: 'Bakery', icon: '🥐', count: '65 Items', color: 'from-orange-50 to-orange-100' },
    { id: 3, name: 'Vegetables', icon: '🥕', count: '548 Items', discount: '15%', color: 'from-red-50 to-red-100' },
    { id: 4, name: 'Dairy & Milk', icon: '🥛', count: '48 Items', discount: '10%', color: 'from-blue-50 to-blue-100' },
    { id: 5, name: 'Snack & Spice', icon: '🍪', count: '89 Items', color: 'from-purple-50 to-purple-100' },
  ]

  return (
    <section className="container mx-auto px-4 py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-gradient-to-br ${category.color} dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer group border border-slate-200 dark:border-slate-600 relative overflow-hidden`}
          >
            {/* Icon */}
            <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-4xl shadow-md">
              {category.icon}
            </div>

            {/* Name */}
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{category.name}</h3>

            {/* Count */}
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{category.count}</p>

            {/* Discount Badge */}
            {category.discount && (
              <div className="absolute top-2 right-2 bg-red-500 dark:bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {category.discount}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
