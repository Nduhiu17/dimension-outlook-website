"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dimension Outlook
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors duration-200">
              About
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
