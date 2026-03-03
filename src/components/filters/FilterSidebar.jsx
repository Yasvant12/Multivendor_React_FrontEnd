import React from 'react'

export default function FilterSidebar({ children }) {
  return (
    <aside className="hidden md:block w-64 pr-6">
      <div className="p-4 border rounded">{children}</div>
    </aside>
  )
}
