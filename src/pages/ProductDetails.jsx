import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCartActions } from '../context/CartContext'
import { FaHeart, FaCartShopping, FaStar } from 'react-icons/fa6'

export default function ProductDetails() {
  const { productSlug } = useParams()
  const product = products.find((p) => p.slug === productSlug)
  const { add } = useCartActions() || {}
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600">Product not found</h2>
        <p className="mt-2 text-slate-600">The product you're looking for doesn't exist.</p>
        <Link to="/" className="text-green-600 mt-4 inline-block font-semibold hover:underline">← Go back home</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (add) {
      add({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty,
      })
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    }
  }

  const discount = product.oldPrice > product.price ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl flex items-center justify-center min-h-96">
          <img src={product.image} alt={product.title} className="max-h-96 max-w-full object-contain" />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">IN STOCK</span>
              {discount > 0 && <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold">{discount}% OFF</span>}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.title}</h1>
            <p className="text-slate-600 text-sm mb-1">Category: {product.category}</p>
            {product.weight && <p className="text-slate-600 text-sm mb-4">Weight: {product.weight}</p>}
            {product.quantity && <p className="text-slate-600 text-sm mb-4">Quantity: {product.quantity}</p>}

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} className={i < product.rating ? 'fill-yellow-400' : 'fill-slate-300'} />
                ))}
              </div>
              <span className="text-sm text-slate-600">({product.rating} / 5)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                {product.oldPrice > product.price && (
                  <span className="text-lg text-slate-500 line-through">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="font-semibold text-slate-700">Quantity:</label>
              <div className="flex items-center border-2 border-slate-200 rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 text-slate-700 font-bold text-lg">−</button>
                <input value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center border-l border-r border-slate-200 py-2" />
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 text-slate-700 font-bold text-lg">+</button>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={handleAddToCart} className={`flex-1 flex items-center justify-center space-x-2 font-bold py-3 px-6 rounded-lg transition-all ${
                added ? 'bg-green-600 text-white' : 'bg-green-600 text-white hover:bg-green-700'
              }`}>
                <FaCartShopping size={20} />
                <span>{added ? '✓ Added to Cart' : 'Add to Cart'}</span>
              </button>
              <button className="flex items-center justify-center bg-red-50 text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-100 transition-colors">
                <FaHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <p className="text-slate-500">View more from {product.category}</p>
      </div>
    </div>
  )
}
