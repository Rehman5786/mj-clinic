import { Heart, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">MJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">MJ Clinic</span>
                <span className="text-xs text-muted-foreground">Your trusted partner in health</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Providing compassionate and expert gynecological and obstetric care to women in Vijayawada. Your health
              and well-being are our top priorities.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-primary mr-2" />
              <span>Caring for women at every stage of life</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Dr. Tabassum
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#appointment" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Yenamalakuduru, Vijayawada, Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <a href="tel:+919381399448" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 93813 99448
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <a
                  href="mailto:dr.mtseaobg@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  dr.mtseaobg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} MJ Clinic. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Dr. Maimuna Tabassum - Gynecologist & Obstetrician
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
