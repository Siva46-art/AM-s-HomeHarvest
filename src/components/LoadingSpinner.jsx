import React from 'react'

export default function LoadingSpinner(){
  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-b-green-400 blur-sm animate-pulse"></div>
      </div>
      <div className="text-sm font-bold text-green-700 tracking-widest uppercase animate-pulse">Nourishing...</div>
    </div>
  )
}
