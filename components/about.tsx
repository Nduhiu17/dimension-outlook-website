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
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dimension Outlook
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leading the printing and signage industry with innovation, quality, and customer excellence across Africa.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded over 15 years ago, Dimension Outlook Ltd has been at the forefront of printing and signage
              solutions in East Africa. What started as a small print shop has evolved into a comprehensive service
              provider offering cutting-edge printing technologies and custom signage solutions.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We pride ourselves on delivering exceptional quality, innovative designs, and unmatched customer service.
              Our team of experienced professionals is committed to bringing your vision to life with precision,
              creativity, and attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With state-of-the-art equipment and a passion for excellence, we continue to set industry standards and
              exceed customer expectations on every project.
            </p>
          </div>

          {/* Company Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 animate-fadeInUp">
            <img
              src="/modern-printing-company-office-with-team.jpg"
              alt="Dimension Outlook Ltd Office"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 border border-border hover:border-primary shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.number}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white border border-border hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, high-quality printing and signage solutions that empower businesses to
                communicate their brand message effectively and leave a lasting impression on their audience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border border-border hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading printing and signage company in Africa, recognized for innovation, quality excellence,
                and customer satisfaction, setting industry benchmarks for sustainable growth and excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
