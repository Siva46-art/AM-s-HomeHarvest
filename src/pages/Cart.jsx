import React from 'react'
import { useCart, useCartDispatch } from '../context/CartContext'

export default function Cart(){
  const { items } = useCart()
  const dispatch = useCartDispatch()

  const updateQty = (item, qty) => dispatch({ type: 'UPDATE', payload: { id: item.id, weight: item.weight, qty } })
  const remove = item => dispatch({ type: 'REMOVE', payload: { id: item.id, weight: item.weight } })

  const subtotal = items.reduce((s,i) => s + (i.price * i.qty), 0)

  const handleCheckout = () => {
    if (items.length === 0) return;

    let text = "Hello, I would like to place an order:\n\n";
    items.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (${item.weight}) x ${item.qty} - ₹${item.price * item.qty}\n`;
    });
    text += `\n*Subtotal: ₹${subtotal}*`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "918925123026"; // Adding country code 91 for India as an assumption for the 10-digit number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-4xl font-black text-gray-800 tracking-tight">Your Cart</h2>
          <p className="text-gray-500 text-sm mt-1">Review your selections for a healthier life.</p>
        </div>
        <div className="text-green-600 font-bold bg-green-50 px-4 py-1 rounded-full border border-green-100 italic">{items.length} items</div>
      </div>

      {items.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-500 text-lg">Your cart is feeling light! Add some superfoods to get started.</p>
          <button onClick={() => window.location.href='/products'} className="mt-6 btn-primary">Browse Products</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map(item=> (
              <div key={item.id + '-' + item.weight} className="glass-card p-6 flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-3xl shadow-inner">
                  🌿
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg">{item.name}</div>
                  <div className="text-xs font-bold text-green-600 uppercase tracking-widest">{item.weight}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 glass bg-white/40 p-1 rounded-xl border border-white/40">
                    <button onClick={() => updateQty(item, Math.max(1, item.qty - 1))} className="w-8 h-8 rounded-lg bg-white/60 hover:bg-white flex items-center justify-center font-bold text-gray-600">-</button>
                    <span className="font-black text-gray-800 w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item, item.qty + 1)} className="w-8 h-8 rounded-lg bg-white/60 hover:bg-white flex items-center justify-center font-bold text-gray-600">+</button>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <div className="text-xl font-black text-gray-800">₹{item.price * item.qty}</div>
                    <button onClick={()=>remove(item)} className="text-[10px] font-bold text-red-400 hover:text-red-500 uppercase tracking-widest transition-colors mt-1">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="font-black text-gray-800 text-xl mb-6">Order Summary</h3>
              <div className="space-y-3 pb-6 border-b border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold text-gray-800">₹{subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Calculated at checkout</span>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-black text-gray-800">Total Amount</span>
                  <span className="text-3xl font-black text-green-600 tracking-tight">₹{subtotal}</span>
                </div>
                <button onClick={handleCheckout} className="w-full btn-primary py-4 text-lg shadow-green-500/20">
                  Checkout via WhatsApp
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-4 leading-relaxed">
                  Final shipping charges will be added based on your delivery address during the WhatsApp confirmation.
                </p>
              </div>
            </div>
            
            <div className="glass bg-green-50/50 p-6 rounded-2xl border border-green-100 flex items-center gap-4">
              <div className="text-3xl">🛡️</div>
              <div className="text-xs text-green-800 font-medium leading-relaxed">
                Your health is our priority. Every product is freshly packed only after your order is confirmed.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
