"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
              Dimension Outlook
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X size={24} className="animate-rotate-slow" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-slideInDown">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition pl-2 border-l-2 border-transparent hover:border-primary duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition pl-2 border-l-2 border-transparent hover:border-primary duration-300" 
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-foreground hover:text-primary transition pl-2 border-l-2 border-transparent hover:border-primary duration-300"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition pl-2 border-l-2 border-transparent hover:border-primary duration-300"
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
