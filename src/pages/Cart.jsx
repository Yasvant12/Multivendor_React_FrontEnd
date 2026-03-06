import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectCartTotal, removeItem, increaseQty, decreaseQty, clearCart } from '../features/cart/cartSlice'

export default function Cart() {
  const items = useSelector(selectCartItems) || []
  const total = useSelector(selectCartTotal) || 0
  const dispatch = useDispatch()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.length === 0 && <div>Your cart is empty.</div>}
        {items.map((it) => (
          <div key={it.id} className="p-4 border rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-slate-500">${it.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => dispatch(decreaseQty(it.id))} className="px-3 py-1 border rounded">-</button>
              <div>{it.quantity}</div>
              <button onClick={() => dispatch(increaseQty(it.id))} className="px-3 py-1 border rounded">+</button>
              <button onClick={() => dispatch(removeItem(it.id))} className="text-red-500 ml-4">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Subtotal</div>
          <div className="font-bold">${total.toFixed(2)}</div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={() => dispatch(clearCart())} className="px-4 py-2 bg-red-500 text-white rounded">Clear</button>
        </div>
      </div>
    </div>
  )
}
