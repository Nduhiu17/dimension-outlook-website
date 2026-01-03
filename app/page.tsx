"use client"
import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  // Optimize perceived performance with lazy loading for below-the-fold sections
  useEffect(() => {
    // Preload critical images after initial render
    const criticalImages = [
      "heroes/heroes-3.jpeg",
      "/about-us.jpg",
      "services/large-format-printing/large-format-printing-1.jpeg",
    ]

    // Use requestIdleCallback for non-critical preloading
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        criticalImages.forEach((src) => {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = "image"
          link.href = src
          document.head.appendChild(link)
        })
      })
    }
  }, [])

  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Benefits />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
