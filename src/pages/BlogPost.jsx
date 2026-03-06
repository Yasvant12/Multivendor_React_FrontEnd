import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/layout/Header'

export default function BlogPost() {
  const { id } = useParams()

  // In a real app we'd fetch the post by id
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Blog Post</h1>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Post ID: {id}</h2>
          <p>This is a placeholder for the blog post. Work in progress.</p>
        </div>
      </div>
    </div>
  )
}
