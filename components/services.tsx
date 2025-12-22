import { Card } from "@/components/ui/card"
import { Baby, HeartPulse, Stethoscope, Users, Activity, Calendar, Shield, UserCheck, Microscope } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Prenatal Care",
      description: "Comprehensive pregnancy monitoring and care throughout all trimesters",
      color: "bg-chart-1/10 text-chart-1",
    },
    {
      icon: Microscope,
      title: "Gynecological Screening & HPV Vaccination",
      description: "Regular health screenings and preventive care for women of all ages",
      color: "bg-chart-2/10 text-chart-2",
    },
    {
      icon: Stethoscope,
      title: "Obstetric Services",
      description: "Expert care for pregnancy, delivery planning, and postnatal support",
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Personalized counseling and contraception options for family planning",
      color: "bg-chart-4/10 text-chart-4",
    },
    {
      icon: Activity,
      title: "Fertility Consultation",
      description: "Assessment and guidance for couples planning to conceive",
      color: "bg-chart-5/10 text-chart-5",
    },
    {
      icon: Calendar,
      title: "Menstrual Disorders",
      description: "Diagnosis and treatment of irregular periods and related conditions",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Shield,
      title: "Menopause Management",
      description: "Comprehensive care and support during menopausal transition",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: UserCheck,
      title: "General Consultation",
      description: "Expert advice for all women's health concerns and queries",
      color: "bg-secondary/30 text-secondary-foreground",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Healthcare Services
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground text-pretty">
            From routine check-ups to specialized care, we offer a complete range of gynecological and obstetric
            services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-14 w-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-3">
              Have Questions About Our Services?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Contact us for personalized guidance and support.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
