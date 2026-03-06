
import React from 'react'
import { CartProvider } from './context/CartContext'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header/Header'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
              <Footer />
      </div>
    </CartProvider>
  )
}
