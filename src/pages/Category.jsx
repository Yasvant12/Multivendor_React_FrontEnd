import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import { vegetableData, fruitData } from '../utils/productData'

export default function Category() {
  const { slug } = useParams()

  let products = []
  let title = ''

  if (slug === 'vegetables') {
    products = vegetableData
    title = 'Vegetables'
  } else if (slug === 'fruits') {
    products = fruitData
    title = 'Fruits'
  } else if (slug === 'dairy') {
    products = []
    title = 'Dairy & Bakery'
  } else if (slug === 'snacks') {
    products = [...fruitData].slice(0, 8)
    title = 'Snacks & Beverages'
  } else {
    products = [...vegetableData, ...fruitData]
    title = 'All Products'
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500 mt-1">Browse items in the {title} category.</p>
        </div>
        <div>
          <Link to="/" className="text-sm text-green-600 font-semibold">Home</Link>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center text-slate-500">No products available for this category yet.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <ProductCard key={idx} product={{
              title: p.title,
              price: p.price,
              oldPrice: p.oldPrice || p.price,
              rating: Math.round(p.rating || 4),
              category: p.category,
              weight: p.weight,
              pack: p.quantity,
              image: p.image,
              label: p.badge || p.label
            }} />
          ))}
        </div>
      )}
    </div>
  )
}
