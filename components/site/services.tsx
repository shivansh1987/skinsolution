"use client"

import { motion } from "motion/react"
import { Droplets, Scan, Sparkles, Stethoscope, Syringe, Waves } from "lucide-react"
import { Reveal } from "./reveal"

const services = [
  {
    icon: Waves,
    title: "Hair Loss & Alopecia Treatment",
    desc: "Advanced diagnosis and customized hair regrowth solutions for lasting results.",
  },
  {
    icon: Sparkles,
    title: "Acne & Scar Treatment",
    desc: "Target active acne, scars, and skin inflammation effectively and safely.",
  },
  {
    icon: Scan,
    title: "Laser Treatments",
    desc: "Modern laser procedures for skin resurfacing and unwanted hair concerns.",
  },
  {
    icon: Syringe,
    title: "Chemical Peels",
    desc: "Professional skin rejuvenation and pigmentation improvement treatments.",
  },
  {
    icon: Droplets,
    title: "Hydra Facial",
    desc: "Deep cleansing, exfoliation, and intense skin hydration treatments.",
  },
  {
    icon: Stethoscope,
    title: "General Dermatology",
    desc: "Comprehensive care for skin, nail, and hair disorders of all kinds.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Our Services
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Premium Treatments For Skin &amp; Hair
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Comprehensive, science-backed dermatology and aesthetic care tailored to you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-border/60 bg-card p-7 transition-shadow hover:shadow-[0_24px_60px_-24px_oklch(0.72_0.16_162_/_0.45)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 font-heading text-xl font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
