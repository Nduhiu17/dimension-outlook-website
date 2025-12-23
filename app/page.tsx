"use client"
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

export default function Home() {
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
    </main>
  )
}
