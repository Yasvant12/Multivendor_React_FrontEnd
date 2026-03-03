import React, { useState } from 'react'
import { useCart, useCartActions } from '../context/CartContext'
// import { FaCheckCircle } from 'react-icons/fa6'

export default function Checkout() {
  const items = useCart() || []
  const { clear } = useCartActions() || {}
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal: '',
    payment: 'card',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0)
  const shipping = subtotal > 50 ? 0 : 5
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.fullName && formData.email && formData.address && formData.city) {
      setSubmitted(true)
      setTimeout(() => {
        if (clear) clear()
        window.location.href = '/'
      }, 2000)
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        {/* <FaCheckCircle size={80} className="text-green-600 mx-auto mb-4" /> */}
        <h2 className="text-3xl font-bold text-green-600 mb-2">Order Placed Successfully!</h2>
        <p className="text-slate-600 mb-4">Thank you for your order. Redirecting you back home...</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-600">Your cart is empty</h2>
        <p className="text-slate-500 mt-2">Add items before checkout</p>
      </div>
    )
  }

  return (
    <>
      <div className="bg-green-50 py-6 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Secure Checkout</h1>
          <p className="text-slate-600 mt-2">Complete your order details below</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-slate-200">
              <h2 className="text-xl font-bold mb-4">Billing Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
                <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} required className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
                <input type="text" name="postal" placeholder="Postal Code" value={formData.postal} onChange={handleChange} className="border-2 border-slate-200 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none" />
              </div>

              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <div className="space-y-3 mb-6">
                {['card', 'upi', 'cod'].map((method) => (
                  <label key={method} className="flex items-center p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-green-500 transition-colors" style={{ borderColor: formData.payment === method ? '#059669' : '#e2e8f0' }}>
                    <input type="radio" name="payment" value={method} checked={formData.payment === method} onChange={handleChange} className="w-4 h-4" />
                    <span className="ml-3 font-semibold text-slate-700">
                      {method === 'card' && 'Credit/Debit Card'}
                      {method === 'upi' && 'UPI (PhonePe, Google Pay)'}
                      {method === 'cod' && 'Cash on Delivery'}
                    </span>
                  </label>
                ))}
              </div>

              <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">Place Order</button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 h-fit sticky top-20">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-slate-500">x{item.qty || 1}</p>
                  </div>
                  <p className="font-semibold">${((item.price || 0) * (item.qty || 1)).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">{shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-bold text-green-600">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
