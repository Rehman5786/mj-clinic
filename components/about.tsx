import { Card } from "@/components/ui/card"
import { Award, GraduationCap, Heart, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Expert Qualification",
      description: "Specialized in Gynecology & Obstetrics with extensive medical training",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Patient-centered approach with empathy and understanding",
    },
    {
      icon: Award,
      title: "Proven Experience",
      description: "5+ years of excellence in women's healthcare",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Over 500+ satisfied patients across Vijayawada and nearby areas",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-left duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/female-doctor-with-stethoscope-smiling-professiona.jpg" alt="Dr. Maimuna Tabassum" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Meet Dr. Maimuna Tabassum
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Dr. Maimuna Tabassum is a highly qualified and experienced gynecologist and obstetrician dedicated to
                providing exceptional healthcare services to women in Vijayawada and surrounding areas. 
              </p>
              <p className="text-pretty">
                At MJ Clinic in Yanamalakuduru, we believe in treating every patient with dignity, respect, and
                compassion. Our mission is to provide accessible, affordable, and high-quality healthcare that addresses
                the unique needs of patients at every stage of life.
              </p>
              <p className="text-pretty">
                With over a decade of experience and thousands of successful consultations, Dr. Maimuna Tabassum has earned the
                trust of the community through her expertise, dedication, and genuine care for her patients' well-being.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
