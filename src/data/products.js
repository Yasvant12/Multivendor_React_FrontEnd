import slugify from '../utils/slugify'
import {
  vegetableData as vegs,
  fruitData as fruits,
} from '../utils/productData'

// Normalize and add slug + createdAt
const normalize = (arr) =>
  arr.map((p, i) => ({
    id: `${p.title.replace(/\s+/g, '-').toLowerCase()}-${i}`,
    title: p.title,
    category: p.category,
    price: p.price,
    oldPrice: p.oldPrice || p.price,
    rating: p.rating || 4,
    weight: p.weight || null,
    quantity: p.quantity || null,
    badge: p.badge || null,
    image: p.image,
    inStock: true,
    createdAt: Date.now() - Math.floor(Math.random() * 1000000000),
  }))

export const products = [...normalize(vegs), ...normalize(fruits)].map((p) => ({
  ...p,
  slug: slugify(p.title),
}))

export default products
