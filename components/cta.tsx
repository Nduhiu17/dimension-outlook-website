import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create something amazing together. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground py-6 px-8 text-base">
            Start Your Project <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            className="border-muted-foreground text-foreground hover:bg-muted py-6 px-8 text-base bg-transparent"
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
