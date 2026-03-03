import React, { createContext, useContext, useEffect, useReducer, useCallback } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const STORAGE_KEY = 'mv_cart_v1'

function cartReducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload || []
    case 'ADD': {
      const existing = state.find((i) => i.id === action.payload.id)
      if (existing) {
        return state.map((i) => (i.id === action.payload.id ? { ...i, qty: i.qty + action.payload.qty } : i))
      }
      return [...state, { ...action.payload }]
    }
    case 'REMOVE':
      return state.filter((i) => i.id !== action.payload)
    case 'UPDATE_QTY':
      return state.map((i) => (i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i))
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: 'HYDRATE', payload: JSON.parse(raw) })
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      // ignore
    }
  }, [state])

  const add = useCallback((item) => dispatch({ type: 'ADD', payload: item }), [])
  const remove = useCallback((id) => dispatch({ type: 'REMOVE', payload: id }), [])
  const updateQty = useCallback((id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } }), [])
  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  return (
    <CartDispatchContext.Provider value={{ add, remove, updateQty, clear }}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export function useCart() {
  return useContext(CartStateContext)
}

export function useCartActions() {
  return useContext(CartDispatchContext)
}
