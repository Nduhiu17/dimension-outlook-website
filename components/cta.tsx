import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const phoneNumber = "+254717388209"
  const projectMessage = "Hello! I'd like to start a project with you. Can you help with printing and signage solutions?"
  const quoteMessage = "Hi! I'm interested in getting a quote for your printing and signage services."

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slideInDown">
            Transform Your Ideas Into Professional Results
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slideInUp" style={{ animationDelay: '100ms' }}>
            Whether you need vibrant signage, custom apparel, precision cutting, or professional printing, our team is ready to deliver exceptional quality. Let's bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-zoomIn" style={{ animationDelay: '200ms' }}>
            <Button 
              onClick={() => handleWhatsAppClick(projectMessage)}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground py-6 px-8 text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 group"
            >
              Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => handleWhatsAppClick(quoteMessage)}
              variant="outline"
              className="border-muted-foreground text-foreground hover:bg-muted hover:border-primary py-6 px-8 text-base bg-transparent transition-all duration-300 group"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
