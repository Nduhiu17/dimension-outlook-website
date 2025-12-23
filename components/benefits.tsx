import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Expert Craftsmanship",
    description: "Our team brings years of experience in printing and signage production.",
  },
  {
    title: "Cutting-Edge Technology",
    description: "State-of-the-art equipment ensures the highest quality outputs.",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery times without compromising on quality.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored services to meet your unique business requirements.",
  },
  {
    title: "Competitive Pricing",
    description: "Great value for premium quality printing and signage services.",
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer support for your peace of mind.",
  },
]

export default function Benefits() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          {/* Accent Line */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Dimension Outlook
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 animate-fadeInUp group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 group-hover:text-secondary group-hover:scale-125 transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
