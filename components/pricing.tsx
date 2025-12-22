import { Card } from "@/components/ui/card"
import { Check, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Pricing() {
  const pricingPlans = [
    {
      title: "General Consultation",
      price: 100,
      description: "For routine check-ups and general health concerns",
      features: [
        "Complete health assessment",
        "Medical history review",
        "Physical examination",
        "Basic diagnostic consultation",
        "Prescription and advice",
        "Follow-up guidance",
      ],
      popular: false,
    },
    {
      title: "Specialized Consultation",
      price: 200,
      description: "For complex cases requiring specialized attention",
      features: [
        "All general consultation benefits",
        "Detailed diagnostic evaluation",
        "Advanced treatment planning",
        "Specialized care guidance",
        "Comprehensive health report",
        "Priority appointment scheduling",
        "Quality care for pregnancy and gynecological issues",
        "Infertility consultation and support",
      ],
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Transparent & Affordable Pricing
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground text-pretty">
            Quality healthcare shouldn't break the bank. We offer competitive pricing with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom ${
                plan.popular ? "border-primary shadow-lg scale-105 md:scale-110" : "hover:-translate-y-1"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <IndianRupee className="h-8 w-8 text-primary" />
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ 10 days</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="h-6 w-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="ml-3 text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                <Link href="#appointment">Book Appointment</Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All consultations are by appointment only. Emergency services available upon request.
          </p>
        </div>
      </div>
    </section>
  )
}
