import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }){
  return (
    <div className="glass-card p-6 flex flex-col group h-full">
      <Link to={`/products/${product.id}`} className="block flex-1 flex flex-col">
        <div className="aspect-square w-full rounded-2xl bg-gray-50 dark:bg-gray-900/50 mb-6 overflow-hidden relative group-hover:shadow-2xl transition-all duration-500">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl">🌿</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-green-50 dark:bg-green-900/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-green-700 dark:text-green-300 border border-green-100 dark:border-green-800">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(star => (
                <span key={star} className="text-amber-400 text-xs">★</span>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1a2e1a] dark:text-white group-hover:text-green-600 transition-colors mb-2">{product.name}</h3>
          <p className="text-[#4b634b] dark:text-[#a9baae] text-xs line-clamp-2 leading-relaxed mb-4">{product.description}</p>

          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-tighter">Starting from</div>
              <div className="text-2xl font-black text-green-600 dark:text-green-400 tracking-tight">₹{product.variants[0].price}</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a8c2a] to-[#7ab83c] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform text-xl">
              →
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
