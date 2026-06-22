"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { Calendar, MessageCircle, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnergyStream, Particles } from "./particles"

const WHATSAPP = "https://wa.me/918853436234"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 18,
  })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/40 pb-20 pt-32 sm:pt-40"
    >
      <div className="absolute left-1/2 top-10 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <EnergyStream />
      <Particles count={16} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-foreground/80"
          >
            <span className="flex items-center gap-1 text-primary">
              <Star className="h-4 w-4 fill-primary" /> 5.0
            </span>
            Trusted Dermatology Clinic in Kanpur
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Healthy Skin. <span className="text-white">Stronger Hair.</span> Renewed
            Confidence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Expert dermatology and trichology care in Kanpur with personalized treatments
            for skin, hair loss, alopecia, laser procedures, acne, pigmentation, and
            aesthetic concerns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="group rounded-full font-semibold"
              render={<a href="#contact" />}
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 font-semibold"
              render={<a href={WHATSAPP} target="_blank" rel="noreferrer" />}
            >
              <MessageCircle className="h-5 w-5 text-primary" />
              WhatsApp Consultation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {[
              { icon: Star, label: "5.0 Rating", sub: "Patient verified" },
              { icon: ShieldCheck, label: "236+ Reviews", sub: "Real patients" },
              { icon: Calendar, label: "Same-day", sub: "Consultations" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-none">{b.label}</p>
                  <p className="text-xs text-muted-foreground">{b.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D tilt showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          style={{ perspective: 1200 }}
        >
          <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glow-shadow relative rounded-[2rem] border border-border/60 bg-card p-3"
          >
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <Image
                src="/hero-treatment.png"
                alt="Radiant healthy skin after dermatology treatment at Skin Solutions"
                width={640}
                height={720}
                priority
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
            </div>

            {/* floating glass cards */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              className="animate-float-soft glass absolute -left-4 top-16 rounded-2xl border border-border/60 p-3 shadow-lg sm:-left-8"
            >
              <p className="text-xs font-medium text-muted-foreground">Hair Density</p>
              <p className="font-heading text-xl font-bold text-primary">+42%</p>
              <p className="text-[10px] text-muted-foreground">after 12 weeks</p>
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(80px)" }}
              className="animate-float-soft glass absolute -right-4 bottom-20 flex items-center gap-3 rounded-2xl border border-border/60 p-3 shadow-lg sm:-right-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold leading-none">Skin Analysis</p>
                <p className="text-xs text-muted-foreground">AI-assisted scan</p>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent/80 px-4 py-2 backdrop-blur">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
              ))}
              <span className="ml-1 text-xs font-semibold text-accent-foreground">
                236+ reviews
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
