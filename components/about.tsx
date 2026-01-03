import { Users, Target, Award, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
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
          <div className="animate-slideInLeft order-2 lg:order-1 group">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300">Our Story</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              Dimension Outlook Ltd is a duly-registered and a leading provider of premium printing and signage solutions across East Africa. With over 15 years of industry expertise, we've established ourselves as the trusted partner for businesses seeking exceptional printing quality, innovative designs, and reliable service.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              Our state-of-the-art facility houses cutting-edge equipment including digital printers, large format systems, DTF heat press technology, and precision laser/fiber cutting machines. This comprehensive capabilities allow us to deliver versatile solutions for signage, promotional materials, apparel branding, and custom design work.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
              We're committed to combining technical excellence with creative innovation. Every project reflects our dedication to quality, attention to detail, and customer satisfaction. Whether you need eye-catching large format signage, custom apparel, or precision-cut designs, Dimension Outlook delivers results that exceed expectations.
            </p>
          </div>

          {/* Company Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 animate-fadeInUp order-1 lg:order-2 group hover:shadow-2xl transition-all duration-500">
            <img
              src="/about-us.jpg"
              alt="Dimension Outlook Ltd Office"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-border hover:border-primary shadow-md hover:shadow-lg transition-all duration-300 group animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-3 sm:pb-4 relative z-10">
                <div className="text-primary mb-2 group-hover:scale-125 group-hover:text-secondary transition-all duration-300">{stat.icon}</div>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:text-primary transition-all duration-300">
                  {stat.number}
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-medium group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white border border-border hover:shadow-xl transition-all duration-300 group animate-slideInLeft overflow-hidden">
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                Our <span className="text-primary">Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                To deliver sustainable valuable designs, prints and online & offline branding services for individuals and businesses.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white border border-border hover:shadow-xl transition-all duration-300 group animate-slideInRight overflow-hidden">
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-secondary transition-colors duration-300">
                Our <span className="text-secondary">Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                To be the continent's leading provider of innovative, sustainable, and customer-centric printing and signage solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white border border-border hover:shadow-xl transition-all duration-300 group animate-fadeInUp overflow-hidden" style={{ animationDelay: "100ms" }}>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                Our <span className="text-primary">Focus</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                Customer Service, Quality and Timely delivery
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-white border border-border hover:shadow-xl transition-all duration-300 group animate-fadeInUp overflow-hidden" style={{ animationDelay: "150ms" }}>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="pb-4 relative z-10">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                Our <span className="text-primary">Promise</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                Excellence in every project, delivering value beyond expectations
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
