"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"

export function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    consultationType: "general",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  // ✅ API-based submission (DESIGN UNCHANGED)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      setSubmitMessage("Appointment request submitted successfully!")
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        consultationType: "general",
        message: "",
      })
    } catch {
      setSubmitMessage("Failed to submit appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  const today = new Date().toISOString().split("T")[0]

  return (
    <section
      id="appointment"
      className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Book Your Appointment
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground text-pretty">
            Schedule your visit with Dr. Maimuna Tabassum. Choose a convenient time
            and we'll confirm your appointment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    min={today}
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="19:00">07:00 PM</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:00">09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Consultation Type *
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      value="general"
                      checked={formData.consultationType === "general"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consultationType: e.target.value,
                        })
                      }
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">General (₹100)</div>
                      <div className="text-sm text-muted-foreground">
                        Routine check-ups
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      value="specialized"
                      checked={formData.consultationType === "specialized"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          consultationType: e.target.value,
                        })
                      }
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Specialized (₹150)</div>
                      <div className="text-sm text-muted-foreground">
                        Complex cases
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Please provide any additional information..."
                />
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Book Appointment"}
              </Button>

              {submitMessage && (
                <div className="p-4 bg-accent/10 border rounded-lg text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </Card>

          {/* Clinic Info */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Clinic Hours</h3>
              <div className="flex justify-between text-sm">
                <span>Mon - Sat</span>
                <span>9AM–1PM & 4PM–9PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sunday</span>
                <span>9AM–1PM</span>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Emergency Contact</h3>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+919381399448">+91 93813 99448</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:dr.mtseaobg@gmail.com">
                  dr.mtseaobg@gmail.com
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
