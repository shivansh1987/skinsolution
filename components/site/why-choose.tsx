"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Award, HeartPulse, Settings2, Smile, Star, Users } from "lucide-react"
import { Reveal } from "./reveal"

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const features = [
  { icon: Star, title: "236+ Positive Reviews", desc: "Verified patient feedback you can trust." },
  { icon: Users, title: "Experienced Team", desc: "Skilled dermatology & trichology experts." },
  { icon: Settings2, title: "Personalized Plans", desc: "Treatments tailored to your unique needs." },
  { icon: Award, title: "Advanced Equipment", desc: "Modern, certified medical technology." },
  { icon: HeartPulse, title: "Evidence-Based Care", desc: "Proven, science-led treatment protocols." },
  { icon: Smile, title: "Comfortable Environment", desc: "Friendly, confidential, and welcoming." },
]

const stats = [
  { to: 236, suffix: "+", label: "Patient Reviews" },
  { to: 5, suffix: ".0", label: "Average Rating" },
  { to: 10, suffix: "+", label: "Years Experience" },
  { to: 15, suffix: "+", label: "Treatments Offered" },
]

export function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why Patients Trust Skin Solutions
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 rounded-3xl border border-border/60 bg-accent p-6 text-accent-foreground sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-secondary sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-accent-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl border border-border/60 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
