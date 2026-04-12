import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import WhyUs from '../components/WhyUs'
import ProductCard from '../components/ProductCard'
import products from '../data/products'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FAQ from '../components/FAQ'
import HealthTips from '../components/HealthTips'

export default function Home(){
  const featured = products.slice(0,4)
  return (
    <>
      <Hero />
      <div className="container py-8">
        <section className="mt-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-[#1a2e1a] tracking-tight">Featured Selections</h2>
              <p className="text-[#4b634b] text-sm mt-1">Our most loved nutritional powerhouse products.</p>
            </div>
            <Link to="/products" className="text-green-600 font-bold hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <CategoryList />

        <WhyUs />

        <HealthTips />

        <Testimonials />

        <Newsletter />

        <FAQ />
      </div>
    </>
  )
}
