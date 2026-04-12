import React from 'react'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  return (
    <div className="container py-20 text-center">
      <div className="max-w-2xl mx-auto glass-card p-12">
        <div className="text-6xl mb-6">💝</div>
        <h2 className="text-4xl font-black text-[#1a2e1a] mb-4 tracking-tight">Your Wishlist is Empty</h2>
        <p className="text-[#4b634b] mb-8 leading-relaxed">
          Save your favorite superfoods here to easily find them later. 
          Start exploring our collection to fill your heart!
        </p>
        <Link to="/products" className="btn-primary inline-block">
          Explore Products
        </Link>
      </div>
    </div>
  )
}
