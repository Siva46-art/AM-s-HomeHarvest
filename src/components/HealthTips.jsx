import React from 'react'

const tips = [
  {
    id: 1,
    title: "The Power of Superfoods",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Morning Detox Rituals",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=400",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "Plant-Based Protein Guide",
    category: "Diet",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400",
    readTime: "7 min read"
  }
]

export default function HealthTips() {
  return (
    <section className="py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a2e1a] mb-2 tracking-tight">Health & Wellness</h2>
          <p className="text-[#4b634b]">Expert insights into a healthier lifestyle.</p>
        </div>
        <button className="text-green-600 font-bold hover:underline hidden sm:block">View Blog</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map(tip => (
          <div key={tip.id} className="glass-card group cursor-pointer overflow-hidden">
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-green-700 uppercase tracking-widest">
                  {tip.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1a2e1a] mb-3 group-hover:text-green-700 transition-colors">
                {tip.title}
              </h3>
              <div className="flex items-center text-[#4b634b] text-sm font-medium">
                <span className="mr-3">🕒 {tip.readTime}</span>
                <span className="text-green-600 group-hover:translate-x-1 transition-transform">Read More →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
