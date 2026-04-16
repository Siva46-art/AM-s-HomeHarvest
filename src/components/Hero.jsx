import React from 'react'

export default function Hero(){
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/healthy_food_hero_1776325159731.png" 
          alt="Healthy Foods" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80"></div>
      </div>

      <div className="relative z-10 container">
        <div className="max-w-2xl glass-card p-8 md:p-12 animate-float shadow-green-900/5">
          <h1 className="text-4xl md:text-6xl font-black text-[#1a2e1a] dark:text-white mb-6 leading-tight">
            Nourish Your Body <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-400 dark:to-green-200">
              Transform Your Life
            </span>
          </h1>
          <p className="text-lg text-[#4b634b] dark:text-[#a9baae] mb-8 leading-relaxed max-w-lg">
            Discover our curated selection of organic, high-protein, and nutrient-dense foods designed to fuel your peak performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Shop Collection</button>
            <button className="glass-button">Join the Community</button>
          </div>
        </div>
      </div>
    </section>
  )
}
