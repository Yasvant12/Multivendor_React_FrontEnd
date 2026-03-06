import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import productsReducer from '../features/productsSlice'
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// persist cart to localStorage
store.subscribe(() => {
  try {
    const state = store.getState()
    const raw = JSON.stringify(state.cart)
    localStorage.setItem('mv_cart_redux_v1', raw)
  } catch (e) {
    // ignore
  }
})

setupListeners(store.dispatch)

export default store
