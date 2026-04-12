import React from 'react'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Fitness Coach",
    content: "The quality of organic seeds here is unmatched. My energy levels have improved significantly!",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "Marathon Runner",
    content: "Scientific formulation that actually works. The protein mixes are clean and easy on the stomach.",
    avatar: "https://i.pravatar.cc/150?u=arun"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Nutritionist",
    content: "I always recommend this store to my clients. Pure ingredients and transparent sourcing.",
    avatar: "https://i.pravatar.cc/150?u=sneha"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1a2e1a] mb-4 tracking-tight">Voices of Health</h2>
        <p className="text-[#4b634b]">Join thousands who have transformed their lives.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div key={t.id} className="glass-card p-8 flex flex-col">
            <div className="flex items-center mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/50 shadow-sm" />
              <div className="ml-4">
                <h4 className="font-bold text-[#1a2e1a]">{t.name}</h4>
                <p className="text-xs text-green-600 font-medium uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
            <p className="text-[#4b634b] italic leading-relaxed">"{t.content}"</p>
            <div className="mt-6 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
