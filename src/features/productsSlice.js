import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Example async thunk (placeholder)
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  // In real app use services/api.js
  return [
    { id: 'p1', title: 'Sample Fashion Item', category: 'fashion' },
    { id: 'p2', title: 'Sample Grocery Item', category: 'groceries' },
  ]
})

const productsSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default productsSlice.reducer
