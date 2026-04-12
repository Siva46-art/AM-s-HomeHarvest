import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  { key: 'Flour', label: 'Flour' },
  { key: 'Health Mix', label: 'Health Mix' },
  { key: 'Powders', label: 'Powders' }
]

export default function CategoryList(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {categories.map((c, idx) => (
        <Link 
          key={c.key} 
          to={`/products?category=${encodeURIComponent(c.key)}`} 
          className="glass-card p-8 text-center group cursor-pointer"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            {['🌾', '🥣', '🧪'][idx] || '📦'}
          </div>
          <div className="font-bold text-xl text-[#1a2e1a]">{c.label}</div>
          <div className="text-xs font-semibold text-green-600 uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Explore Collection</div>
        </Link>
      ))}
    </div>
  )
}
