import React from 'react'
import Header from '../components/Header/Header'
import BlogCard from '../components/Blog/BlogCard'
import BlogSidebar from '../components/Blog/BlogSidebar'

const samplePosts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80',
    tag: 'Nutrition',
    date: '15 MAY',
    title: '5 Seasonal Greens to Try This Spring',
    excerpt:
      "Discover the vibrant flavors and nutrient-dense profiles of this season's freshest pickings. From wild ramp to delicate pea shoots, here's how to prep...",
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80',
    tag: 'Recipes',
    date: '12 MAY',
    title: 'The Secret to Perfect Roasted Carrots',
    excerpt: 'Master the art of caramelization. Our step-by-step guide ensures perfectly tender, sweet, and slightly charred carrots every time you cook.',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab5a1b7a6?w=1200&q=80',
    tag: 'Farm News',
    date: '08 MAY',
    title: 'Meet Our Local Organic Berry Farmer',
    excerpt: "We visited Sarah's Orchard to see how this year's strawberry crop is shaping up. Spoiler: It's going to be a very sweet summer for everyone.",
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1542444459-db5d3d1f3d9c?w=1200&q=80',
    tag: 'Sustainability',
    date: '05 MAY',
    title: 'Zero–Waste Grocery Shopping 101',
    excerpt: 'Reduce your footprint without complicating your life. 10 simple swaps you can make today to make your kitchen more eco-friendly.',
  },
]

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <BlogSidebar
              recent={samplePosts.slice(0, 2).map((p) => ({ id: p.id, thumb: p.image, title: p.title, date: 'MAY ' + p.date.split(' ')[0] }))}
            />
          </div>

          <main className="md:flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest from GrabIt</h2>
              <div className="text-sm text-slate-500">Sort by: <select className="ml-2 border rounded px-2 py-1"><option>Newest First</option></select></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {samplePosts.map((p) => (
                <BlogCard key={p.id} {...p} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center space-x-2">
                <button className="border rounded-full w-8 h-8">‹</button>
                <button className="bg-green-600 text-white rounded-full w-8 h-8">1</button>
                <button className="border rounded-full w-8 h-8">2</button>
                <button className="border rounded-full w-8 h-8">3</button>
                <button className="border rounded-full w-8 h-8">›</button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
