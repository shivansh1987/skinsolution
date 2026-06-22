"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Quote, Star } from "lucide-react"
import { Reveal } from "./reveal"

const reviews = [
  {
    quote: "Wonderful experience, super friendly doctors and staff. The whole process felt comfortable and professional.",
    name: "Priya S.",
    tag: "Skin Treatment",
    avatar: "/avatar-1.png",
  },
  {
    quote: "Excellent experience and very soft spoken and understanding doctor. Highly recommend this clinic.",
    name: "Rahul M.",
    tag: "Consultation",
    avatar: "/avatar-2.png",
  },
  {
    quote: "Best place for skin issues. I finally found a clinic that actually listens and delivers real results.",
    name: "Aditi K.",
    tag: "Acne Care",
    avatar: "/avatar-3.png",
  },
  {
    quote: "I saw visible improvement in my hair growth after treatment. Genuinely grateful for the care here.",
    name: "Vikram T.",
    tag: "Hair Regrowth",
    avatar: "/avatar-4.png",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden py-24">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Patient Testimonials
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Loved By 236+ Happy Patients
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-sm font-semibold">5.0 average rating</span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col rounded-2xl border border-border/60 p-6"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
                {r.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <Image
                  src={r.avatar || "/placeholder.svg"}
                  alt={r.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold leading-none">{r.name}</p>
                  <p className="mt-1 text-xs text-primary">{r.tag}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
