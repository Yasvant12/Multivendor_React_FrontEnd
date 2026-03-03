import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-12 py-8">
      <div className="container mx-auto px-4 text-sm text-slate-600">© {new Date().getFullYear()} GrabIt — Demo</div>
    </footer>
  )
}
