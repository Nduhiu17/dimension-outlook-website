"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const phoneNumber = "+254722117264"
  const message = "Hello! I'm interested in learning more about your printing and signage services."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>

      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 text-white shadow-2xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated Background Shine */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer"></div>

        {/* Icon */}
        <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 group-hover:scale-125 transition-transform duration-300" />

        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
      </button>

      {/* Tooltip on Hover */}
      <div className="absolute bottom-20 right-0 sm:bottom-24 sm:right-0 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
        <div className="absolute top-full right-6 w-2 h-2 bg-slate-900 rotate-45"></div>
      </div>
    </div>
  )
}
