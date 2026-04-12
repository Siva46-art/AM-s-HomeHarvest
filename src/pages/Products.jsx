import React, { useMemo, useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

export default function Products(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const category = searchParams.get('category') || ''

  const filtered = useMemo(()=>{
    return productsData.filter(p=>{
      if (category && p.category !== category) return false
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [category, query])

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-[#1a2e1a] tracking-tight">Our Collection</h2>
          {category && (
            <div className="mt-2 inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-widest border border-green-100">
              Category: {category}
            </div>
          )}
        </div>
        <div className="relative group max-w-md w-full">
          <input 
            value={query} 
            onChange={e=>setQuery(e.target.value)} 
            placeholder="Search our superfoods..." 
            className="w-full glass-card bg-white/50 px-6 py-4 outline-none focus:bg-white transition-all font-medium pr-12 text-[#1a2e1a]" 
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl group-hover:scale-110 transition-transform cursor-pointer">🔍</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
