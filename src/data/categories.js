import slugify from '../utils/slugify'

export const categories = [
  { id: 'veg', name: 'Vegetables', description: 'Fresh vegetables from local farms' },
  { id: 'fruit', name: 'Fruits', description: 'Seasonal and exotic fruits' },
  { id: 'dairy', name: 'Dairy & Bakery', description: 'Milk, cheese and bakery items' },
  { id: 'snacks', name: 'Snacks & Beverages', description: 'Chips, drinks and quick bites' }
].map((c) => ({ ...c, slug: slugify(c.name) }))

export default categories
