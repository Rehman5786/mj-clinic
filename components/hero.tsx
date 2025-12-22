import { Button } from "@/components/ui/button"
import { Calendar, Heart, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/20 -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Trusted Patient's Healthcare</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Compassionate Care for Every Stage of Life
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Expert gynecological and obstetric services by Dr. Maimuna Tabassum at MJ Clinic, Yenamalakuduru,
              Vijayawada. Providing personalized, quality healthcare for women with care and dignity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#appointment">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="#services">
                  <Heart className="h-5 w-5 mr-2" />
                  Our Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-female-doctor-in-clinic-consultation-.jpg"
                alt="Dr. Maimuna Tabassum at MJ Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Consultation Fee</div>
                  <div className="text-xl font-bold text-foreground">Starting at ₹100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
