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
    image: "/professional-digital-printing-marketing-materials-.jpg",
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
    image: "/large-format-printing-production-quality-output.jpg",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see what we can do for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-primary text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
