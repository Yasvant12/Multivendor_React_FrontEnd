// Pure utilities for filtering and sorting products
export function filterProducts(products, filters = {}) {
  const { categorySlug, priceRange, ratingMin, inStock, keyword } = filters

  return products.filter((p) => {
    // Category: match category slug or name
    if (categorySlug) {
      const catMatch = p.category && p.category.toLowerCase().includes(categorySlug.replace(/-/g, ' '))
      if (!catMatch) return false
    }

    // Price
    if (priceRange) {
      const [min = 0, max = Infinity] = priceRange
      if (p.price < min || p.price > max) return false
    }

    // Rating
    if (ratingMin) {
      if ((p.rating || 0) < ratingMin) return false
    }

    // Stock
    if (typeof inStock === 'boolean') {
      if (p.inStock !== inStock) return false
    }

    // Keyword
    if (keyword) {
      const q = keyword.toLowerCase()
      if (!p.title.toLowerCase().includes(q) && !(p.category || '').toLowerCase().includes(q)) return false
    }

    return true
  })
}

export function sortProducts(products, sortKey) {
  const arr = [...products]
  switch (sortKey) {
    case 'price-low-high':
      return arr.sort((a, b) => a.price - b.price)
    case 'price-high-low':
      return arr.sort((a, b) => b.price - a.price)
    case 'newest':
      return arr.sort((a, b) => b.createdAt - a.createdAt)
    case 'popular':
      return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    default:
      return arr
  }
}

export default { filterProducts, sortProducts }
