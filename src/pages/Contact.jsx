import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-4xl font-black text-[#1a2e1a] tracking-tight mb-4">Contact Info Removed</h2>
        <p className="text-[#4b634b]">This section has been removed as per your request.</p>
        <Link to="/" className="mt-8 btn-primary inline-block">Back to Home</Link>
      </div>
      </div>
    </div>
  )
}
