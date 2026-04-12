import React, { useState } from 'react'

const faqs = [
  {
    question: "Are your products 100% organic?",
    answer: "Yes, every product in our catalog is certified organic by leading global health organizations. We source directly from farmers we trust."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within the continental US and major European regions. We are working hard to expand our reach globally."
  },
  {
    question: "What is your return policy?",
    answer: "If you're not satisfied with the quality of our food items, we offer a 30-day money-back guarantee, no questions asked."
  },
  {
    question: "How do you ensure sustainable packaging?",
    answer: "We use 100% compostable and recyclable packaging materials to minimize our environmental footprint."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#1a2e1a] mb-4 tracking-tight">Got Questions?</h2>
        <p className="text-[#4b634b]">We have answers to everything you need to know.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="font-bold text-[#1a2e1a] text-lg">{faq.question}</span>
              <span className={`transform transition-transform duration-300 text-2xl ${open === i ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>
            <div className={`px-6 transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-[#4b634b] leading-relaxed border-t border-white/20 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
