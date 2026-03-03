import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../../data/categories'
// import { FaCart } from 'react-icons/fa6'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const cart = useCart() || []
  const cartCount = cart.length

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-green-600 hover:text-green-700 transition-colors">GrabIt</Link>
        <nav className="flex items-center space-x-6">
          {categories.map((c) => (
            <NavLink key={c.id} to={`/category/${c.slug}`} className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-700 hover:text-green-600'}`}>
              {c.name}
            </NavLink>
          ))}
          <NavLink to="/blog" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-slate-700 hover:text-green-600'}`}>
            Blog
          </NavLink>
        </nav>
        <Link to="/cart" className="relative flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
          {/* <FaCart size={24} /> */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
