"use client"

import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "./reveal"

const WHATSAPP = "https://wa.me/918853436234"
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Swaroop+Nagar+Khalasi+Line+Kanpur"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Get In Touch
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Book Your Consultation Today
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Visit us or reach out — our team is ready to help you on your skin and hair
            journey.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="font-heading text-xl font-bold">Skin Solutions</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    113/206, Near Pind Balluchi Restaurant, Khalasi Line, Swaroop Nagar,
                    Kanpur, Uttar Pradesh 208002
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href="tel:8853436234" className="font-medium text-foreground">
                    88534 36234
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">Mon – Sat: 10:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-full border-primary/40 font-semibold px-5 py-2 h-12">
                  <a href="tel:8853436234">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </Button>
               <Button asChild variant="outline" className="rounded-full border-primary/40 font-semibold px-5 py-2 h-12">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                   <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-primary/40 font-semibold px-5 py-2 h-12">
                  <a
                 href="https://maps.app.goo.gl/2eJK9VNTwbbajazh8"
                 target="_blank"
                 rel="noreferrer"
>
                    <Navigation className="h-4 w-4 text-primary" /> Directions
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-border/60">
            <iframe
              title="Skin Solutions location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.340722880985!2d80.31273037608398!3d26.482459078446823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4799eaaaaaab%3A0xe2021a5efd8ce215!2sSkin%20Solutions-%20Best%20Skin%20Clinic%20in%20Kanpur!5e0!3m2!1sen!2sin!4v1782191702641!5m2!1sen!2sin"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
