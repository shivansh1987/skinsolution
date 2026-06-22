"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus } from "lucide-react"
import { Reveal } from "./reveal"

const faqs = [
  {
    q: "What treatments do you offer?",
    a: "We offer comprehensive dermatology and trichology care including hair loss and alopecia treatment, acne and scar treatment, laser procedures, chemical peels, hydra facials, and general skin, hair, and nail care.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book instantly by calling us at 88534 36234, messaging us on WhatsApp, or using the booking section on this page. We offer flexible and same-day slots.",
  },
  {
    q: "Do you treat hair loss and alopecia?",
    a: "Yes. We specialize in advanced diagnosis of hair loss and alopecia, and create customized regrowth plans using evidence-based trichology treatments.",
  },
  {
    q: "Are laser treatments safe?",
    a: "Our laser treatments use modern, certified equipment and are performed by experienced professionals, making them safe and effective for suitable candidates after assessment.",
  },
  {
    q: "How many sessions are required?",
    a: "The number of sessions depends on your specific concern and treatment plan. Your dermatologist will outline an expected timeline during your personalized assessment.",
  },
  {
    q: "Do you offer skin consultations?",
    a: "Absolutely. We provide confidential, detailed skin consultations to diagnose your concern and recommend the most effective treatment approach.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border bg-card transition-colors ${
                    isOpen ? "border-primary/50 shadow-[0_0_0_1px_oklch(0.72_0.16_162_/_0.2)]" : "border-border/60"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold">{item.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
