import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'

export default function Fashion() {
  const [items, setItems] = useState([])

  useEffect(() => {
    // sample items
    setItems([
      { id: 'f1', title: 'Red Dress', price: 49 },
      { id: 'f2', title: 'Blue Jacket', price: 89 },
    ])
  }, [])

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Fashion</h1>
        {items.length === 0 ? (
          <div>Work in progress</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.id} className="border rounded p-4">
                <div className="h-40 bg-gray-100 mb-4" />
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-green-600 font-bold">${it.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
