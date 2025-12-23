"use client"

import { useState, useEffect } from "react"
import { PrinterIcon, Zap, Palette, Package, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <PrinterIcon className="w-10 h-10" />,
    title: "Signage & Large Formats",
    description: "Eye-catching indoor and outdoor signage solutions that elevate your brand visibility with precision.",
    color: "from-blue-500 to-cyan-500",
    images: [
      "/professional-printing-press-machinery-digital-sign.jpg",
      "/large-format-printing-signage-production.jpg",
      "/professional-printing-equipment-digital-press.jpg",
    ],
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Digital Printing",
    description:
      "High-quality digital printing for diverse materials with stunning color accuracy and fast turnaround.",
    color: "from-purple-500 to-pink-500",
    images: [
      "/professional-printing-equipment-digital-press.jpg",
      "/professional-printing-press-machinery-digital-sign.jpg",
      "/large-format-printing-signage-production.jpg",
    ],
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "DTF Apparel Printing",
    description: "Premium Direct-to-Film printing with heat press for custom apparel and textiles with vibrant colors.",
    color: "from-orange-500 to-red-500",
    images: [
      "/dtf-heat-press-apparel-printing-technology.jpg",
      "/professional-printing-press-machinery-digital-sign.jpg",
      "/large-format-printing-signage-production.jpg",
    ],
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "CNC & Laser Services",
    description: "Precision cutting and engraving with state-of-the-art CNC and laser technology for custom designs.",
    color: "from-green-500 to-emerald-500",
    images: [
      "/cnc-laser-cutting-machine-industrial.jpg",
      "/professional-printing-equipment-digital-press.jpg",
      "/large-format-printing-signage-production.jpg",
    ],
  },
]

function ServiceCard({ service }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [service.images.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length)
  }

  return (
    <Card className="group relative bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      {/* Top Accent Bar */}
      <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>

      {/* Image Carousel Section */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-100">
        {service.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${service.title} slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-slate-900" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-slate-900" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {service.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="pb-3 sm:pb-4 relative z-10">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
          {service.icon}
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 flex-grow">
        <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </Card>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
          {/* Accent Line */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Comprehensive printing and signage solutions tailored to elevate your brand and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
