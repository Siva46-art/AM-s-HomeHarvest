import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const totalQty = items.reduce((s, i) => s + (i.qty || 1), 0)

  return (
    <header className="glass-header">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/40 dark:bg-white/10 flex items-center justify-center text-xl shadow-inner border border-white/20"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">HF</div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm md:text-lg text-[#1a2e1a] dark:text-white tracking-tight leading-tight">Healthy Food</div>
              <div className="text-[10px] font-medium text-green-600 uppercase tracking-widest hidden md:block">Pure Ingredients</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/products" className={({isActive})=> `font-bold tracking-wide transition-colors ${isActive? 'text-green-700 dark:text-green-400':'text-[#4b634b] dark:text-[#a9baae] hover:text-green-600'}`}>Products</NavLink>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/40 dark:bg-white/10 flex items-center justify-center text-lg md:text-xl shadow-inner border border-white/20 hover:scale-110 transition-all"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <Link to="/cart" className="relative group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/40 dark:bg-white/10 group-hover:bg-white/60 dark:group-hover:bg-white/20 flex items-center justify-center text-lg md:text-xl shadow-inner transition-colors border border-white/20">🛒</div>
            {totalQty > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-subtle">
                {totalQty}
              </span>
            )}
          </Link>

          <a 
            href="https://github.com/Siva46-art/AM-s-HomeHarvest" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 items-center justify-center text-lg md:text-xl shadow-inner transition-all border border-white/20 hover:scale-110 active:scale-95"
            title="View Source on GitHub"
          >
            <svg className="w-5 h-5 fill-current text-gray-700 dark:text-white" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute left-0 top-0 bottom-0 w-3/4 bg-white/90 dark:bg-black/90 backdrop-blur-2xl p-8 shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col gap-8">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white">HF</div>
              <div className="font-bold text-[#1a2e1a] dark:text-white">Healthy Food</div>
            </Link>
            <nav className="flex flex-col gap-6">
              <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className="text-xl font-black text-gray-800 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">Products</NavLink>
              <NavLink to="/wishlist" onClick={() => setIsMenuOpen(false)} className="text-xl font-black text-gray-800 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">Wishlist</NavLink>
              <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className="text-xl font-black text-gray-800 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">My Cart ({totalQty})</NavLink>
            </nav>
            {user ? (
               <button onClick={logout} className="text-left text-red-600 font-bold border-t border-gray-100 dark:border-white/10 pt-8">SIGN OUT</button>
            ) : (
               <Link to="/login" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center">SIGN IN</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
