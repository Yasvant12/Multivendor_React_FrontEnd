import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount } from '../../features/cart/cartSlice'

export default function Navbar() {
  const count = useSelector(selectCartCount)

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-green-600">Grabit</Link>
        <div className="flex items-center gap-4">
          <Link to="/category" className="text-sm text-gray-600">Shop</Link>
          <Link to="/cart" className="relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1 rounded-full">{count}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
