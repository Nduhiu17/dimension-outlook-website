"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const formattedMessage = `
📋 *New Contact Form Submission*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || "Not provided"}
🏢 *Company:* ${formData.company || "Not provided"}

💬 *Message:*
${formData.message}
    `.trim()

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(formattedMessage)
    const phoneNumber = "254717388209"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    
    // Show success message
    alert("Thank you! Your message is being sent to WhatsApp. Please complete the send process.")
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          {/* Accent Line */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today to discuss your printing, signage, apparel branding, or laser cutting project. Our team is here to help!
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  className="bg-background border-border text-foreground"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company (Optional)</label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="bg-background border-border text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="bg-background border-border text-foreground min-h-32"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-primary">+254 717 388 209</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-primary">info@dimensionoutlook.com</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  )
}
