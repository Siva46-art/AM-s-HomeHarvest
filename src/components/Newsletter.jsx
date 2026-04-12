import React from 'react'

export default function Newsletter() {
  return (
    <section className="my-20">
      <div className="glass-card p-12 md:p-20 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a2e1a] mb-6 leading-tight">
            Join the <span className="text-green-600">Health Club</span>
          </h2>
          <p className="text-[#4b634b] text-lg mb-10 leading-relaxed">
            Get exclusive weekly nutritional guides, early access to new plant-based products, and limited wellness offers.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full bg-white/50 backdrop-blur-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all font-medium"
              required
            />
            <button 
              type="submit" 
              className="btn-primary whitespace-nowrap"
            >
              Sign Up Now
            </button>
          </form>
          
          <p className="mt-6 text-xs text-[#4b634b]/60">
            By subscribing, you agree to our Privacy Policy. No spam, only health.
          </p>
        </div>
      </div>
    </section>
  )
}
