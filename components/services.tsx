import { PrinterIcon, Zap, Palette, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <PrinterIcon className="w-8 h-8" />,
    title: "Signage & Large Formats",
    description: "Eye-catching indoor and outdoor signage solutions that elevate your brand visibility with precision.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Digital Printing",
    description:
      "High-quality digital printing for diverse materials with stunning color accuracy and fast turnaround.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "DTF Apparel Printing",
    description: "Premium Direct-to-Film printing with heat press for custom apparel and textiles with vibrant colors.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "CNC & Laser Services",
    description: "Precision cutting and engraving with state-of-the-art CNC and laser technology for custom designs.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 sm:py-24 lg:py-32 bg-gradient-to-b from-background via-blue-50 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
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
            <Card
              key={index}
              className="bg-white border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group overflow-hidden h-full"
            >
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <CardHeader className="pb-3 sm:pb-4">
                <div className="text-primary mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
