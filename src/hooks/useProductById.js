import { useQuery } from '@tanstack/react-query'
import productService from '../services/productService'

export function useProductById(id) {
  return useQuery(['product', id], () => productService.fetchProductById(id), {
    enabled: !!id,
  })
}
