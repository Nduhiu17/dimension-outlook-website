"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative w-full h-screen md:h-screen overflow-hidden">
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
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-balance">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            Premium printing, signage, and specialized printing services with cutting-edge technology and expert
            craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-7 px-10 text-lg font-semibold transition-all duration-200 hover:scale-105">
              Get Started <ArrowRight className="ml-2" size={22} />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 py-7 px-10 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-200"
            >
              Learn More
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 justify-center mt-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
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
