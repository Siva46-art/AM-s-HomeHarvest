import React from 'react'

export default function WhyUs(){
  return (
    <section className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#1a2e1a] mb-4 tracking-tight">The Healthy Food Edge</h2>
        <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full shadow-sm"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Pure Ingredients", desc: "100% natural, no artificial fillers or hidden additives.", icon: "🍃" },
          { title: "Sustainably Sourced", desc: "Directly from farmers using regenerative agricultural practices.", icon: "🌍" },
          { title: "Nutrient Dense", desc: "Scientific formulation to ensure maximum bioavailability.", icon: "🧬" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-10 flex flex-col items-center text-center">
            <div className="text-5xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">{item.title}</h3>
            <p className="text-[#4b634b] leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
