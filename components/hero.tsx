"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/professional-printing-press-machinery-digital-sign.jpg",
    "/professional-printing-equipment-digital-press.jpg",
    "/large-format-printing-signage-production.jpg",
    "/dtf-heat-press-apparel-printing-technology.jpg",
    "/cnc-laser-cutting-machine-industrial.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Professional printing slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        {/* Radial Gradient Accent */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Animated Main Content */}
          <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center justify-center">
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300">
                <span className="text-sm sm:text-base font-semibold text-white/90">✨ Premium Printing Solutions</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance tracking-tight">
              Bring Your Vision to Life
            </h1>

            {/* Decorative Line */}
            <div className="flex justify-center">
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8">
              <div className="flex justify-center animate-bounce-gentle">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
                  <svg
                    className="w-5 h-5 text-white/60 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators - Bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  index === currentImageIndex
                    ? "bg-gradient-to-r from-primary to-secondary w-8 h-2"
                    : "bg-white/40 hover:bg-white/60 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
