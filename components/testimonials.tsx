import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Kariuki",
    company: "Kariuki Marketing Group",
    text: "Dimension Outlook delivered exceptional quality on our signage project. Their attention to detail and quick turnaround impressed us tremendously.",
    rating: 5,
  },
  {
    name: "Sarah Omondi",
    company: "Fashion & Style Co",
    text: "The DTF printing service is outstanding. Our custom apparel looks premium and the colors are vibrant. Highly recommended!",
    rating: 5,
  },
  {
    name: "David Kipchoge",
    company: "Tech Solutions Ltd",
    text: "Professional, reliable, and affordable. Dimension Outlook is our go-to for all printing needs. They never disappoint.",
    rating: 5,
  },
  {
    name: "Grace Naliaka",
    company: "Retail Innovations",
    text: "The large format printing quality is incredible. Our retail signage looks stunning and has definitely helped boost sales.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real feedback from satisfied customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
