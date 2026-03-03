import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { products as allProducts } from '../data/products'
import ProductCard from '../components/common/ProductCard'
import { filterProducts, sortProducts } from '../utils/filterUtils'

export default function CategoryPage() {
  const { slug } = useParams()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  const category = categories.find((c) => c.slug === slug)
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600">Category not found</h2>
        <p className="mt-2 text-slate-600">The category you requested does not exist.</p>
        <Link to="/" className="text-green-600 mt-4 inline-block font-semibold hover:underline">Go back home</Link>
      </div>
    )
  }

  const filters = useMemo(() => ({ categorySlug: category.name.toLowerCase(), keyword: search }), [category, search])
  const filtered = useMemo(() => filterProducts(allProducts, filters), [allProducts, filters])
  const sorted = useMemo(() => sort ? sortProducts(filtered, sort) : filtered, [filtered, sort])

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg opacity-90">{category.description}</p>
          <p className="mt-2 text-sm opacity-75">Showing {sorted.length} products</p>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in category..."
            className="flex-1 border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none bg-white"
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8 pb-20">
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sorted.map((p) => (
              <ProductCard key={p.id} product={{
                id: p.id,
                slug: p.slug,
                title: p.title,
                price: p.price,
                oldPrice: p.oldPrice,
                rating: Math.round(p.rating || 4),
                category: p.category,
                weight: p.weight,
                pack: p.quantity,
                image: p.image,
                label: p.badge,
              }} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
