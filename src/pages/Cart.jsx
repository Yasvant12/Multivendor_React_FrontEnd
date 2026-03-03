import React from 'react'
import { useCart, useCartActions } from '../context/CartContext'

export default function Cart() {
  const items = useCart() || []
  const { remove, updateQty, clear } = useCartActions() || {}

  const subtotal = items.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0)

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
              <button onClick={() => updateQty(it.id, Math.max(1, (it.qty || 1) - 1))} className="px-3 py-1 border rounded">-</button>
              <div>{it.qty || 1}</div>
              <button onClick={() => updateQty(it.id, (it.qty || 1) + 1)} className="px-3 py-1 border rounded">+</button>
              <button onClick={() => remove(it.id)} className="text-red-500 ml-4">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Subtotal</div>
          <div className="font-bold">${subtotal.toFixed(2)}</div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button onClick={() => clear()} className="px-4 py-2 bg-red-500 text-white rounded">Clear</button>
        </div>
      </div>
    </div>
  )
}
