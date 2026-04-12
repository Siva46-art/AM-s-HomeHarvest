import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark')

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center font-bold text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">HF</div>
          <div>
            <div className="font-bold text-lg text-[#1a2e1a] dark:text-white tracking-tight">Healthy Food</div>
            <div className="text-xs font-medium text-green-600 uppercase tracking-widest">Pure Ingredients</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/products" className={({isActive})=> `font-medium transition-colors ${isActive? 'text-green-700 dark:text-green-400':'text-[#4b634b] dark:text-[#a9baae] hover:text-green-600'}`}>Products</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-11 h-11 rounded-xl bg-white/40 dark:bg-white/10 flex items-center justify-center text-xl shadow-inner border border-white/20 hover:scale-110 transition-all"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div className="flex items-center gap-4">
              <div className="text-sm font-semibold text-green-800 dark:text-green-200 bg-green-50 dark:bg-green-900/40 px-3 py-1 rounded-full border border-green-100 dark:border-green-800">Hi, {user.name}</div>
              <button onClick={logout} className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">Sign out</button>
            </div>
          ) : (
            <Link to="/login" className="glass-button text-sm">Sign in</Link>
          )}


          <Link to="/cart" className="relative group">
            <div className="w-11 h-11 rounded-xl bg-white/40 dark:bg-white/10 group-hover:bg-white/60 dark:group-hover:bg-white/20 flex items-center justify-center text-xl shadow-inner transition-colors border border-white/20">🛒</div>
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg border-2 border-white animate-bounce-subtle">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
