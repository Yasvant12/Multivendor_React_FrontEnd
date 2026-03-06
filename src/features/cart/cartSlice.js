import { createSlice } from '@reduxjs/toolkit'

const STORAGE_KEY = 'mv_cart_redux_v1'

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    // ignore
  }
  return { items: [] }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadInitial(),
  reducers: {
    addItem(state, action) {
      const item = action.payload
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        existing.quantity += item.quantity || 1
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    increaseQty(state, action) {
      const id = action.payload
      const it = state.items.find((i) => i.id === id)
      if (it) it.quantity += 1
    },
    decreaseQty(state, action) {
      const id = action.payload
      const it = state.items.find((i) => i.id === id)
      if (it) it.quantity = Math.max(1, it.quantity - 1)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((s, i) => s + i.quantity, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((s, i) => s + i.price * i.quantity, 0)

export default cartSlice.reducer
