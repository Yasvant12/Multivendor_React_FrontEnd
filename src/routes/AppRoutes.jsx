import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Fashion from '../pages/Fashion'
import Groceries from '../pages/Groceries'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import CategoryPage from '../pages/CategoryPage'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import Offers from '../pages/Offers'
import CartPage from '../pages/Cart'
import CheckoutPage from '../pages/Checkout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/product/:productSlug" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
