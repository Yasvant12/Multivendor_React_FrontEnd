import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeItem } from '../../features/cart/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-bold text-sm">{item.title}</h4>
        <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(decreaseQty(item.id))} className="px-2">-</button>
        <span className="px-2">{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))} className="px-2">+</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500">Remove</button>
      </div>
    </div>
  )
}
