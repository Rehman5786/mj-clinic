import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Visit Our Clinic
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground text-pretty">
            Find us at our convenient location in Yenamalakuduru, Vijayawada. We're here to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <Card className="p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      MJ Clinic, Yenamalakuduru
                      <br />
                      Vijayawada, Andhra Pradesh
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+919381399448" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 93813 99448
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call for appointments and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-chart-2" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:dr.mtseaobg@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dr.mtseaobg@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Send us your queries anytime</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-chart-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon - Sat: 9:00 AM - 1:00 PM & 4:00 PM - 9:00 PM</p>
                      <p>Sunday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h4 className="font-semibold text-foreground mb-3">How to Reach Us</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MJ Clinic is conveniently located in Yenamalakuduru, Vijayawada, with easy access via public
                transportation and ample parking space. We're committed to making your visit as comfortable as possible.
              </p>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-300">
            <Card className="p-2 overflow-hidden">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.4891391878132!2d80.6779687!3d16.4777373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb00132e3271%3A0xedbe273b306bfb80!2sMJ%20Clinic!5e0!3m2!1sen!2sin!4v1765822390988!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MJ Clinic Location"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
