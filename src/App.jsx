import React, { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import SplashPage from './components/SplashPage'
import GlobalParticles from './components/GlobalParticles'

const Home = lazy(()=> import('./pages/Home'))
const Products = lazy(()=> import('./pages/Products'))
const ProductDetail = lazy(()=> import('./pages/ProductDetail'))
const Cart = lazy(()=> import('./pages/Cart'))
const Login = lazy(()=> import('./pages/Login'))
const Signup = lazy(()=> import('./pages/Signup'))
const Wishlist = lazy(()=> import('./pages/Wishlist'))
const NotFound = lazy(()=> import('./pages/NotFound'))

export default function App(){
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) return <SplashPage />

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalParticles />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
