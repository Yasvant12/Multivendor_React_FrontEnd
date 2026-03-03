import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ id, image, tag, date, title, excerpt }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
        {tag && (
          <span className="absolute top-3 left-3 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
        )}
        {date && (
          <div className="absolute top-3 right-3 bg-white text-sm text-slate-700 font-semibold px-3 py-2 rounded-full shadow">{date}</div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-slate-600 mb-4">{excerpt}</p>
        <Link to={`/blog/${id || ''}`} className="text-green-600 font-medium inline-flex items-center gap-2">Read Full Article <span>→</span></Link>
      </div>
    </article>
  )
}
