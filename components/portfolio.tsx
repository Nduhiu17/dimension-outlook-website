import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    title: "Large Format Billboard Design",
    category: "Signage",
    image: "/large-format-billboard-advertising-signage-design.jpg",
  },
  {
    id: 2,
    title: "Custom Apparel Printing",
    category: "DTF Printing",
    image: "/custom-apparel-t-shirt-printing-dtf-heat-transfer.jpg",
  },
  {
    id: 3,
    title: "Digital Print Campaign",
    category: "Digital Printing",
   image: "/retail-store-signage-branding-installation-modern-.jpg",
  },
  {
    id: 4,
    title: "Precision Laser Cutting",
    category: "Laser Services",
    image: "/cnc-laser-cutting-engraving-precision-work-materia.jpg",
  },
  {
    id: 5,
    title: "Retail Signage Installation",
    category: "Signage",
    image: "/retail-store-signage-branding-installation-modern-.jpg",
  },
  {
    id: 6,
    title: "Large Format Production",
    category: "Large Formats",
     image: "/retail-store-signage-branding-installation-modern-.jpg",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          {/* Accent Line */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see what we can do for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-primary text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fadeInUp">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground py-6 px-8 font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 group">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
