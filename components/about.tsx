import { Users, Target, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "100+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "5000+",
      label: "Projects Completed",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "99%",
      label: "Client Satisfaction",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dimension Outlook
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Leading the printing and signage industry with innovation, quality, and customer excellence across Africa.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 items-center">
          <div className="animate-slideInLeft order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">Our Story</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Dimension Outlook Ltd is a leading provider of premium printing and signage solutions across East Africa. With over 15 years of industry expertise, we've established ourselves as the trusted partner for businesses seeking exceptional printing quality, innovative designs, and reliable service.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Our state-of-the-art facility houses cutting-edge equipment including digital printers, large format systems, DTF heat press technology, and precision laser/fiber cutting machines. This comprehensive capabilities allow us to deliver versatile solutions for signage, promotional materials, apparel branding, and custom design work.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We're committed to combining technical excellence with creative innovation. Every project reflects our dedication to quality, attention to detail, and customer satisfaction. Whether you need eye-catching large format signage, custom apparel, or precision-cut designs, Dimension Outlook delivers results that exceed expectations.
            </p>
          </div>

          {/* Company Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 animate-fadeInUp order-1 lg:order-2">
            <img
              src="/modern-printing-company-office-with-team.jpg"
              alt="Dimension Outlook Ltd Office"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-border hover:border-primary shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="text-primary mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.number}
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium">{stat.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white border border-border hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Our <span className="text-primary">Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To deliver exceptional printing and signage solutions using advanced technology and creative expertise. We empower businesses to communicate their brand message with stunning visual impact, while maintaining the highest standards of quality, reliability, and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border border-border hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Our <span className="text-primary">Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                To be East Africa's premier printing and signage partner, recognized for innovation, quality excellence, and transformative solutions that elevate brands and drive business success across all industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
