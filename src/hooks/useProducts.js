import { useQuery } from '@tanstack/react-query'
import productService from '../services/productService'

export function useProducts(category) {
  return useQuery(['products', category || 'all'], () => {
    if (category) return productService.fetchProductsByCategory(category)
    return productService.fetchAllProducts()
  })
}
