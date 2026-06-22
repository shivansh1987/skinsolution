"use client"

import { motion } from "motion/react"
import { CalendarCheck, ClipboardList, FileHeart, RefreshCw, Syringe } from "lucide-react"
import { Reveal } from "./reveal"

const steps = [
  { icon: CalendarCheck, title: "Book Consultation", desc: "Reach out and schedule your first visit at your convenience." },
  { icon: ClipboardList, title: "Skin & Hair Assessment", desc: "Detailed diagnosis using advanced analysis tools." },
  { icon: FileHeart, title: "Personalized Plan", desc: "A treatment plan designed specifically for your needs." },
  { icon: Syringe, title: "Treatment Sessions", desc: "Comfortable, safe, and effective procedure sessions." },
  { icon: RefreshCw, title: "Follow-Up & Monitoring", desc: "Ongoing care to track and sustain your results." },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-accent py-24 text-accent-foreground">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Treatment Process
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your Journey To Healthier Skin &amp; Hair
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* glowing pathway */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_oklch(0.72_0.16_162_/_0.6)]">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent-foreground/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
