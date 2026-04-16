import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useCartDispatch } from '../context/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p=>p.id === id)
  const [selectedVariant, setVariant] = useState(product?.variants?.[0] || {})
  const [qty, setQty] = useState(1)
  const dispatch = useCartDispatch()

  if (!product) return <div className="container py-8">Product not found</div>

  const addToCart = () => {
    dispatch({ type: 'ADD', payload: { id: product.id, name: product.name, price: selectedVariant.price, weight: selectedVariant.weight, qty } })
  }

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto glass-card p-8 md:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Column */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gray-50 overflow-hidden shadow-2xl border-4 border-white">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">🌿</div>
              )}
            </div>
            {/* Visual Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200/50 blur-3xl rounded-full -z-10"></div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(star => (
                   <span key={star} className="text-amber-400">★</span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#1a2e1a] mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black text-green-600">₹{selectedVariant.price}</span>
              <span className="text-gray-400 line-through text-sm">₹{Math.round(selectedVariant.price * 1.2)}</span>
              <span className="text-green-500 text-xs font-bold ml-2">20% OFF TODAY</span>
            </div>

            <p className="text-[#4b634b] leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="glass bg-white/50 p-6 rounded-2xl border border-white/40">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#4b634b] mb-3">Select Weight</label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map(v => (
                    <button 
                      key={v.weight}
                      onClick={() => setVariant(v)}
                      className={`px-4 py-2 rounded-xl font-bold transition-all ${selectedVariant.weight === v.weight ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-green-50'}`}
                    >
                      {v.weight}
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass bg-white/50 p-6 rounded-2xl border border-white/40">
                <label className="block text-xs font-bold uppercase tracking-widest text-[#4b634b] mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 rounded-lg bg-white hover:bg-green-50 flex items-center justify-center font-bold text-gray-600 shadow-sm transition-colors">-</button>
                  <span className="text-xl font-black text-[#1a2e1a] w-8 text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-10 h-10 rounded-lg bg-white hover:bg-green-50 flex items-center justify-center font-bold text-gray-600 shadow-sm transition-colors">+</button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={addToCart} className="flex-1 btn-primary py-4 text-lg">Add to Cart</button>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-lg font-bold text-[#1a2e1a] mb-4 flex items-center gap-2">
                <span>🌱</span> Pure Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map(i=> (
                  <span key={i} className="bg-green-50 px-3 py-1 rounded-lg text-sm font-medium text-green-700 border border-green-100">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 animate-fade-in">
        <h2 className="text-3xl font-black text-[#1a2e1a] mb-8">You May Also Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(p => (
              <ProductCard key={p.id} product={p} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
