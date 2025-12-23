"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/professional-printing-press-machinery-digital-sign.jpg",
    "/amco.jpg",
    "/professional-printing-equipment-digital-press.jpg",
    "/large-format-printing-signage-production.jpg",
    "/dtf-heat-press-apparel-printing-technology.jpg",
    "/cnc-laser-cutting-machine-industrial.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image Carousel with Smooth Transitions */}
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
        {/* Modern Gradient Overlay with Subtle Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-blue-900/60 to-slate-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          {/* Accent Line */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight text-balance tracking-tight">
            Transform Your Vision <br className="hidden sm:block" />
            Into Reality
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Premium printing, signage, and specialized printing services with cutting-edge technology and expert
            craftsmanship.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12 lg:mb-14">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6 sm:py-7 px-8 sm:px-10 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/15 py-6 sm:py-7 px-8 sm:px-10 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 hover:border-primary/50 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-3 justify-center">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
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
