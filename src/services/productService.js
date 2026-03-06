// Simulated product service using a local dataset

const PLACEHOLDER = 'https://via.placeholder.com/400x400?text=Product'
const PRODUCTS = [
  { id: '1', title: 'iPhone 15', price: 799, category: 'Electronics', image: PLACEHOLDER, description: 'Latest Apple smartphone', rating: 4.5, oldPrice: 899 },
  { id: '2', title: 'Air Jordan Sneakers', price: 199, category: 'Shoes', image: PLACEHOLDER, description: 'Comfortable running shoes', rating: 4, oldPrice: 229 },
  { id: '3', title: 'Denim Jacket', price: 89, category: 'Fashion', image: PLACEHOLDER, description: 'Stylish denim jacket', rating: 4.2, oldPrice: 109 },
  { id: '4', title: 'Leather Wallet', price: 39, category: 'Accessories', image: PLACEHOLDER, description: 'Premium leather wallet', rating: 4.1, oldPrice: 49 },
  { id: '5', title: 'Running Shoes', price: 129, category: 'Shoes', image: PLACEHOLDER, description: 'Lightweight running shoes', rating: 4.3, oldPrice: 149 },
]

function simulateDelay(result, delay = 400) {
  return new Promise((resolve) => setTimeout(() => resolve(result), delay))
}

export const fetchAllProducts = async () => {
  return simulateDelay(PRODUCTS)
}

export const fetchProductsByCategory = async (category) => {
  if (!category) return simulateDelay(PRODUCTS)
  return simulateDelay(PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()))
}

export const fetchProductById = async (id) => {
  const found = PRODUCTS.find((p) => p.id === String(id))
  if (!found) throw new Error('Product not found')
  return simulateDelay(found)
}

export default { fetchAllProducts, fetchProductsByCategory, fetchProductById }
