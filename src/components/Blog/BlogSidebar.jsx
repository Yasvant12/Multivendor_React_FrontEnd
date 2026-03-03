import React from 'react'

function SearchBox() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
      <label className="block text-sm font-medium text-slate-600 mb-2">Search Blog</label>
      <div className="flex items-center gap-2">
        <input placeholder="Articles, tips..." className="w-full border rounded px-3 py-2 focus:outline-none" />
        <button className="bg-green-600 text-white px-3 py-2 rounded">🔍</button>
      </div>
    </div>
  )
}

function Categories() {
  const cats = ['Healthy Eating', 'Recipes', 'Farm News', 'Sustainability', 'Grocery Tips']
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
      <h4 className="font-bold mb-3">Categories</h4>
      <ul className="space-y-3 text-sm text-slate-600">
        {cats.map((c) => (
          <li key={c} className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-100" />
            <button className="text-left w-full hover:text-green-600">{c}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RecentPosts({ posts = [] }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h4 className="font-bold mb-3">Recent Posts</h4>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.id} className="flex items-center gap-3">
            <img src={p.thumb} alt="thumb" className="w-12 h-12 object-cover rounded" />
            <div className="text-sm">
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-slate-500">{p.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BlogSidebar({ recent = [] }) {
  return (
    <aside>
      <SearchBox />
      <Categories />
      <div className="mt-4">
        <RecentPosts posts={recent} />
      </div>
    </aside>
  )
}
